import { Component, OnInit } from '@angular/core';
import { PropertyOwnerService } from '../services/custom/property.owner.service';
import { HttpParams } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    profile_picture : string = '../src/assets/img/default-avatar.png';
    property_owner_name : any;
    file : File = null;

    constructor(private service : PropertyOwnerService, private sanitization : DomSanitizer, private route : ActivatedRoute) {
        this.route.queryParams.subscribe(
            parms => {
                let username = parms['username'];
                this.loadProfile(username);
            });
    }

    ngOnInit() {}

    loadProfile(username){
        this.service.search_Property_Owner(new HttpParams().append('username', username))
        .subscribe(
            responce => {
                // if(responce[0]['profile_picture']){
                //     this.profile_picture = responce[0]['profile_picture'];
                // }
                    
                this.property_owner_name = responce[0]['property_owner_name'];
            //   this.property_owner_name = this.sanitization.bypassSecurityTrustStyle(responce[0]['property_owner_name']);;
                
            });
            // let reader = new FileReader();
            // reader.readAsDataURL();
            // reader.onload = (event : Event) => {
            //   this.image_url = reader.result;
            // }
    }

}
