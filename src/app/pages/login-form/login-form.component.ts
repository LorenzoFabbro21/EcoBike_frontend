import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { loginRequest } from 'src/app/classes/loginRequest';
import { LoggedUser } from 'src/app/classes/user';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
    
@Component({
  selector: 'app-root',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

     
  url?:String;
  mail: String = "";
  password: String = "";
  constructor (private ebService: EcobikeApiService, private userLogin: UserLoggedService,  private router: Router) {

  }
  
  ngOnInit(): void {
 }
    
  googleLogin() {
    window.location.href = 'http://localhost:8090/oauth2/authorization/google';
  }

  signupHref() {
    window.location.href = 'http://localhost:4200/signup';
  }

  login() {
    const login : loginRequest =  {
      email: this.mail,
      password: this.password
    }
    this.ebService.login(login).subscribe({
      next: (response:any) => { 
        const token = response.token; // Supponendo che il token sia contenuto all'interno dell'oggetto di risposta con la chiave 'token'
        const decoded : any = jwtDecode(token);
        const userLogged: LoggedUser = {
          id: decoded.id,
          name: decoded.name,
          last_name: decoded.last_name,
          token: token,
          email : decoded.sub,
          exp:decoded.exp
        
          //picture volendo
        }
        this.userLogin.login(userLogged);
        this.router.navigate(['/']);

      }
    });
  }
}