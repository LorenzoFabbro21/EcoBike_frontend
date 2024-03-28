import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { adRent } from 'src/app/interfaces/adRent';
import { adSell } from 'src/app/interfaces/adSell';
import { Bicicletta } from 'src/app/interfaces/bicicletta';
import { bikeRentSell } from 'src/app/interfaces/bikeRentSell';
import { userBikeInfo } from 'src/app/interfaces/userBikeInfo';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';


@Component({
  selector: 'app-bikes-sold',
  templateUrl: './bikes-sold.component.html',
  styleUrls: ['./bikes-sold.component.scss']
})
export class BikesSoldComponent {

  bikesVendita: Bicicletta[] = [];
  sells: userBikeInfo[] = [];
  bikeSold: userBikeInfo[] = [];

  constructor (private ebService: EcobikeApiService, private userService: UserLoggedService) {
  
    if ( this.userService.userLogged?.id !== undefined && this.userService.userLogged?.token !== undefined) {
      const token: string = this.userService.userLogged?.token;
      this.ebService.list_bikes_sold_by_user(this.userService.userLogged?.id, token).subscribe({
        next: (response: userBikeInfo[]) => {
          if(response != null) {
            this.sells = response;
            this.sells.forEach(bike => {
              const obj: userBikeInfo = {
                user: bike.user,
                bike: bike.bike,
                appointment: bike.appointment,
                ad: bike.ad 
              }
              this.bikeSold.push(obj);
            });
          }
        }
      });
    }
    
  }
}