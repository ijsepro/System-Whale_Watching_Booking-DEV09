import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegpropertyadminComponent } from './regpropertyadmin/regpropertyadmin.component';
import { TermspoliciesComponent } from './termspolicies/termspolicies.component';
import { SigninclientComponent } from './signinclient/signinclient.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { BoatregComponent } from './boatreg/boatreg.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/app-error-handler';
import { DatePipe } from '@angular/common';
import { PropertyOwnerService } from './services/custom-service/property-owner.service';
import { PropertyService } from './services/custom-service/property.service';
import { CustomerService } from './services/custom-service/customer.service';
import { UsernameValidators } from './common/validators/username.validators';
import { CommonValidators } from './common/validators/common.validators';
import { EmailValidators } from './common/validators/email.validators';
import { AuthService } from './services/auther-service/auth.service';
import { AuthGuard } from './services/auther-service/auth-guard.service';
import { AuthAdminGuard } from './services/auther-service/auth-admin-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AdminloginComponent,
    RegpropertyadminComponent,
    TermspoliciesComponent,
    SigninclientComponent,
    ForgetpassComponent,
    BoatregComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    // database services
    PropertyOwnerService,
    PropertyService,
    CustomerService,
    // validators
    UsernameValidators,
    CommonValidators,
    EmailValidators,
    // error handler
    { provide: ErrorHandler, useClass: AppErrorHandler },
    // auther
    AuthService,
    AuthGuard,
    AuthAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
