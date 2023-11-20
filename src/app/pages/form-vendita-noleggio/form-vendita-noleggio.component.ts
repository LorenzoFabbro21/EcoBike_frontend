import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoggedUser } from 'src/app/classes/user';
import { Taglia } from 'src/app/enum/tagliaEnum';
import { UserLoggedService } from 'src/app/services/user-logged.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event| any;
  query: any;
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}


@Component({
  selector: 'app-form-vendita-noleggio',
  templateUrl: './form-vendita-noleggio.component.html',
  styleUrls: ['./form-vendita-noleggio.component.scss']
})
export class FormVenditaNoleggioComponent {
  uploadedFiles: any[] = [];
  userLogged?: LoggedUser;
  tagliaValue?: any;
  tagliaFiltered: any[] = [];
  tagliaList: any[]= [];
  colore?:string;
  marca?:string;
  modello?:string;
  tipologia?:string;
  prezzo?:number;
  misure?:string;

  constructor ( private userService: UserLoggedService) {
    if ( userService.userLogged ) {
      this.userLogged = userService.userLogged;
    }
    this.tagliaList = [
      { name: 'S', code: Taglia.TagliaS },
      { name: 'M', code: Taglia.TagliaM },
      { name: 'L', code: Taglia.TagliaL }
    ];
  }

  filterTaglia(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.tagliaList as any[]).length; i++) {
        let taglia = (this.tagliaList as any[])[i];
        if (taglia.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(taglia);
        }
    }
    this.tagliaFiltered = filtered;
  }

  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
}
}
