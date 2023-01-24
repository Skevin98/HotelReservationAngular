import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChambreService } from '../Services/chambre.service';
import { CategorieService } from '../Services/categorie.service';
import { Categorie } from '../Models/categorie';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy{


  Images : String[]=[];

  Response : any;

  Categories : Categorie[] = [];

 

  observable: Observable<object> = new Observable<Object>();

  sub : Subscription = new Subscription();


  constructor(private categorieService: CategorieService) {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }


  ngOnInit(): void {
    this.Images = this.categorieService.Images;
    this.observable = this.categorieService.GetAll();
    this.sub = this.observable.subscribe(
      data =>
      { this.Response = data;
        //console.log(data);
      });
      this.sub.add(() => this.loadCategories());
  }


  loadCategories(){
    this.categorieService.Categories = [];
    if(this.Response){
      for (let i of this.Response) {
        let cat : Categorie = new Categorie();
        cat.id = i["id"];
        cat.libelle = i["libelle"];
        cat.description = i["description"];
        cat.tarif = i["tarif"];
        this.Categories.push(cat);
        this.categorieService.Categories.push(cat);
        //console.log(cat.libelle);
      }
      console.log(this.Categories.length);
    }

  }



}
