import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';
import { CommonValidators } from '../common/validators/common.validators';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { PropertyOwnerService } from '../services/custom/property.owner.service';

@Component({
  selector: 'app-regpropertyadmin',
  templateUrl: './regpropertyadmin.component.html',
  styleUrls: ['./regpropertyadmin.component.scss']
})
export class RegpropertyadminComponent implements OnInit {

  form : FormGroup = null;
  fileToUpload: File = null;
  image_url = './src/assets/img/default-avatar.png';
  // image_url = require('./src/assets/img/default-avatar.png');

  constructor(private formBuilder : FormBuilder, private datepipe : DatePipe, private service : PropertyOwnerService) {

    this.form =  formBuilder.group({
      property_owner_name : ['', Validators.pattern('([A-Za-z]+[.]?[\\s]*?)+[A-Za-z][\\\']?([A-Za-z]*?[\\s]*?)*?')],
      address_postal_code : [],
      address_street_and_num : [],
      address_city : ['', Validators.pattern('[A-Za-z]*([\\s]*?[A-Za-z0-9]*?[\\s]*?)*?')],
      address_country : [''],
      email : ['', Validators.email],
      username : ['',Validators.pattern('[A-Za-z][A-Za-z0-9_]{5,14}'), UsernameValidators.shouldBeUnique], //  first must be charactor, 6 <= username >= 15 , other will be charactors | integer and cannot contain space or special charactors
      // password : ['',Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,14}')], // Minimum six characters, at least one letter, one number and one special character
      // conform_password : ['',Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,14}')] // Minimum six characters, at least one letter, one number and one special character
      passwords: this.formBuilder.group({
        password: ['', Validators.pattern('(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,14}')],
        conform_password: ['', Validators.pattern('(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,14}')]
      })
      // }, { validators : CommonValidators.passwordConfirming })
    });
  }
  
  get property_owner_name(){
    return this.form.get('property_owner_name');
  }

  get email(){
    return this.form.get('email');
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('passwords.password');
  }

  get conform_password(){
    return this.form.get('passwords.conform_password');
  }

  next(){
    this.register_property_owner();
  }

  ngOnInit() {}

  fileuploaderOnChange(event) {

    this.fileToUpload = event.target.files[0];
    
    // display image
    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (event : Event) => {
      this.image_url = reader.result;
    }

  }

  register_property_owner () {

    let date = new Date();
    let formdata = new FormData();
    
    for (let row in this.form.getRawValue()){
      let val : string = this.form.get(row).value;
      if((row as string) === 'username')
        formdata.append(row, val.trim().toLowerCase());
      else if ((row as string) === 'passwords') {
        formdata.append('password', this.form.get(row + '.password').value);
      } else 
        formdata.append(row, val !== null ? val.trim() : null);
    }
    formdata.append('profile_picture', this.fileToUpload, this.fileToUpload !== null ? this.fileToUpload.name : null);
    formdata.append('registerd_date', this.datepipe.transform(date, 'yyyy-MM-d HH:mm:ss a'));

    // let pending = false;  
    // pending = true;
    // console.log('pending...' + pending);
    this.service.insert_Property_Owner( formdata )
    .subscribe(
      responce => {
        console.log(responce);
      },
      (error : AppError) => {
        if(error instanceof BadInput){
          alert ('This post input data has error..');
        } else throw error;
      });
    // pending = false;
    // console.log('pended...' + this.pending);
  
  }




















  getAll (){
    this.service.get_Property_Owners()
      .subscribe(responce => {
        console.log(responce);
      });
  }

  search () {
    this.service.search_Property_Owner(new HttpParams().append('property_owner_id', '45'))
      .subscribe(
        responce => {
          console.log(responce);
        });
  }

  update (){
    let formdata = new FormData();

    this.service.update_Property_Owner(formdata)
      .subscribe(
        responce => {
          console.log(responce);
        });
  }

  delete () {
    this.service.delete_Property_Owner(new HttpParams().append('property_owner_id', '48'))
      .subscribe(
        () => {
          console.log(1);
        },
        (error : AppError) => {
          if(error instanceof NotFoundError)
            alert ('This post has already deleted..');
          else throw error;
        });
  }

}

