import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from '../common/validators/common.validators';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { PropertyOwnerService } from '../services/custom/property.owner.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  
  test : Date = new Date();

  form : FormGroup = null;

  constructor(formBuilder : FormBuilder, private commonvalidator : CommonValidators,private router : Router, private service : PropertyOwnerService) {
    this.form = formBuilder.group({
      email : ['', commonvalidator.ifExists.bind(commonvalidator), CommonValidators.cannotBeNull],
      password : []
    });
  }

  ngOnInit() {
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    
    this.service.check_Property_Owner_username_email(new HttpParams().append('email', this.form.get('email').value).append('password', this.form.get('password').value))
      .subscribe(responce => {
        if(responce){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              'username': this.getUserName()
            }};
          this.router.navigate(['/user-profile'], navigationExtras)
        } else {
          alert('Invalid Login');
        }
      });

  }

  getUserName(){
    this.service.search_Property_Owner(new HttpParams().append('email', this.form.get('email').value))
      .subscribe(responce=>{
        return responce['username'];
      });
    return null;
  }

}
