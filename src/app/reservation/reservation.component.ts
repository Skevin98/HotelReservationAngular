import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservations:any[]=[];

  constructor(private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.reservations = this.reservationService.reservations
  }

}
