import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http: HttpClient) { }

  get providers(){
    const path = `${API.baseUrl}/proveedores.php`;
    return this.http.get(path);
  }
}
