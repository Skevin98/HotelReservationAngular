import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../Models/reservation';
import { ReservationService } from '../Services/reservation.service';


@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss']
})
export class DetailReservationComponent implements OnInit {

  r: Reservation = new Reservation;
  id : String = "";
  temp : any;
  retrievedObject : string = "";

  constructor(private reservationService : ReservationService, private route : ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    
   }

  ngOnInit(): void {


    this.r = this.reservationService.reservations
    .find(
      (x)=>{return x.id == this.id})!;
    
    
    


  }

}
