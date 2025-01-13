import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  // nombre, edad, metodo, capitalizado
  public nombre: string = 'ironman';
  public edad: number = 18;
  public metodo: string = 'Metodo';
  public nombreCapital: string = (this.nombre[0]).toUpperCase() + this.nombre.slice(1,4);


  // el metodo se ejecuta cuando detecta un cambio en this.nombre
  get capitalizedName(): string{
    return this.nombre[0].toUpperCase() + this.nombre.slice(1,)
  }

  edadNombre(): string{
    return `${this.edad} - ${this.nombre}`;
  }

  cambiarEdad(): void{
  //   const nuevaEdad = Number(prompt('Inserte la edad'));
  //   if (nuevaEdad){
  //     if (nuevaEdad <= 45){
  //       this.edad = nuevaEdad;
  //     }else{
  //       alert('debe ser menor a 45');
  //     }

  //   }else{
  //     alert('No ingreso una edad');
  //   }
  // }
    this.edad = 25;
  }

  cambiarNombre(): void{
    // const nuevoNombre = prompt('Inserte el nombre');
    // if (nuevoNombre){
    //   this.nombre = nuevoNombre;
    // }else{
    //   alert('No ingreso un nombre');
    // }
    this.nombre = 'Spiderman';
  }

  resetForm(): void{
    this.nombre = 'ironman';
    this.edad = 18;
  }

}

