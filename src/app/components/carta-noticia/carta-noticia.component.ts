import { Component, Input, OnInit } from '@angular/core';
import {Noticias} from 'src/app/interface/noticias'

@Component({
  selector: 'app-carta-noticia',
  templateUrl: './carta-noticia.component.html',
  styleUrls: ['./carta-noticia.component.scss']
})
export class CartaNoticiaComponent implements OnInit {

  @Input()
  noticiasCarta:Noticias;

  constructor() { 
    this.noticiasCarta = {
      id:0,categiora:'',imagen:'',titulo:'',contenidoBase:'',contenidoCompleto:'',autor:'',fechaDePublicacion:''

    };
  }

  ngOnInit(): void {
  }

  setearIdBotonesNoticia(){
    let botones:any = document.getElementsByClassName("btn btn-primary noticias");

    for(let i = 0; i < botones.length; i++)
    {
      botones[i].id = i;
    }
  }

  verNoticiaCompleta(id:any){
    let textoCompleto:any = document.getElementsByClassName("text-center completo");
    let textoBase:any = document.getElementsByClassName("text-center base");
    
    let flag:boolean = true;
    for(let i = 0; i < textoCompleto.length && flag; i++)
    {
      //para que el boton si tenemos el id de la noticia y si el id de la noticia es el mismo que el boton entonces ocupa el de la noticia tarado
      if(i+1 == id){
        textoCompleto[i].removeAttribute("hidden");
        textoBase[i].style.display = "none";
        flag = false;
      }
      
    }
    

    
    
  }

}
