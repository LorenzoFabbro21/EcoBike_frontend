import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { LoggedUser } from 'src/app/classes/user';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  token?:string;

  constructor( private route: ActivatedRoute, private router: Router,private userLogin: UserLoggedService) {
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });

     try {
      if( this.token !== undefined) {
        const decoded : any = jwtDecode(this.token);
        const userLogged: LoggedUser = {
          name: decoded.name,
          last_name: decoded.surname,
          token: this.token,
          email : decoded.sub,
          exp:decoded.exp
        
          //picture volendo
        }
        this.userLogin.login(userLogged);
        this.router.navigate(['/']);
      }
  
    } catch (error) {
      console.error('Error decoding JWT token:', error);
    } 
  }

}
