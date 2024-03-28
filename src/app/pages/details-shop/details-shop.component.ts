import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bicicletta } from 'src/app/interfaces/bicicletta';
import { shop } from 'src/app/interfaces/shop';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';

@Component({
  selector: 'app-details-shop',
  templateUrl: './details-shop.component.html',
  styleUrls: ['./details-shop.component.scss']
})
export class DetailsShopComponent {

  shop?: shop;
  id: number = 0;
  biciclette?: Bicicletta[]=[];
  idUser: number = 0;
  mostraSpinner:boolean = true;
  
    constructor ( private route: ActivatedRoute, private ebService: EcobikeApiService) {
    
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe(params => {
      this.id = JSON.parse(params['idShop']);
      this.idUser = JSON.parse(params['idUser']);
    });

    this.ebService.get_shop(this.id).subscribe ({
      next: (response: shop) => {
        if (response != null)
          this.shop = response
      }
    })

    this.ebService.list_bikes_forRent_by_user(this.idUser).subscribe ({
      next: (response: Bicicletta[]) => {
        this.biciclette = response;
        this.mostraSpinner = false;
      }
    })

  }

}
