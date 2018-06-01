import { ErrorHandler } from "@angular/core";

// export class AppErrorHandler implements ErrorHandler{
export class AppErrorHandler{

    handleError(error){
        alert ('An unexpected error occurred..');
        console.log (error);
    }

}