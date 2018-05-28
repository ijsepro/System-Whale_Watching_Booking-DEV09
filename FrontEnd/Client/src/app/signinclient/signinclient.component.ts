import {Component, ElementRef, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import { ClientService } from '../services/custom/client.service';

@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.scss']
})
export class SigninclientComponent implements OnInit {
  customer: any[];

  // constructor(private service: CustomerService, private elem: ElementRef) {
  constructor(private service: ClientService, private elem: ElementRef) {
  }

  ngOnInit() {
  }

  registerCustomer() {
    // let files = this.elem.nativeElement.querySelector('#selectFile').files;

      const formData = new FormData();
    // let file = files[0];

    // formData.append('selectFile', file, file.name);

    const name = this.elem.nativeElement.querySelector('#txtName').value;
    const email = this.elem.nativeElement.querySelector('#txtEmail').value;
    const nationality = this.elem.nativeElement.querySelector('#cmbNationality').value;
    const contact = this.elem.nativeElement.querySelector('#txtContact').value;
    const password = this.elem.nativeElement.querySelector('#txtPassword').value;

    formData.append('customer_name', name);
    formData.append('nationality', nationality);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('contact', contact);

    // this.service.registerCustomer(formData)
    this.service.insert_Client(formData)
        .subscribe(res => {
          if (res.json() === 1) {
            console.log(res);
            alert('Successfully Registered You may Login Now')
          } else {
            console.log(res);
            alert('Error Registering  New User')
          }
        });

  }


}
