import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';
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
  ReservationsSubject = new Subject<Reservation[]>();



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

  GetAll(): Observable<object> {
    return this.http.get<object>(this.baseUrl);
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

  updateReservation(id : String,reservation : object): Observable<object> {
    return this.http.post<object>(this.baseUrl+`/`+id,reservation)
    .pipe(
      catchError(this.handleError)
    );
  }

  emitReservation(){
    this.ReservationsSubject.next(this.reservations.slice());
  }

}

