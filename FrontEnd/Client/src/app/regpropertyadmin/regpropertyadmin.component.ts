import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';
import { CommonValidators } from '../common/validators/common.validators';
import { EmailValidators } from '../common/validators/email.validators';
import { ObjectTypes } from '../common/enums/object-types.enum';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { SharedDataService } from '../services/data-service/shared-data.service';
import { RouterLink, Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../services/auther-service/auth.service';

@Component({
  selector: 'app-regpropertyadmin',
  templateUrl: './regpropertyadmin.component.html',
  styleUrls: ['./regpropertyadmin.component.scss']
})
export class RegpropertyadminComponent implements OnInit {

  form: FormGroup = null;
  fileToUpload: File = null;
  image_url = '../../assets/img/favicon.ico';
  // image_url = require('./src/assets/img/default-avatar.png');

  constructor(private formBuilder: FormBuilder, private datepipe: DatePipe, private usernamevalidators: UsernameValidators, private emailvalidators: EmailValidators, private router: Router, private authService: AuthService) {

    if (authService.isLoggedIn() && authService.curruntUser.type === 'property_owner')
      this.router.navigate(['/profile']);

    this.form = formBuilder.group({
      property_owner_name: ['', Validators.pattern('([A-Za-z]+[.]?[\\s]*?)+[A-Za-z][\\\']?([A-Za-z]*?[\\s]*?)*?'), CommonValidators.cannotBeNull],
      address_postal_code: [],
      address_street_and_num: [],
      address_city: ['', Validators.pattern('[A-Za-z]*([\\s]*?[A-Za-z0-9]*?[\\s]*?)*?')],
      address_country: [''],
      email: ['', Validators.email, emailvalidators.shouldBeUnique.bind(emailvalidators)],
      username: ['', Validators.pattern('[A-Za-z][A-Za-z0-9_]{5,14}'), usernamevalidators.shouldBeUnique.bind(usernamevalidators), CommonValidators.cannotBeNull], //  first must be charactor, 6 <= username >= 15 , other will be charactors | integer and cannot contain space or special charactors
      passwords: this.formBuilder.group({
        password: ['', Validators.pattern('(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,14}'), CommonValidators.cannotBeNull],
        conform_password: ['']
        // }, { validators : CommonValidators.passwordConfirming })
      })
    });

    if (SharedDataService.Instance.Type === ObjectTypes.PROPERTY_OWNER_REGISTRATION) {
      let formData: FormData = SharedDataService.Instance.SharedData;

      this.form.get('property_owner_name').setValue(formData.get('property_owner_name'));
      this.form.get('address_postal_code').setValue(formData.get('address_postal_code'));
      this.form.get('address_street_and_num').setValue(formData.get('address_street_and_num'));
      this.form.get('address_city').setValue(formData.get('address_city'));
      this.form.get('address_country').setValue(formData.get('address_country'));
      this.form.get('email').setValue(formData.get('email'));
      this.form.get('username').setValue(formData.get('username'));

      this.fileToUpload = formData.get('profile_picture') as File;
      if (this.fileToUpload) {
        this.displayImage();
      }
    }

  }

  ngOnInit() { }

  get property_owner_name() {
    return this.form.get('property_owner_name');
  }

  get email() {
    return this.form.get('email');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('passwords.password');
  }

  get conform_password() {
    return this.form.get('passwords.conform_password');
  }

  fileuploaderOnChange(event) {
    this.fileToUpload = event.target.files[0];
    this.displayImage();
  }

  //// display image
  displayImage() {
    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (event: Event) => {
      this.image_url = reader.result;
    }
  }

  next() {

    let formdata = new FormData();

    for (let row in this.form.getRawValue()) {
      let val: string = this.form.get(row).value;
      if ((row as string) === 'username')
        formdata.append(row, val.trim().toLowerCase());
      else if ((row as string) === 'passwords') {
        formdata.append('password', this.form.get(row + '.password').value);
      } else
        formdata.append(row, val !== null ? val.trim() : null);
    }
    formdata.append('profile_picture', this.fileToUpload, this.fileToUpload !== null ? this.fileToUpload.name : null);
    formdata.append('registerd_date', this.datepipe.transform(new Date(), 'yyyy-MM-d HH:mm:ss a'));

    SharedDataService.Instance.setSharedData(ObjectTypes.PROPERTY_OWNER_REGISTRATION, formdata);

    this.router.navigate(['/termspolicies']);

  }





















  // getAll (){
  //   this.service.get_Property_Owners()
  //     .subscribe(responce => {
  //       console.log(responce);
  //     });
  // }

  // search () {
  //   this.service.search_Property_Owner(new HttpParams().append('property_owner_id', '45'))
  //     .subscribe(
  //       responce => {
  //         console.log(responce);
  //       });
  // }

  // update (){
  //   let formdata = new FormData();

  //   this.service.update_Property_Owner(formdata)
  //     .subscribe(
  //       responce => {
  //         console.log(responce);
  //       });
  // }

  // delete () {
  //   this.service.delete_Property_Owner(new HttpParams().append('property_owner_id', '48'))
  //     .subscribe(
  //       () => {
  //         console.log(1);
  //       },
  //       (error : AppError) => {
  //         if(error instanceof NotFoundError)
  //           alert ('This post has already deleted..');
  //         else throw error;
  //       });
  // }

}

