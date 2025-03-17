import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor(){ }

  authenticate(username2:string,password2:string){

    if(username2=='Shweta'&&password2=='Shweta18'){

      sessionStorage.setItem('username2',username2);
      return true
    }
    else
    {
      return false
    }
  }

  isUserLoggedIn(){
    console.log("User is login")
    let user= sessionStorage.getItem('username2');

    return !(user==null)
  }

  logout(){

    console.log("user is logout")
    sessionStorage.removeItem('username2');
  }


  
      
}
