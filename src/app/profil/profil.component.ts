import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Personne } from '../Models/personne';
import { PersonneService } from '../Services/personne.service';
import { AuthService } from '../Services/auth.service';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, OnChanges {

  currentUserId: string = "";
  Response : any;
  currentUser : Personne = new Personne();
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private personneService: PersonneService, private authService: AuthService, private modalService : MdbModalService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentUserId = this.authService.currentUserId;
    this.personneService.GetById(this.currentUserId)
      .subscribe(personne => {
        this.Response = personne;
        console.log("Profile response :"+personne);

       })
      .add(()=>this.loadUser());
  }

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
      this.authService.currentUser = this.Response;
      console.log("profile id : "+this.currentUser.email);
    }

  }


  openModal() {
    const id : string = this.authService.currentUser.id;
    console.log("id de l'user' "+id);
    this.modalRef = this.modalService.open(DeleteUserModalComponent,{
      data: {id : id },
    });

  }
}
