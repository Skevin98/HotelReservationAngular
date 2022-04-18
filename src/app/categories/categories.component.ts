import { Component } from '@angular/core';
import { ChambreService } from '../Services/chambre.service';
import { CategorieService } from '../Services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  {


  constructor(private categorieservice : CategorieService) { }



}
