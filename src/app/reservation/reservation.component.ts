import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';
import { PersonneService } from '../Services/personne.service';
import { Reservation } from '../Models/reservation';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../Services/auth.service';
import { EventEmitterService } from '../Services/event-emitter.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  modalRef: MdbModalRef<ModalComponent> | null = null;

  reservations: Reservation[] = [];
  Response: any;
  observable: Observable<object> = new Observable<Object>();

  sub : Subscription = new Subscription();

  isAuth : boolean = false;


  constructor(private eventEmitterService: EventEmitterService,private authService : AuthService, private reservationService : ReservationService, private modalService : MdbModalService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
    this.reloadNav();
    this.reservations = [];
    this.observable = this.reservationService.GetByUser(this.authService.currentUserId);
    this.sub = this.observable.subscribe(
      data =>
      { this.Response = data;
        console.log("donnnées");
        console.log(data);
      });
      this.sub.add(() => this.loadReservation());
  }
  loadReservation() {
    this.reservationService.reservations = [];
    if(this.Response){
      for (let i of this.Response) {
        let r : Reservation = new Reservation();
        r.id = i["id"];
        r.personneID = i["userID"];
        r.personne = i["user"];
        r.chambreID = i["chambreId"];
        r.chambre = i["chambre"];
        r.dateReservation = i["dateReservation"];
        r.dateEntree = i["dateEntree"];
        r.dateSortie = i["dateSortie"];
        r.isActive= i["isActive"];
        r.montant = i["montant"];
        r.nb_Adults = i["nb_Adults"];
        r.nb_Enfants = i["nb_Enfants"];
        this.reservations.push(r);
        this.reservationService.reservations.push(r);
        //console.log(cat.libelle);
      }

      console.log(this.reservations.length);
    }

  }

  openModal(index : number ,id : String) {
    console.log("id de la reservation choisie "+id);
    this.modalRef = this.modalService.open(ModalComponent,{
      data: { index: index, id : id },
    });

  }

  reloadNav(){
    this.eventEmitterService.onFirstComponentClick();
  }




}
