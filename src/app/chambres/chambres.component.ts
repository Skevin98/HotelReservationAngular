import { Chambre } from './../Models/chambre';
import { ChambreService } from './../Services/chambre.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent implements OnInit, OnDestroy   {

  Response : any;

 id :   String = ""

  Chambres : Chambre[] = [];

  observable: Observable<object> = new Observable<Object>();

  sub : Subscription = new Subscription();


  constructor(private chambreService : ChambreService, private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

   }
  ngOnInit(): void {
    console.log("Id : "+this.id);
    this.observable = this.chambreService.GetByCat(this.id);
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




}
