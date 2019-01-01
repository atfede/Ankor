import { Component } from '@angular/core';

/**
 * Generated class for the SimuladoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'simuladores',
  templateUrl: 'simuladores.html'
})
export class SimuladoresComponent {

  text: string;

  constructor() {
    console.log('Hello SimuladoresComponent Component');
    this.text = 'Hello World';
  }

}
