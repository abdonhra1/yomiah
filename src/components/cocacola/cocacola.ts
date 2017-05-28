import { Component } from '@angular/core';

@Component({
  selector: 'cocacola',
  templateUrl: 'cocacola.html'
})
export class Cocacola {

  text: string;

  constructor() {
    console.log('Hello Cocacola Component');
    this.text = 'Hello Cocacola';
  }

}
