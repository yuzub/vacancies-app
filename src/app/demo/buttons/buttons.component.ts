import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vcn-buttons',
  template: `
  <button mat-button>
    <mat-icon>face</mat-icon>
    Click me!
  </button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
