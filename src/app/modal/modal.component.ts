import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Component, OnDestroy } from '@angular/core';
import { ReservationService } from '../Services/reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy  {

  id : String = "";
  index : number = 0;
  sub : Subscription = new Subscription();

  constructor(private router : Router,private reservationService : ReservationService,public modalRef : MdbModalRef<ModalComponent>) { }
 
 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  delete(){
    console.log("Suppression");
    this.sub = this.reservationService.deleteReservation(this.id).subscribe();
    this.sub.add(() =>{
      
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/reservations']);});
      this.modalRef.close();
    });

  }

}
