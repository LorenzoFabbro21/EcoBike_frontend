import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { signupRequest } from 'src/app/classes/signupRequest';
import { LoggedUser } from 'src/app/classes/user';
import { EcobikeApiService } from 'src/app/services/ecobike-api.service';
import { UserLoggedService } from 'src/app/services/user-logged.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  last_name: string="";
  first_name: string="";
  mail: string="";
  phone_number: string="";
  password: string = "";

  constructor(private ebService: EcobikeApiService, private userLogin: UserLoggedService,  private router: Router) {

  }
  signup() {
    const signup : signupRequest =  {
      name: this.first_name,
      last_name: this.last_name,
      email: this.mail,
      phone_number: this.phone_number,
      password: this.password
    }
    this.ebService.signup(signup).subscribe({
      next: (response:any) => { 
       
        this.router.navigate(['/login']);

      }
    });
    
  }

}
