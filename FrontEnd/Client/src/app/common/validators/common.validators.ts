import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CommonValidators {

    static cannotBeNull(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) =>{
            if((control.value as string) !== '')
                resolve ({cannotBeNull : true});
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

}
