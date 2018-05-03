import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
