import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Reservation } from '../Models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl : string = `api/Reservation`;

  static ChildPrice : number = 500;
  static AdultPrice : number = 750;
  SelectedReservation : String = "";


  reservations : Reservation[]=[];


 /*  reservations : any []=[{
    _idReservation : 0,
    _chambre :"2 chambres",
    _dateReservation :"04/11/2021",
    _dateEntree:"04/11/2021",
    _dateSortie:"04/12/2021",
    _montant: 10000
  },
  {
    _idReservation : 1,
    _chambre :"5 chambres",
    _dateReservation :"10/12/2022",
    _dateEntree:"20/12/2022",
    _dateSortie:"25/12/2022",
    _montant: 200
  },
  {
    _idReservation : 2,
    _chambre :"4 chambres",
    _dateReservation :"18/07/2022",
    _dateEntree:"11/09/2022",
    _dateSortie:"08/10/2022",
    _montant: 3000
  },
  {
    _idReservation : 3,
    _chambre :"9 chambres",
    _dateReservation :"31/12/2022",
    _dateEntree:"03/01/2023",
    _dateSortie:"19/01/2023",
    _montant: 2500
  }] */

  constructor(private http: HttpClient) { }

  AddReservation(reservation : object): Observable<object> {
    return this.http.post<object>(this.baseUrl,reservation)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  GetByUser(id : String): Observable<object> {
    return this.http.get<object>(this.baseUrl+`/byUser/`+id);
  }

  GetById(id : String): Observable<object> {
    return this.http.get<object>(this.baseUrl+`/`+id);
  }

  deleteReservation(id : String): Observable<object> {
    return this.http.delete<object>(this.baseUrl+`/`+id)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateReservation(reservation : object): Observable<object> {
    return this.http.post<object>(this.baseUrl,reservation)
    .pipe(
      catchError(this.handleError)
    );
  }

}

