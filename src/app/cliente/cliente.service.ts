import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../modelo/cliente';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient
  ) { }

  buscaTodos(): Promise<Cliente[]> {
    let url = `${environment.baseUrl}/cliente/todos`;
    return this.httpCliente.get<Cliente[]>(url).toPromise();
  }
}
