import { Component, OnInit } from '@angular/core';
import {Noticias} from 'src/app/interface/noticias'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public noticias: Noticias[];
  public noticiasOtras: Noticias[];

  constructor() {
    this.noticias = [
      {"id":1,"categiora":"entretenimineto","imagen":"hogar.jpg","titulo":"El juego del calamar se concierte en la serie más vista de netflix",
      "contenidoBase":"Orem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend mi ac nulla laoreet facilisis. Pellentesque porta lorem ut lacus facilisis, in rutrum sem auctor. Pellentesque fermentum lacinia lobortis",
      "contenidoCompleto":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","autor":"xavier","fechaDePublicacion":"11-02-2020"},
      {"id":2,"categiora":"deporte","imagen":"bicicleta.jpg","titulo":"Dune cuando y donde ver en cines la nueva pelicula de ciencia fincción protagonizada por Timothy Chalameeet",
      "contenidoBase":"Fusce ac pellentesque odio. Aliquam erat volutpat. Curabitur dictum, tellus at aliquet imperdiet, tortor arcu sollicitudin purus, et molestie odio nisi eu dolor",
      "contenidoCompleto":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","autor":"xavier","fechaDePublicacion":"11-02-2020"},
      {"id":3,"categiora":"mundo","imagen":"naturaleza.jpg","titulo":"Las 5 series mas vistas de la naturaleza",
      "contenidoBase":"roin et viverra felis, in iaculis nunc. Sed elementum, dui id eleifend commodo, felis nisl faucibus orci, vitae cursus velit est feugiat nisl. Aenean convallis faucibus metus id imperdiet",
      "contenidoCompleto":"Sed eu tempus turpis. Phasellus aliquam viverra ipsum, vel varius elit bibendum eget. Cras viverra velit eu varius auctor. Vivamus auctor magna at rhoncus hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet sodales neque nec condimentum. Morbi accumsan nulla et dui pellentesque, nec volutpat nisi condimentum.","autor":"xavier","fechaDePublicacion":"11-02-2020"},
    ]

    this.noticiasOtras = [
      {"id":4,"categiora":"otras","imagen":"cafe.jpg","titulo":"5 beneficios del café para su salud",
      "contenidoBase":"Nam vitae consequat nibh. Duis in venenatis eros. Sed consectetur enim et elit iaculis convallis. Ut sed odio interdum, molestie lectus id, vehicula sapien. In hac habitasse platea dictumst",
      "contenidoCompleto":"Nullam malesuada diam ut justo aliquet finibus. Pellentesque eros ligula, congue laoreet magna sed, bibendum porta elit. Donec varius lectus scelerisque augue sagittis fermentum. Nulla commodo elit in urna pretium, quis dictum dui bibendum. Nulla facilisi.","autor":"xavier","fechaDePublicacion":"11-02-2020"},
      {"id":5,"categiora":"otras","imagen":"cieloNocturno.jpg","titulo":"Descubra su que significa su signo del zodiaco",
      "contenidoBase":"Ut sed mauris mauris. Aenean eget justo porttitor, finibus nulla vitae, eleifend dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
      "contenidoCompleto":"Praesent id orci iaculis, dignissim nibh sed, facilisis arcu. Nunc a cursus risus. Nunc eleifend elit ut eleifend facilisis. Proin sagittis lacus ac odio maximus pharetra. Duis bibendum ut felis ut auctor. Nulla facilisi. In auctor felis urna, ut vestibulum metus malesuada sed","autor":"xavier","fechaDePublicacion":"11-02-2020"},
      {"id":6,"categiora":"otras","imagen":"montañas.jpg","titulo":"Alpinismo extremo",
      "contenidoBase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis molestie lacus. Maecenas lacus risus, auctor non facilisis quis, hendrerit quis dolor. Nulla ante metus, consequat non consectetur in, mattis sed lorem. Nunc eu elementum libero. Integer augue tortor, mattis eu felis id, bibendum rutrum leo",
      "contenidoCompleto":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris aliquam sit amet nulla sed bibendum. Morbi iaculis mattis diam sit amet tincidunt. Aenean vel leo ut ipsum maximus sollicitudin. Nulla a eros molestie risus dapibus laoreet ut ac dui","autor":"xavier","fechaDePublicacion":"11-02-2020"},
      {"id":7,"categiora":"otras","imagen":"armas.jpg","titulo":"USA lo hace otra vez",
      "contenidoBase":"uisque a venenatis velit. Nam eu risus posuere, tristique neque in, ultricies erat. Nam pharetra lorem sollicitudin ante molestie iaculis. Nullam nisi ante, sagittis ut aliquet a, pulvinar eget magna. Morbi ac urna dui",
      "contenidoCompleto":"Fusce congue sem sed convallis fringilla. Suspendisse ornare ullamcorper dui. In sit amet varius lacus. Donec rhoncus, orci eu aliquet sagittis, metus eros elementum nisl, non feugiat lorem nunc sit amet tellus. Ut nec ultricies purus, ultricies tincidunt orci. Sed pulvinar dolor ut egestas viverra. Nullam eleifend vel sem pretium accumsan. Aliquam a libero sed urna luctus luctus","autor":"xavier","fechaDePublicacion":"11-02-2020"}
    ]
  }

  ngOnInit(): void {
  }

}
