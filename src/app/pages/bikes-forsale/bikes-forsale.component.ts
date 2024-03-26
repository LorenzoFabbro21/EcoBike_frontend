import { Component, OnInit } from '@angular/core';
import { Bicicletta } from 'src/app/interfaces/bicicletta';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-bikes-forsale',
  templateUrl: './bikes-forsale.component.html',
  styleUrls: ['./bikes-forsale.component.scss']
})
export class BikesForsaleComponent{

  bikesVendita: Bicicletta[] = [];
  mostraSpinner:boolean = true;

  
  constructor (private ebService: EcobikeApiService, private userService: UserLoggedService) {

    
    this.ebService.list_bikes_forsale_by_user(1).subscribe({
      next:(response: Bicicletta[]) => {
        if(response != null) {
          this.mostraSpinner = false;
          this.bikesVendita = response;
        }
      }
    });
  }
}