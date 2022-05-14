import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { PersonneService } from '../Services/personne.service';
import { EventEmitterService } from '../Services/event-emitter.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  nomatch : boolean = false;

  constructor(private eventEmitterService : EventEmitterService,private autService : AuthService, private personneService : PersonneService) { }
  ngOnDestroy(): void {
    console.log("init")
  }

  ngOnInit(): void {
    console.log("init")
    this.reloadNav();
  }

  onSubmit(form : NgForm){
    console.log("form : "+form);
    console.log(form.value['mailc']);
    console.log(form.value['passc']);

    const r ={
      mail : form.value['mailc'],
      password : form.value['passc']
    }

    const exist = this.autService.users.find((data)=>{
      if(data.mail == r.mail && data.password == r.password){
        return data;
      }
      return null;
    })

    if(exist==null){
      console.log("0");
      this.nomatch = true;
    }
    else{
      this.nomatch = false;
      console.log("1");
      this.autService.singIn();
    }

  }

  reloadNav(){
    this.eventEmitterService.onFirstComponentClick();
  }

}
