import { AbstractControl, ValidationErrors } from "@angular/forms";
import { PropertyOwnerService } from "../../services/custom/property.owner.service";
import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UsernameValidators {
    
    timer : any;

    constructor(private propertyownerservice : PropertyOwnerService){}

    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace : true};
        return null;
    }

    shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        clearTimeout(this.timer);
        return new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                this.propertyownerservice.check_Property_Owner_Data_Unique(new HttpParams().set('username', control.value))
                    .subscribe(response => {
                        if(response)
                            resolve (null);
                        else 
                        resolve ({shouldBeUnique : true});
                    });
            }, 1000);
        })
    }

}
