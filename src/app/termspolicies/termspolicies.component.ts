import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termspolicies',
  templateUrl: './termspolicies.component.html',
  styleUrls: ['./termspolicies.component.scss']
})
export class TermspoliciesComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
