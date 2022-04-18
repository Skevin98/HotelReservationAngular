import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  reservations : any []=[{
    _idReservation : 0,
    _chambre :"2 chambres",
    _dateReservation :"04/11/2021",
    _dateEntree:"04/11/2021",
    _dateSortie:"04/12/2021"
  },
  {
    _idReservation : 1,
    _chambre :"5 chambres",
    _dateReservation :"10/12/2022",
    _dateEntree:"20/12/2022",
    _dateSortie:"25/12/2022"
  },
  {
    _idReservation : 2,
    _chambre :"4 chambres",
    _dateReservation :"18/07/2022",
    _dateEntree:"11/09/2022",
    _dateSortie:"08/10/2022"
  },
  {
    _idReservation : 3,
    _chambre :"9 chambres",
    _dateReservation :"31/12/2022",
    _dateEntree:"03/01/2023",
    _dateSortie:"19/01/2023"
  }]

  constructor() { }
}
