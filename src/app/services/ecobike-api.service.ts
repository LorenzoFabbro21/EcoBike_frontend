import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bicicletta } from '../interfaces/bicicletta';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcobikeApiService {

  constructor(protected httpClient: HttpClient) { }

  url="http://localhost:53450/EcoBike"


  /**
 * Restituisce l'elenco delle biciclette a noleggio
 *
 * Endpoint Rest: bicicletta/noleggio
 */
   public elenco_bici_noleggio (): Observable<Bicicletta[]> {
    return this.httpClient.get<Bicicletta[]>(`${this.url}/bicicletta/noleggio`, {
       headers: new HttpHeaders({
         'Access-Control-Allow-Origin': '*'
       })
     }).pipe(retry(0), catchError(this.handleError)
       );
  }


    /**
 * Restituisce l'elenco delle biciclette a noleggio
 *
 * Endpoint Rest: bicicletta/vendita
 */
    public elenco_bici_vendita (): Observable<Bicicletta[]> {
      return this.httpClient.get<Bicicletta[]>(`${this.url}/bicicletta/vendita`, {
         headers: new HttpHeaders({
           'Access-Control-Allow-Origin': '*'
         })
       }).pipe(retry(0), catchError(this.handleError)
         );
    }

/**
 * Restitusice la bicicletta selezionata
 *
 * Endpoint Rest: bicicletta/{bikeNo}
 */
  public get_bicicletta (bikeNo: number): Observable<Bicicletta> {
    return  this.httpClient.get<Bicicletta>(`${this.url}/bicicletta/${bikeNo}`, {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        })
      }).pipe(retry(0), catchError(this.handleError)
      );
  }


 

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}



