import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'//para ocupar validatos

@Component({
  selector: 'app-servicio-al-cliente',
  templateUrl: './servicio-al-cliente.component.html',
  styleUrls: ['./servicio-al-cliente.component.scss']
})
export class ServicioAlClienteComponent implements OnInit {

  formulario:FormGroup;
  formularioValido:boolean = false;


  constructor(public FormB:FormBuilder) {
    this.formulario=FormB.group({
      nombre:["",[Validators.required,Validators.maxLength(30),Validators.minLength(3) ]], //los "" son el value
      telefono:["",[Validators.required,Validators.min(100000000),Validators.max(999999999) ]], //min y max para tipo number
      correoElectronico:["",[Validators.required, Validators.email]],
      dirigidoA:["",[Validators.required]],
      mensaje:["",[Validators.required,Validators.minLength(10)]]
    })
   }

  ngOnInit(): void {
  }


  validacion(){
  
    this.formularioValido = true;
    //window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0&t','_blank');
  }

}
