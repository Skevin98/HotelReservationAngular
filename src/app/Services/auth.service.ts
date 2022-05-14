import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;

  users = [
    {
      mail : "test@gmail.com",
      password :"123456"
    }
  ]


  constructor(private router : Router) { }

  singIn(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.isAuth = true;
        this.router.navigate(['/reservations']);
        resolve(true);
    }, 2000);
    })
  }

  signOut(){
    this.isAuth = false;
    this.router.navigate(['/auth']);
  }


}
