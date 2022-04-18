import { Injectable } from '@angular/core';
import {Chambre} from '../Models/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  Chambres = [{
    _idChambre : 0,
    _libelle : "Suite",
    _categorie : "Categorie Suite",
    image : "../../assets/pics/room2.jpg"
  },
  {
    _idChambre : 1,
    _libelle : "Chambre normale",
    _categorie : "Categorie Chambre normale",
    image : "../../assets/pics/room3.jpg"
  },
  {
    _idChambre : 2,
    _libelle : "Chambre double",
    _categorie : "Categorie Chambre normale",
    image : "../../assets/pics/room4.jpg"
  },
  {
    _idChambre : 3,
    _libelle : "Chambre triple",
    _categorie : "Categorie Chambre normale",
    image : "../../assets/pics/room5.jpg"
  }
  ];

  constructor() {  }


}
