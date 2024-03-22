import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { NoleggioModule } from './pages/noleggio/noleggio.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { VenditaModule } from './pages/vendita/vendita.module';
import { FormNoleggioModule } from './pages/form-noleggio/form-noleggio.module';
import { FormVenditaModule } from './pages/form-vendita/form-vendita.module'; 
import { BiciclettaVenditaModule } from './pages/bicicletta-vendita/bicicletta-vendita.module';
import { BiciclettaNoleggioModule } from './pages/bicicletta-noleggio/bicicletta-noleggio.module';
import { LoginFormModule } from './pages/login-form/login-form.module';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { SignupModule } from './pages/signup/signup.module';
import { ErrorDialogModule } from './modules/error-dialog/error-dialog.module';
import { BikesSoldModule } from './pages/bikes-sold/bikes-sold.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    NoleggioModule,
    HomePageModule,
    VenditaModule,
    FormNoleggioModule,
    FormVenditaModule,
    BiciclettaVenditaModule,
    BiciclettaNoleggioModule,
    LoginFormModule,
    AuthenticationModule,
    SignupModule,
    ErrorDialogModule,
    BikesSoldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
