import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {RegpropertyadminComponent} from './regpropertyadmin/regpropertyadmin.component';
import {TermspoliciesComponent} from "./termspolicies/termspolicies.component";
import {SigninclientComponent} from "./signinclient/signinclient.component";
import {ForgetpassComponent} from "./forgetpass/forgetpass.component";
import {BoatregComponent} from "./boatreg/boatreg.component";
import { AuthGuard } from './services/auther-service/auth-guard.service';
import { AuthAdminGuard } from './services/auther-service/auth-admin-guard.service';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'profile',          component: ProfileComponent, canActivate: [AuthGuard, AuthAdminGuard] },
    { path: 'signup',           component: SignupComponent },
    { path: 'adminlogin',       component: AdminloginComponent},
    { path: 'termspolicies',    component: TermspoliciesComponent},
    { path: 'signinclient',     component: SigninclientComponent},
    { path: 'forgetpass',       component: ForgetpassComponent},
    { path: 'regpropertyadmin', component: RegpropertyadminComponent },
    { path: 'boatreg',          component: BoatregComponent},
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
