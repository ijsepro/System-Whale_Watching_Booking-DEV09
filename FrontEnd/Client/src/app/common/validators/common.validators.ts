import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import { PropertyOwnerService } from "../../services/custom/property.owner.service";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class CommonValidators {

    timer : any;

    constructor(private propertyownerservice : PropertyOwnerService){}

    static cannotBeNull(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) =>{
            if((control.value as string) === ''){
                resolve ({cannotBeNull : true});
            }
            else 
                resolve (null);
        });
    }

    static clientName(control : AbstractControl) : ValidationErrors | null {
        if ((control.value as string) === '' || control.value === null)
            return {cannotContainSpace : true};
        else if((control.value as string).length >= 3 && (control.value as string).length <= 30)
            return {cannotContainSpace : true};
        return null;
    }

    static passwordConfirming(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.get('password').value !== control.get('conform_password').value) 
                resolve ({passwordConfirming: true});
            else
                resolve (null);
        });
    }

    ifExists(control : AbstractControl) : Promise<ValidationErrors | null> {
        // console.log('common');
        clearTimeout(this.timer);
        return new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                this.propertyownerservice.check_Property_Owner_Email_IfExists(new HttpParams().set('email', control.value))
                .subscribe(response => {
                    // console.log('common : res : ' + response);
                        if(response)
                            resolve ({shouldBeUnique : true});
                        else 
                            resolve (null);
                    });
            }, 1000);
        })
    }

}
