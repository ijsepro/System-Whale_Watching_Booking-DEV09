import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Injectable } from "@angular/core";
import { PropertyOwnerService } from "../../services/custom-service/property-owner.service";
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

    // static clientName(control : AbstractControl) : ValidationErrors | null {
    //     if ((control.value as string) === '' || control.value === null)
    //         return {cannotContainSpace : true};
    //     else if((control.value as string).length >= 3 && (control.value as string).length <= 30)
    //         return {cannotContainSpace : true};
    //     return null;
    // }

    static passwordConfirming(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.get('password').value !== control.get('conform_password').value) 
                resolve ({passwordConfirming: true});
            else
                resolve (null);
        });
    }

    // ifExists(control : AbstractControl) : Promise<ValidationErrors | null> {
    //     clearTimeout(this.timer);
    //     return new Promise((resolve, reject) => {
    //         this.timer = setTimeout(() => {
    //             this.propertyownerservice.check_Property_Owner_If_Exists(new HttpParams().set('email', control.value))
    //                 .subscribe(response => {
    //                     console.log('control.value : ' + control.value + ' , responce : ' + response);
    //                     if(response)
    //                         resolve (null);
    //                     else 
    //                         resolve ({ifExists : true});
    //                 });
    //         }, 1000);
    //     })
    // }

}
