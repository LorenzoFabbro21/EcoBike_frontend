import { Component } from '@angular/core';
import { Bicicletta } from 'src/app/interfaces/bicicletta';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-bikes-for-rent',
  templateUrl: './bikes-for-rent.component.html',
  styleUrls: ['./bikes-for-rent.component.scss']
})
export class BikesForRentComponent {
  bikesVendita: Bicicletta[] = [];
  mostraSpinner:boolean = true;

  
  constructor (private ebService: EcobikeApiService, private userService: UserLoggedService) {

    
    this.ebService.list_bikes_forRent_by_user(1).subscribe({
      next:(response: Bicicletta[]) => {
        if(response != null) {
          this.mostraSpinner = false;
          this.bikesVendita = response;
        }
      }
    });
  }
}