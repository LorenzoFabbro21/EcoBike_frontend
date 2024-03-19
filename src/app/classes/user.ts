export class LoggedUser implements User {

    constructor () {
      return;
    }

    name?: string;
    last_name?: string;
    token?: string;
    email?:string;
    exp?:number
  }
  
  export interface User {

     name?: string;
     last_name?: string;
     email?: string;
  }
  