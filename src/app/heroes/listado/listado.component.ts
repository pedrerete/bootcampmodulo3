import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  contador = 1;
  heroes:string[] = ["superman", "batman", "spiderman","mujer maravilla"];
  heroeBorrado: string = ''
  borrarHeroe(valor:number){
    if(valor>0&& valor<=this.heroes.length ){
    this.heroeBorrado = this.heroes[valor-1]
    this.heroes.splice(valor-1,1)
  }
  }
  sumar() {
    this.contador++;
  }
  restar() {
    this.contador--;
  }
  }

