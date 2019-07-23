import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaClientesComponent} from './lista-clientes/lista-clientes.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListaClientesComponent
  ]
})
export class ClienteModule { }
