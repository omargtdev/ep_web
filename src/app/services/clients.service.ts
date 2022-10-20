import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  get clients(){
    const path = `${API.baseUrl}/servicioclientes.php`;
    return this.http.get(path);
  }
}
