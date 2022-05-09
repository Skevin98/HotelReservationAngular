import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Chambre } from '../Models/chambre';
import { ChambreService } from '../Services/chambre.service';
import { ReservationService } from '../Services/reservation.service';
import { Reservation } from '../Models/reservation';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Categorie } from '../Models/categorie';
import { CategorieService } from '../Services/categorie.service';
import { PersonneService } from '../Services/personne.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit, OnDestroy {


  duration : any;

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  //date = formatDate(new Date(), 'dd-MM-yyyyTH:mm', 'en');


  Response : any;

  activate = true;

  idCat :   String = ""

  idChambre :   String = ""

  Chambres : Chambre[] = [];

  Chambre = new Chambre();




  Reservation : Reservation = new Reservation();

  observable: Observable<object> = new Observable<Object>();

  sub : Subscription = new Subscription();

  constructor(private personneService : PersonneService, 
    private categorieService : CategorieService ,
    private chambreService : ChambreService,
    private reservationService : ReservationService, 
    private route : ActivatedRoute,
    private router : Router) {
    this.idCat = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.Reservation.personneID = this.personneService.User.id;
    this.observable = this.chambreService.GetByCat(this.idCat);
    this.sub = this.observable.subscribe(
      data =>
      { this.Response = data;
        console.log("donnnées");
        console.log(data);
      });
      this.sub.add(() => this.loadChambres());


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  loadChambres(){
    for (let i of this.Response) {
      let ch : Chambre = new Chambre();
      ch.id = i["id"];
      ch.categorieID = i["categorieID"];
      ch.categorie = i["categorie"]
      console.log("Tarif de la cat lc : "+ch.categorie.tarif);
      ch.numero = i["numero"];
      ch.numBatiment = i["numBatiment"];
      ch.numEtage = i["numEtage"];
      ch.nbLits = i["nbLits"];
      ch.isAvailable = i["isAvailable"]
      ch.hasBalcon = i["hasBalcon"];
      ch.hasCuisine = i["hasCuisine"];
      ch.hasSalle_sejour = i["hasSalle_sejour"];
      ch.hasVue_sur_mer = i["hasVue_sur_mer"];


      this.Chambres.push(ch);
      console.log("Id de la chambre "+ch.id);
    }
    console.log(this.Chambres.length);
  }


  onSubmit(form : NgForm) {
    const r = {

      userID :this.Reservation.personneID,
      chambreId : form.value['chambres'],
      dateReservation : formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en'),
      dateEntree:form.value['arrivee'],
      dateSortie : form.value['depart'],
      isactive : true,
      montant :this.Reservation.montant,
      nb_Adults : form.value['nbadult'],
      nb_Enfants: form.value['nbenfant']
    }

    this.reservationService.AddReservation(r)
    .subscribe();

    this.router.navigate(['/reservations']);

    console.log("reservation : "+form.value['nbenfant']);
    console.log("reservation : "+form.value['nbadult']);
    console.log("reservation : "+form.value['arrivee']);
    console.log("reservation : "+form.value['depart']);
    console.log("reservation : "+this.Reservation.montant);
    console.log("reservation : "+this.Reservation.personneID);
    console.log("reservation : "+form.value['chambres']);

  }

  options(){

    this.activate = false;
    this.Chambre = this.Chambres
    .find(
      (x)=>{return x.id == this.idChambre})!;
    this.montant();

  }


  nbduration(){
    const temp = +new Date(this.Reservation.dateSortie).valueOf() - +new Date(this.Reservation.dateEntree).valueOf();
    this.duration = Math.floor(temp / (3600000*24));
    console.log("Durée :"+this.duration);
  }

  montant(){
    //console.log("Tarif de la cat : "+this.Chambre.categorie.tarif)
    this.nbduration();
    this.Reservation.montant = this.Chambre.categorie.tarif*this.duration + ReservationService.ChildPrice*this.Reservation.nb_Enfants + ReservationService.AdultPrice*this.Reservation.nb_Adults;
  }

}
