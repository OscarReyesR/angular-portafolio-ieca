import { Component, OnInit } from '@angular/core';
import { Pokemon } from './Interfaces/pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fundamentals-app';
  appName:string="Fundamentos! :D";
  logoURL:string="https://tenor.com/es/view/shigure-ui-dance-ui-mama-ui-shigure-vtuber-gif-2648758480676059053.gif";
  btnDisabled:boolean = true;
  email:string = "prueba@gmail.com";

  mostrarAlerta() {
    alert("Alerta ⚠️")
  }

  contadorOvejas:number = 0

  contarOveja() {
    this.contadorOvejas += 1
  }//end function contarOveja()

  
  establecerOvejas(event: Event) {
    const element = event.target as HTMLInputElement;

    try {
      const numeroOvejas: number = parseInt(element.value);
      if (numeroOvejas > 0) {
        this.contadorOvejas = numeroOvejas;
      }
    } catch {
      console.log('No es un número');
    }
  }//end function establecerOvejas()

  persona:any = {
    nombre: ''
  }

  listaPersonas: string[] = []

  agregarPersona():void {
    this.listaPersonas.push(this.persona.nombre)
    this.persona.nombre = ''
  }//end function agregarPersona()

  borrarPersona(index: number):void {
    this.listaPersonas.splice(index, 1)
  }//end function borrarPersona()

  miPokedex: Pokemon[] = [];

  ngOnInit(): void {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${Math.floor(Math.random() * 501)}`)
      .then((response) => response.json())
      .then((data) => {
        this.miPokedex = data.results
        this.miPokedex.forEach((item,index) =>{console.log("item ",item);
        fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`).then((response)=>response.json())
        .then((data)=>{
          this.miPokedex[index].image=data.sprites.front_default;
        });
      });
      console.log("pokedex ",this.miPokedex);
      });


  }

  nuevoPokemon: string = "";

}

