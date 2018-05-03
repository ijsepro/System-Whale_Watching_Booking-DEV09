import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signinclient',
  templateUrl: './signinclient.component.html',
  styleUrls: ['./signinclient.component.scss']
})
export class SigninclientComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
