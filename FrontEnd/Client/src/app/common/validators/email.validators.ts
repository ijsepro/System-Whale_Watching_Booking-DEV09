import { Injectable } from "@angular/core";
import { PropertyOwnerService } from "../../services/custom-service/property-owner.service";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class EmailValidators {
    
    timer : any;

    constructor(private propertyownerservice : PropertyOwnerService){}

    shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        clearTimeout(this.timer);
        return new Promise((resolve, reject) => {
            this.timer = setTimeout(() => {
                this.propertyownerservice.check_Property_Owner_If_Exists(new HttpParams().set('email', control.value))
                    .subscribe(response => {
                        if(response)
                            resolve ({shouldBeUnique : true});
                        else 
                            resolve (null);
                    });
            }, 1000);
        })
    }

}
