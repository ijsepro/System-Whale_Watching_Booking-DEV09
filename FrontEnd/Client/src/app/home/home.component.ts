import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auther-service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    
    model = {
        left: true,
        middle: false,
        right: false
    };

    constructor(private authService : AuthService, private router : Router, private route: ActivatedRoute) {
        if(authService.isLoggedIn())
            if(authService.curruntUser.type === 'property_owner')
                this.router.navigate(['/profile']);
    }

    ngOnInit() {}

}
