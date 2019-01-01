import { Component } from '@angular/core';

/**
 * Generated class for the DresinteticoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dresintetico',
  templateUrl: 'dresintetico.html'
})
export class DresinteticoComponent {

  text: string;

  constructor() {
    console.log('Hello DresinteticoComponent Component');
    this.text = 'Hello World';
  }

}
