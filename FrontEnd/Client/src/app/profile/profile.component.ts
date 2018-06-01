import { Component, OnInit } from '@angular/core';
import { PropertyOwnerService } from '../services/custom-service/property-owner.service';
import { HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auther-service/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    property_owner_id : string = '';
    property_owner_name : string = '';
    profile_picture : string = '../src/assets/img/default-avatar.png';
    file : File = null;

    constructor(private service : PropertyOwnerService, private authservice : AuthService, private router : Router,  private route : ActivatedRoute) {
        // if(authservice.isLoggedIn) {
            this.property_owner_id = authservice.curruntUser.property_owner_id;
            this.loadProfile();
        // } else 
        //     this.router.navigate(['/home']);
        // else this.route.queryParams
        //         .subscribe(parms => {
        //             this.property_owner_id = parms['property_owner_id'];
        //             this.loadProfile();
        //         });
    }

    ngOnInit() {}

    loadProfile(){
        this.service.search_Property_Owner(new HttpParams().append('property_owner_id', this.property_owner_id))
            .subscribe(responce => {
                this.profile_picture = responce[0]['profile_picture'];
                this.property_owner_name = responce[0]['property_owner_name'];
                // console.log(this.profile_picture);
            });
    }

    logOut(){
        this.authservice.logOut();
    }

}
