import { Component } from '@angular/core';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { shop } from 'src/app/interfaces/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {

  shops: shop[]=[];
  mostraSpinner: boolean= true;

  constructor (private ebService: EcobikeApiService) {
    this.ebService.list_shops().subscribe({
      next: (response: shop[]) => {
        if( response != null) {
          this.shops = response;
        }
        this.mostraSpinner = false;
      }
    })
  }
}
