import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/data-service/shared-data.service';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-termspolicies',
  templateUrl: './termspolicies.component.html',
  styleUrls: ['./termspolicies.component.scss']
})
export class TermspoliciesComponent implements OnInit {
  
  test : Date = new Date();
  username : string;
  
  constructor(private shareddataservice : SharedDataService, private router : Router, private route : ActivatedRoute) {
    this.route.queryParams.subscribe(
      parms => {
        this.username = parms['username'];
      });
    }
    
    ngOnInit() {
    }
    
  loadProfile(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          'username': this.username
      }};
      this.router.navigate(['/user-profile'], navigationExtras)
  }

}
