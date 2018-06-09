import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyOwnerService } from '../services/custom-service/property-owner.service';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auther-service/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  // test : Date = new Date();

  form: FormGroup = null;
  invalidLogin: boolean;
  errorMsg: string = '';

  // constructor(formBuilder : FormBuilder, private router : Router, private service : PropertyOwnerService) {
  constructor(formBuilder: FormBuilder, private router: Router, private authService: AuthService) {

    if (authService.isLoggedIn())
      if (authService.curruntUser.type === 'property_owner')
        this.router.navigate(['/profile']);

    this.form = formBuilder.group({
      usernameOrEmail: [],
      password: []
    });

  }

  ngOnInit() {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login() {

    // this.service.property_Owner_Login(new HttpParams().append('usernameOrEmail', this.form.get('usernameOrEmail').value).append('password', this.form.get('password').value))
    //   .subscribe(responce => {
    //     if(responce['status']){
    //       this.router.navigate(['/profile'], {
    //         queryParams: { property_owner_id : responce['result'] }
    //       })
    //     } else {
    //       this.invalidLogin = true;
    //       this.errorMsg = responce['result']; 
    //       alert(responce['result']);
    //     }
    //   });
    this.authService.logIn(new HttpParams().append('usernameOrEmail', this.form.get('usernameOrEmail').value).append('password', this.form.get('password').value))
      .subscribe(responce => {
        if (responce['status']) {
          // console.log('this.authService.curruntUser : ', this.authService.curruntUser);
          // this.router.navigate(['/profile'], {
          //   // queryParams: { property_owner_id : responce['result']['property_owner_id'] }
          //   queryParams: this.authService.curruntUser
          // })
          this.router.navigate(['/profile'])
        } else {
          this.invalidLogin = true;
          this.errorMsg = responce['result'];
          // alert(responce['result']);
        }
      });

  }

}
