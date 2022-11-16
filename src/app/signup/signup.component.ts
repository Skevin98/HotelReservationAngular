import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, NgForm, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PersonneService } from '../Services/personne.service';
import { Router } from '@angular/router';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {

  mdpConfirm : String = "";


  validationForm : FormGroup;



  constructor(private personneService : PersonneService, private router : Router ) {
    this.validationForm = new FormGroup({
      nom : new FormControl(null, Validators.required),
      prenom : new FormControl(),
      username : new FormControl(null, Validators.required),
      age : new FormControl(null, Validators.min(18)),
      email : new FormControl('', Validators.email),
      adresse : new FormControl(),
      telephone : new FormControl(),
      sexe : new FormControl(),
      password : new FormControl(null, Validators.pattern("^" +
      "(?=.*[0-9])" +
      "(?=.*[a-zA-Z])" +
      "(?=\\S+$)" +
      ".{8,}" +
      "$")),
      passConfirm : new FormControl(),
      security : new FormControl(null, Validators.requiredTrue)
    }, this.checkPasswords());

   }

   get nom(): AbstractControl | null{
    return this.validationForm.get('nom');
   }

   get username(): AbstractControl | null{
    return this.validationForm.get('username');
   }

   get age(): AbstractControl | null{
    return this.validationForm.get('age');
   }

   get email(): AbstractControl | null{
    return this.validationForm.get('email');
   }

   get password(): AbstractControl | null{
    return this.validationForm.get('password');
   }

   get passConfirm(): AbstractControl | null{
    return this.validationForm.get('passConfirm');
   }

   get sexe(): AbstractControl | null{
    return this.validationForm.get('sexe');
   }

   get security(): AbstractControl | null{
    return this.validationForm.get('security');
   }


  onSubmit(){



    this.validationForm.markAllAsTouched();


    console.log(this.validationForm)

    if (this.validationForm.valid) {
      const u = this.validationForm.value;
      u.privilege = "User";
      delete u.security;
      //console.log(u);
      

        this.personneService.AddUser(u)
            .subscribe().add(()=>{
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/profil']);
            })
          });
    } 
    
    




  }





  checkPasswords() : ValidatorFn { 
    return (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passConfirm')?.value
    //console.log("password : " +pass+" confirm : "+confirmPass );
    
    return pass === confirmPass ? null : { notSame: true }
  }
}


}
