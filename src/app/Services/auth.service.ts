import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PersonneService } from './personne.service';
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;
  Response : any;

  users : Personne[] = [
    // {
    //   mail : "test@gmail.com",
    //   password :"123456"
    // }
  ]

  currentUserId : string = "";
  currentUser : Personne = new Personne();


  constructor(private router : Router, private personneService : PersonneService) {
    personneService.GetAll()
    .subscribe(data=>{this.Response = data})
    .add(() => this.loadUsers());

   }


  signIn(){

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

  loadUsers(): void {
    this.users = [];
  if (this.Response) {
    for (let i of this.Response) {
      // let p : Personne = new Personne();
      // p.id = i["id"];
      // p.email = i["email"];
      // p.password = i["password"];
      this.users.push(i);
    }
    console.log("auth Service : "+this.users.length)

  }

  }


}
