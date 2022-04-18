import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Models/reservation';
import { Chambre } from '../Models/chambre';

@Component({
  selector: 'app-single-reservation',
  templateUrl: './single-reservation.component.html',
  styleUrls: ['./single-reservation.component.scss']
})
export class SingleReservationComponent implements OnInit {

  reservation : Reservation = new Reservation();

  constructor() { }

  ngOnInit(): void {
    this.reservation.idReservation="1";
    this.reservation.chambres =new Chambre();
    this.reservation.dateReservation =new Date(2022,5,20);
    this.reservation.dateEntree=new Date(2022,7,15);
    this.reservation.dateSortie=new Date("30-09-2022");
  }

}
