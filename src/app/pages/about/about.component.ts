import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entities';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  clients: Client[]
  clientSelected: Client | undefined

  constructor(private clientsService: ClientsService) { 
    this.clients = []
    this.clientSelected = undefined
  }

  ngOnInit(): void {
    this.clientsService.clients.subscribe(res => {
      this.clients = JSON.parse(JSON.stringify(res));
    })
  }

  selectRow(client: Client){
    this.clientSelected = client;
    console.log(client);
  }

}
