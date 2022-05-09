import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Chambre} from '../Models/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  baseUrl : string = `api/Chambre/byCategorie/`;

  constructor(private http: HttpClient) {  }

  GetByCat(idCat : String): Observable<object> {
    return this.http.get<object>(this.baseUrl+idCat);
  }

}
