import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bicicletta } from '../interfaces/bicicletta';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';
import { adRent } from '../interfaces/adRent';
import { adSell } from '../interfaces/adSell';
import { Booking } from '../interfaces/booking';
import { loginRequest } from '../classes/loginRequest';
import { signupRequest } from '../classes/signupRequest';
import { userBikeInfo } from '../interfaces/userBikeInfo';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class EcobikeApiService {
  

  constructor(protected httpClient: HttpClient) { }

  url="http://localhost:8080/api"


  /**
 * Restituisce l'elenco delle biciclette a noleggio
 *
 * Endpoint Rest: bicicletta/noleggio
 */
   public elenco_bici_noleggio (): Observable<Bicicletta[]> {
    return this.httpClient.get<Bicicletta[]>(`${this.url}/adrent/bikes`);
  }


  /**
  * Restituisce l'elenco delle biciclette a noleggio
  *
  * Endpoint Rest: adsell/bikes
  */
  public elenco_bici_vendita (): Observable<Bicicletta[]> {
    return this.httpClient.get<Bicicletta[]>(`${this.url}/adsell/bikes`);
  }

  /**
  * Restituisce l'elenco dei noleggi
  *
  * Endpoint Rest: adrent
  */
  public elenco_noleggi(): Observable<adRent[]> {
    return this.httpClient.get<adRent[]>(`${this.url}/adrent`);
  }

  /**
  * Restituisce l'elenco dei noleggi
  *
  * Endpoint Rest: adsell
  */
  public elenco_vendite(): Observable<adSell[]> {
    return this.httpClient.get<adSell[]>(`${this.url}/adsell`);
  }

/**
 * Restitusice la bicicletta selezionata
 *
 * Endpoint Rest: bike/{bikeNo}
 */
  public get_bicicletta (bikeNo: number): Observable<Bicicletta> {
    return  this.httpClient.get<Bicicletta>(`${this.url}/bike/${bikeNo}`);
  }




  public get_biciclette (): Observable<Bicicletta[]> {
    return  this.httpClient.get<Bicicletta[]>(`${this.url}/bike`);
  }

/**
 * Inserisce una nuova bicicletta
 *
 * Endpoint Rest: bike
 */
  public new_bike(bike: Bicicletta | any, token: string){
   let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
  }); 

  let options = { headers: headers };
    return this.httpClient.post<Bicicletta>(`${this.url}/bike`,bike, options);
  }


/**
 * Inserisce una nuovo noleggio
 *
 * Endpoint Rest: bike
 */
  public new_noleggio(adRent: adRent | any, token: string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }); 
    let options = { headers: headers };
    return this.httpClient.post<adRent>(`${this.url}/adrent`, adRent, options);
  }

  /**
 * Inserisce una nuovo noleggio
 *
 * Endpoint Rest: bike
 */
  public new_vendita(adsell: adSell | any, token: string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }); 
    let options = { headers: headers };
    return this.httpClient.post<adSell>(`${this.url}/adsell`, adsell, options);
  }


  /**
 * Inserisce una nuovo noleggio
 *
 * Endpoint Rest: bike
 */
  public new_booking(booking: Booking, token: string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }); 
    let options = { headers: headers };
    return this.httpClient.post<Booking>(`${this.url}/booking`, booking, options);
  }

  public get_bookings (): Observable<Booking[]> {
    return  this.httpClient.get<Booking[]>(`${this.url}/booking`);
  }

  public login(login: loginRequest){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }); 
    let options = { headers: headers,  };
    return this.httpClient.post<loginRequest>(`http://localhost:8090/auth/login`, login, options);
  }

  public signup(signup: signupRequest){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }); 
    let options = { headers: headers };
    return this.httpClient.post<signupRequest>(`http://localhost:8090/auth/signup`, signup, options);
  }

  /**
  * Restituisce l'elenco delle biciclette filtrate
  *
  * Endpoint Rest: bike/filter
  */
  findFilteredBikes(brand?: string, color?: string, size?: string): Observable<Bicicletta[]> {
    let params = new HttpParams();
    
    // Aggiungi i parametri solo se non sono nulli
    if (brand) {
      params = params.set('brand', brand);
    }
    
    if (color) {
      params = params.set('color', color);
    }
    
    if (size) {
      params = params.set('size', size);
    }

    return this.httpClient.get<Bicicletta[]>(`${this.url}/bike/filter`, { params });
  }
  /*
  getWithToken(endpoint: string): Observable<any> {
    const token = 'il-tuo-token-jwt'; // Qui dovresti ottenere il token JWT dal servizio di autenticazione
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/${endpoint}`, { headers });
  }
  */


  getPrivateUser(email: string) {
    return this.httpClient.get<User>(`${this.url}/private/email/` + email);
  }

  getDealer(email: string) {
    return this.httpClient.get<User>(`${this.url}/dealer/email/` + email);
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

 /**
  * Restituisce l'elenco delle vendite di un utente
  *
  * Endpoint Rest: appointment/user/{id}/bikes
  */
  public list_bikes_sold_by_user(id : number): Observable<userBikeInfo[]> {
    return this.httpClient.get<userBikeInfo[]>(`${this.url}/appointment/user/` + id + "/bikes"); 
  }




}


