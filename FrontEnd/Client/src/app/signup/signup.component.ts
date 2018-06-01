import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    posts: any[];

    constructor(private service: SignupService) {
        this.service.getEmail().subscribe(response => {
            this.posts = response.json();
        });
    }

    ngOnInit() {}
}
