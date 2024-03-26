import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Review } from 'src/app/interfaces/review';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { ReviewUser } from 'src/app/interfaces/reviewUser';
import { SelectItem } from 'primeng/api';
import { reviewProva } from 'src/app/interfaces/reviewProva';

@Component({
  selector: 'app-reviews-component',
  templateUrl: './reviews-component.component.html',
  styleUrls: ['./reviews-component.component.scss']
})
export class ReviewsComponentComponent implements OnInit{
  
  userInfo?: User;
  reviews: Review[] = [];
  idShop?: any;
  reviewUser: ReviewUser[] = [];
  showData: boolean = false;
  products : reviewProva[]= [];


  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor (private ebService: EcobikeApiService) {

    this.idShop = new URLSearchParams(window.location.search);
    //input: id della bici di cui prendere le recensioni
    //prende le recensioni e poi in base all'id della recensione crea un nuovo oggetto con la recensione e nome e cognome di chi l'ha fatta 
    this.ebService.getReviewsByShop(this.idShop).subscribe({
      next: (response: Review[]) => {
        if(response != null) {
          this.reviews = response;
          let index = 0;
          this.reviews.forEach(r => {
            this.ebService.getPrivateById(r.idUser).subscribe({
              next: (response: User) => {
                if(response != null) {
                  this.userInfo = response;
                  const obj: ReviewUser = {
                    review: r,
                    user: response
                  };

                  console.log(obj);
                  this.reviewUser.push(obj);
                  const obj2: reviewProva = {
                    id: obj.review?.id,
                    text:obj.review?.text,
                    score: obj.review?.score,
                    nome: obj.user?.nome,
                    cognome: obj.user?.cognome
                  };
                  this.products.push(obj2);
                }
              }
            });
          });
          
        }
      }
    }); 
  
  }  

 



  ngOnInit() {

    this.sortOptions = [
      { label: 'Price High to Low', value: '!score' },
      { label: 'Price Low to High', value: 'score' }
  ];

    

}



  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}


  


          
          
          
          
          
          /*this.reviews.forEach(r => {
            this.ebService.getPrivateById(r.idUser).subscribe({
              next: (response: User) => {
                if(response != null) {
                  this.userInfo = response;
                  const obj: ReviewUser = {
                    review: r,
                    user: response
                  };
                  console.log(obj);
                  this.reviewUser.push(obj);
                }
              }
            });
          });
        }
      }
    }); */


