import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Taglia } from 'src/app/enum/tagliaEnum';
import { Bicicletta } from 'src/app/interfaces/bicicletta';

@Component({
  selector: 'app-bicicletta-dettagli',
  templateUrl: './bicicletta-dettagli.component.html',
  styleUrls: ['./bicicletta-dettagli.component.scss']
})
export class BiciclettaDettagliComponent {

  bicicletta?: Bicicletta;
  prezzo?: number;
  prezzo_noTax?: number;
  bikesSimili: Bicicletta[]= [];
  images: string[]= [];
  constructor ( private route: ActivatedRoute) {

    this.images = ['ebike.jpg','ebike-2.jpg','ebike.jpg','ebike.jpg','ebike.jpg']; 
    this.bikesSimili= [
      {
      id: 1,
      modello: 'RX1-Sport',
      marca: 'Olmo',
      colore: 'Rosso e bianco',
      taglia: Taglia.TagliaS,
      tipologia: 'Mountain Bike',
      immagini: 'ebike.jpg'
      },
      {
        id: 2,
        modello: 'CV5-Sport',
        marca: 'Thor',
        colore: 'Rosso e nero',
        taglia: Taglia.TagliaM,
        tipologia: 'Mountain Bike',
        immagini: 'ebike.jpg'
        },
        {
          id: 3,
          modello: 'BN8-Trial',
          marca: 'Prova',
          colore: 'Rosso e bianco',
          taglia: Taglia.TagliaS,
          tipologia: 'Trial',
          immagini: 'ebike.jpg'
          },
          {
            id: 4,
            modello: 'TopModel',
            marca: 'Brabus',
            colore: 'Verde',
            taglia: Taglia.TagliaL,
            tipologia: 'Mountain Bike',
            immagini: 'ebike.jpg'
            }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bicicletta = JSON.parse(params['ebike']);
      this.prezzo = params["prezzo"];
    });

    if ( this.prezzo) {
      const tax = (this.prezzo / 100) * 22;
      this.prezzo_noTax = this.prezzo - tax;
    }
  }

  prenota() {
    return;
  }

  imageActualChange(image: string) {
    if (this.bicicletta) {
      this.bicicletta.immagini = image;
    }
    
    

  }
}
