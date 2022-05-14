import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {

  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor() { }



  onSubmit(form : NgForm){

  }

}
