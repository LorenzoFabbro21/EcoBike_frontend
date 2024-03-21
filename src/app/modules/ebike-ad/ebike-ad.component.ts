import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Taglia } from 'src/app/enum/tagliaEnum';
import { adRent } from 'src/app/interfaces/adRent';
import { adSell } from 'src/app/interfaces/adSell';
import { Bicicletta } from 'src/app/interfaces/bicicletta';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';

@Component({
  selector: 'app-ebike-ad',
  templateUrl: './ebike-ad.component.html',
  styleUrls: ['./ebike-ad.component.scss']
})
export class EbikeAdComponent implements OnInit{

  @Input()
    bicicletta?: Bicicletta

  @Input()
    prezzo?: number = 0;

  firstImage:string = "";
  constructor ( private router: Router, private ebService: EcobikeApiService) {

  }

  ngOnInit(): void {
    if(this.bicicletta!== undefined && this.bicicletta.img !== undefined){
      const splittedStrings = this.bicicletta.img.split('data:image/jpeg;base64');
      const images : string[] = [];
      splittedStrings.forEach((image: string) => {
        if ( image !== "") {
          images.push('data:image/jpeg;base64'+ image);
        }    
      });
      this.firstImage = images[0];
    } 
  }

  clickBike() {
    const navigationExtras: NavigationExtras = {
      queryParams:{
        idBike: this.bicicletta?.id
      }
    };
      this.router.navigate(['/dettagli_vendita'], navigationExtras);
  }
}
