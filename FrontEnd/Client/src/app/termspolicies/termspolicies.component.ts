import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/data-service/shared-data.service';
import { Router } from '@angular/router';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { PropertyOwnerService } from '../services/custom-service/property-owner.service';
import { AuthService } from '../services/auther-service/auth.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-termspolicies',
  templateUrl: './termspolicies.component.html',
  styleUrls: ['./termspolicies.component.scss']
})
export class TermspoliciesComponent implements OnInit {

  test: Date = new Date();
  username: string;

  constructor(private service: PropertyOwnerService, private router: Router, private authService: AuthService) {

    if (authService.isLoggedIn())
      if (authService.curruntUser.type === 'property_owner')
        this.router.navigate(['/profile']);

  }

  ngOnInit() {
  }

  register() {
    let formData: FormData = SharedDataService.Instance.SharedData;

    this.service.insert_Property_Owner(formData)
      .subscribe(responce => {
        if (responce['status']) {
          this.authService.logIn(new HttpParams().append('usernameOrEmail', formData.get('username') as string).append('password', formData.get('password') as string))
            .subscribe(responce => {
              if (responce['status'])
                this.router.navigate(['/profile'])
              else {
                alert(responce['result']);
                this.router.navigate(['/adminlogin'])
              }
            });
          SharedDataService.Instance.setSharedData(null, null);
        } else {
          alert(responce['result']);
          this.router.navigate(['/regpropertyadmin'])
        }

      }, (error: AppError) => {
        if (error instanceof BadInput)
          alert('Property Owner Registration Faild..');
        else
          throw error;
      });

  }

}
