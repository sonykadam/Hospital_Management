import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string, password:string){

    if(username=="Sneha"&&password=="Sneha2000"){

      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User is login")
    let user= sessionStorage.getItem('username');

    return !(user==null)
  }

  logout(){

    console.log("user is logout")
    sessionStorage.removeItem('username');
  }
}
