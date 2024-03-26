export class LoggedUser implements User {

    constructor () {
      return;
    }
    id?: number;
    name?: string;
    last_name?: string;
    token?: string;
    email?:string;
    exp?:number
  }
  
  export interface User {
    id?: number;
    name?: string;
    last_name?: string;
    email?: string;
  }
  