import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/entities';
import { ProvidersService } from 'src/app/services/providers.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  providers: Provider[]

  constructor(private providersService: ProvidersService) {
    this.providers = [];
   }

  ngOnInit(): void {
    this.providersService.providers.subscribe((res) => {
      this.providers = JSON.parse(JSON.stringify(res));
    })
  }

}
