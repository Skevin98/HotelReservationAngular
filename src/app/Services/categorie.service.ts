import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../Models/categorie';



@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl : string = `api/Category`;

  Images = ["../../assets/pics/room2.jpg",
 "../../assets/pics/room3.jpg",
"../../assets/pics/room4.jpg",
"../../assets/pics/room5.jpg"
  ];


  Categories : Categorie[] = [];

  constructor(private http: HttpClient) {

  }




  GetAll(): Observable<object> {
    return this.http.get<object>(this.baseUrl);
  }

  GetById(id : String): Observable<object> {
    return this.http.get<object>(this.baseUrl+`/`+id);
  }




}
