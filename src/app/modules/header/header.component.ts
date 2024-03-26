import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {  Router } from '@angular/router';
import { LoggedUser } from 'src/app/classes/user';
import { UserLoggedService } from 'src/app/services/user-logged.service';
import { MenuItem  } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;
  userName?: string;

  ngOnInit() {
    this.userService.login(this.userProva);
    this.userName = this.userProva.name;
    
    this.items = [
        {
            label: this.userName,
            icon: 'pi pi-fw pi-user',
            class: 'menubar',
            items: [
                {
                    label: 'Your bikes',
                    icon: 'pi pi-fw pi-user-plus',
                    items: [
                      {
                          label: 'For sale',
                          icon: 'pi pi-fw pi-filter',
                          routerLink: 'bikes-forsale'
                      },
                      {
                          icon: 'pi pi-fw pi-bars',
                          label: 'For rent',
                          routerLink: 'bikes-forRent'
                      }
                  ]
                },
                {
                  label: 'Bikes sold',
                  icon: 'pi pi-fw pi-users',
                  routerLink: 'bikes-sold'
                },
                {
                  label: 'Bikes rented',
                  icon: 'pi pi-fw pi-users',
                  routerLink: 'bikes-rented'
                }
            ]
        }
    ];
}



  ngOnChanges (changes: SimpleChanges): void {

    if ( changes['sidebar']) {
      if ( changes['sidebar'].currentValue === false && changes['sidebar'].firstChange !== true) {
        const hamburgerBtn = document.querySelector('.hamburger-button');
        hamburgerBtn?.classList.toggle('active');
      }
    }


    
  }

  @Output()
    clickButton = new EventEmitter<boolean>();

  userLogged: LoggedUser | null = null;
  userProva: LoggedUser = {
    name: "Giorgio"
  };
  constructor ( private router: Router, private userService: UserLoggedService ) {
    
    
    this.userLogged = this.userService.bindUpdateUser((updatedUser) => {
      this.userLogged = updatedUser;
    });
  }

  logout (): void {
    this.userService.logout();
    this.router.navigate(['/']);

  }

  toggleMenu ():void {
    const hamburgerBtn = document.querySelector('.hamburger-button');
    hamburgerBtn?.classList.toggle('active');
    this.clickButton.emit(!this.sidebar);
  }

  @Input()
    sidebar?:boolean;

  page = "";

}
