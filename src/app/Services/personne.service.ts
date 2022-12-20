import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  baseUrl : string = `api/User`;

  User : Personne = new Personne();

  constructor(private http: HttpClient) {
    // this.User.id = "38d89168-4677-47b2-bf61-cfeb53410671";
   }

  AddUser(user : object): Observable<object> {
    return this.http.post<object>(this.baseUrl,user)
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


  GetById(id : String): Observable<object> {
    return this.http.get<object>(this.baseUrl+`/`+id);
  }

  GetAll():Observable<object>{
    return this.http.get<object>(this.baseUrl);
  }

}
