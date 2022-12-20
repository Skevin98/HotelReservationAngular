import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';
import { PersonneService } from '../Services/personne.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  currentUserId: string = "";
  Response : any;
  currentUser : Personne = new Personne();

  constructor(private personneService: PersonneService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserId = this.authService.currentUserId;
    this.personneService.GetById(this.currentUserId)
      .subscribe(personne => {
        this.Response = personne;
        console.log("Profile response :"+personne);

       })
      .add(()=>this.loadUser());

  }
  loadUser(): void {
    if (this.Response) {
      this.currentUser = this.Response;
      console.log("profile id : "+this.currentUser.email);
    }

  }
}
