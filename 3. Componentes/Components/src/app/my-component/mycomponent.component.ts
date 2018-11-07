import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: '/mycomponent.html'
})
export class MyComponent {
    name = "Diego Cortés";

    getValue(value: number, multiplier: number): number {
        return value * multiplier;
      }
}