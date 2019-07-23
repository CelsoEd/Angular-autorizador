import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../modelo/cliente';
import {ClienteService} from '../cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.buscaContas();
  }

  private async buscaContas() {
    this.clientes = await this.clienteService.buscaTodos();
  }


}
