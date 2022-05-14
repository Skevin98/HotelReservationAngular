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
  x : number = 1;

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  //date = formatDate(new Date(), 'dd-MM-yyyyTH:mm', 'en');

  indispo : boolean = true;

  temp : Reservation = new Reservation();

  Response : any;

  AllResResponse : any;

  activate = true;

  idCat :   String = ""

  idChambre :   String = ""

  Chambres : Chambre[] = [];

  Chambre = new Chambre();

  Reservations : Reservation[] = [];

  Reservation : Reservation = new Reservation();

  observable: Observable<object> = new Observable<Object>();

  sub : Subscription = new Subscription();

  observableRes: Observable<object> = new Observable<Object>();

  subRes : Subscription = new Subscription();

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

      this.observableRes= this.reservationService.GetAll();
      this.subRes = this.observableRes.subscribe(
        data =>
      { this.AllResResponse = data;
        console.log("donnnées");
        console.log(data);
      }
      );
      this.subRes.add(() => this.loadReservation());

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subRes.unsubscribe();
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

  loadReservation() {
    this.reservationService.reservations = [];
    if(this.AllResResponse){
      for (let i of this.AllResResponse) {
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
        this.Reservations.push(r);
        //console.log(cat.libelle);
      }

      console.log(this.Reservations.length);
    }

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

    this.temp.dateEntree = form.value['arrivee'];
    this.temp.dateSortie = form.value['depart'];
    this.temp.chambreID = form.value['chambres'];

    if(this.disponible(this.temp)){
      console.log("dispo")
      this.indispo = true;

      this.reservationService.AddReservation(r)
      .subscribe().add(()=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/reservations']);
        });

      });


    }else{
      console.log("non dispo")
        this.indispo = false;
      }




    console.log("reservation : "+this.Reservation.montant);


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

  disponible(r : Reservation){
    console.log("### "+this.Reservations.length)
    for (let res of this.Reservations) {
      if (r.chambreID == res.chambreID &&
        ((r.dateEntree >= res.dateEntree) && (r.dateEntree < res.dateSortie)
      || (r.dateSortie > res.dateEntree) && (r.dateSortie <= res.dateSortie))) {


        console.log((r.dateEntree >= res.dateEntree) && (r.dateEntree < res.dateSortie));
        console.log((r.dateSortie > res.dateEntree) && (r.dateSortie <= res.dateSortie));

        console.log("date d'entree entree "+r.dateEntree);
        console.log("date d'entrée de comparaison "+res.dateEntree);
        console.log("date de sortie entree "+r.dateSortie);
        console.log("date de sortie de comparaison "+res.dateSortie);
        return false;

      }
    }
    return true;

  }

}
