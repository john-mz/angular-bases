import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>counter: {{counter}}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">RESET</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy( value: number ): void{
    if (value == 1){
      this.counter += 1;
    }else{
      this.counter -= 1;
    }
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
