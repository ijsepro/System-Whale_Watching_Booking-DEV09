import { Component, OnInit } from '@angular/core';
import { PropertyOwnerService } from '../services/custom-service/property-owner.service';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auther-service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PropertyService } from '../services/custom-service/property.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    property_owner_id: string = '';
    property_owner_name: string = '';
    profile_picture: string = '../../assets/img/default-avatar.png';
    file: File = null;
    propertyForm: FormGroup = null;

    constructor(private formBuilder: FormBuilder, private propertyOwnerService: PropertyOwnerService, private propertyService : PropertyService, private authService: AuthService, private datepipe: DatePipe) {
        this.property_owner_id = authService.curruntUser.property_owner_id;
        this.loadProfile();
        this.propertyForm = formBuilder.group({
            property_name: [''],
            special_description: [''],
            description: [''],
            seat_count: ['']
        });
    }

    ngOnInit() { }

    loadProfile() {
        this.propertyOwnerService.search_Property_Owner(new HttpParams().append('property_owner_id', this.property_owner_id))
            .subscribe(responce => {
                this.profile_picture = responce[0]['profile_picture'] !== null ? responce[0]['profile_picture'] : this.profile_picture;
                this.property_owner_name = responce[0]['property_owner_name'];
            });
    }

    logOut() {
        this.authService.logOut();
    }

    addProperty() {
        let formData = new FormData();

        for (let row in this.propertyForm.getRawValue()) {
            let val: string = this.propertyForm.get(row).value;
            formData.append(row, val !== null ? val.trim() : null);
        }
        formData.append('property_owner_id', this.property_owner_id);
        formData.append('registerd_date', this.datepipe.transform(new Date(), 'yyyy-MM-d HH:mm:ss a'));
        this.propertyService.insert_Property(formData)
            .subscribe(responce =>{
                console.log(responce);
            });
    }

}
