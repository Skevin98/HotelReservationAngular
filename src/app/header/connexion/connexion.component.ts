import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdbDropdownDirective } from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent{

 //@ViewChild('dropdown') dropdown!: MdbDropdownDirective ;

  constructor() {}

  /* ngAfterViewInit(): void {
    console.log("log :"+this.dropdown);
    setTimeout(() => {
      this.dropdown.show();
    }, 3000);
  }
 */
  onSubmit(form : NgForm){

    console.log("form :"+form);
    console.log("mail :"+form.value['emailr']);
    console.log("pass :"+form.value['passwordr']);
    const r = {

      mail : form.value['emailr'],
      password : form.value['passwordr']
    }

  }

}
