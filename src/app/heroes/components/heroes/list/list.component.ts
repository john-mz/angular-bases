import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Capitan America', 'Iron Man'];
  public heroeBorrado?: string; // es igual a 'string | undefined'

  deleteLastHero(): void {
    // if (this.heroNames.length != 0) {
    this.heroeBorrado = this.heroNames.pop();
      // console.log(this.heroNames);
    // }
  }
}
