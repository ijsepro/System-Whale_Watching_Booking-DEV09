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
import { DatePipe, CommonModule } from '@angular/common';
import { PropertyOwnerService } from './services/custom/property.owner.service';
import { UsernameValidators } from './common/validators/username.validators';
import { SharedDataService } from './services/data-service/shared-data.service';
import { ClientService } from './services/custom/client.service';
import { CommonValidators } from './common/validators/common.validators';

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
    PropertyOwnerService,
    ClientService,
    DatePipe,
    UsernameValidators,
    CommonValidators,
    SharedDataService,
    {provide : ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
