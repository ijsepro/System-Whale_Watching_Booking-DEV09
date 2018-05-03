import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
