import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbikeAdComponent } from './ebike-ad.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [EbikeAdComponent],
  imports: [CommonModule, ButtonModule,CardModule,AppRoutingModule, InputTextModule, AutoCompleteModule, BrowserAnimationsModule, FileUploadModule, HttpClientModule, FormsModule, AccordionModule],
  exports: [EbikeAdComponent]
})
export class EbikeAdModule { }
