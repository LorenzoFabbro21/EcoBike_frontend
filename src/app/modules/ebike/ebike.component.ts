import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Taglia } from 'src/app/enum/tagliaEnum';
import { Bicicletta } from 'src/app/interfaces/bicicletta';

@Component({
  selector: 'app-ebike',
  templateUrl: './ebike.component.html',
  styleUrls: ['./ebike.component.scss']
})
export class EbikeComponent {

  @Input()
    bicicletta?: Bicicletta

  @Input()
    prezzo?: number = 20

  constructor ( private router: Router) {
   this.bicicletta = {
      id: 1,
      modello: 'RX1-Sport',
      marca: 'Olmo',
      colore: 'Rosso e bianco',
      taglia: Taglia.TagliaS,
      tipologia: 'Mountain Bike',
      immagini: 'ebike.jpg'
    };
  }

  clickBike() {
    const navigationExtras: NavigationExtras = {
      queryParams:{
        ebike: JSON.stringify(this.bicicletta),
        prezzo: this.prezzo
      }
    };
    this.router.navigate(['/dettagli_ebike'], navigationExtras);
  }
}
