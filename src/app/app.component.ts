import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Armando"
  nombre2:string = "armando enrique iglesias acu~a";
  title = 'app';
  arreglo = [0,1,2,3,4,6,7,8,9];

  PI= Math.PI;
  a:number = 0.234;

  fecha = new Date(1982, 10, 28);

  video:string = 'kCosAoovYv8';
  activar:boolean = true;
}
