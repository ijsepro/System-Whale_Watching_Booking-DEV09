import {Component, ElementRef, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.scss']
})
export class SigninclientComponent implements OnInit {
  customer: any[];

  constructor(private service: CustomerService, private elem: ElementRef) {
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
    const nationality = this.elem.nativeElement.querySelector('cmbNationality').value;
    const contact = this.elem.nativeElement.querySelector('#txtContact').value;
    const password = this.elem.nativeElement.querySelector('#txtPassword').value;

    formData.append('name', name);
    formData.append('email', email);
    formData.append('nationality', nationality);
    formData.append('contact', contact);
    formData.append('password', password);

    this.service.registerCustomer(formData)
        .subscribe(res => {
          if (res.json() === 1) {
            alert('Successfully Registered You may Login Now')
          } else {
            alert('Error Registering  New User')
          }
        });

  }


}
