import { Component } from '@angular/core';
import { Taglia } from 'src/app/enum/tagliaEnum';
import { Bicicletta } from 'src/app/interfaces/bicicletta';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  bikesNoleggio: Bicicletta[] = [];
  bikesVendita: Bicicletta[] = [];

  constructor () {
    this.bikesNoleggio= [
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

    this.bikesVendita= [
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
            },
            {
              id: 5,
              modello: 'Prova5',
              marca: 'Ciao',
              colore: 'Verde',
              taglia: Taglia.TagliaL,
              tipologia: 'Mountain Bike',
              immagini: 'ebike.jpg'
              }
        ];
  
  }
}
