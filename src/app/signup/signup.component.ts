import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, NgForm, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PersonneService } from '../Services/personne.service';
import { Router } from '@angular/router';
import { Personne } from '../Models/personne';
import { AuthService } from '../Services/auth.service';
import { EventEmitterService } from '../Services/event-emitter.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,  OnChanges {

  mdpConfirm: String = "";

  isUpdate: boolean = false;

  validationForm: FormGroup;

  currentUser = new Personne();



  constructor(private personneService: PersonneService, private router: Router,
    private authService: AuthService) {

    this.validationForm = new FormGroup({
      id: new FormControl(),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(),
      username: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.min(18)),
      email: new FormControl('', Validators.email),
      adresse: new FormControl(),
      telephone: new FormControl(),
      sexe: new FormControl(null),
      password: new FormControl(null, Validators.pattern("^" +
        "(?=.*[0-9])" +
        "(?=.*[a-zA-Z])" +
        "(?=\\S+$)" +
        ".{8,}" +
        "$")),
      passConfirm: new FormControl(),
      security: new FormControl(null, Validators.requiredTrue)
    }, this.checkPasswords());



  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.authService.currentUser.id != "") {
      this.isUpdate = true;
      this.currentUser = this.authService.currentUser;
      this.id = this.currentUser.id;
      this.nom = this.currentUser.nom;
      this.validationForm.controls['prenom'].setValue(this.currentUser.prenom);
      this.username = this.currentUser.username;
      this.age = this.currentUser.age;
      this.email = this.currentUser.email;
      this.sexe = this.currentUser.sexe;
      this.password = this.currentUser.password;
      this.passConfirm = this.currentUser.password;
      this.validationForm.controls['adresse'].setValue(this.currentUser.adresse);
      this.validationForm.controls['telephone'].setValue(this.currentUser.telephone);
    }

  }

  ngOnInit(): void {

    if (this.authService.currentUser.id != "") {
      this.isUpdate = true;
      this.currentUser = this.authService.currentUser;
      this.id = this.currentUser.id;
      this.nom = this.currentUser.nom;
      this.validationForm.controls['prenom'].setValue(this.currentUser.prenom);
      this.username = this.currentUser.username;
      this.age = this.currentUser.age;
      this.email = this.currentUser.email;
      this.sexe = this.currentUser.sexe;
      this.password = this.currentUser.password;
      this.passConfirm = this.currentUser.password;
      this.validationForm.controls['adresse'].setValue(this.currentUser.adresse);
      this.validationForm.controls['telephone'].setValue(this.currentUser.telephone);
      this.validationForm.controls['security'].setValue(true);
    }
  }


  get id(): any {
    // return this.validationForm.get('nom');
    return this.validationForm.controls['id'].value;
  }

  set id(n: string) {
    this.validationForm.get('id')?.setValue(n);
  }

  get nom(): any {
    // return this.validationForm.get('nom');
    return this.validationForm.controls['nom'].value;
  }

  set nom(n: string) {
    this.validationForm.get('nom')?.setValue(n);
  }

  get username(): any {
    return this.validationForm.controls['username'].value;
  }

  set username(n: string) {
    this.validationForm.get('username')?.setValue(n);
  }

  get age(): any {
    return this.validationForm.controls['age'].value;
  }

  set age(n: number) {
    this.validationForm.get('age')?.setValue(n);
  }

  get email(): any {
    return this.validationForm.controls['email'].value;
  }

  set email(n: string) {
    this.validationForm.get('email')?.setValue(n);
  }

  get password(): any {
    return this.validationForm.controls['password'].value;
  }

  set password(n: string) {
    this.validationForm.get('password')?.setValue(n);
  }

  get passConfirm(): any {
    return this.validationForm.controls['passConfirm'].value;
  }

  set passConfirm(n: string) {
    this.validationForm.get('passConfirm')?.setValue(n);
  }



  get sexe(): any {
    return this.validationForm.controls['sexe'].value;
  }

  set sexe(n: string) {
    this.validationForm.get('sexe')?.setValue(n);
  }

  get security(): any {
    return this.validationForm.controls['security'].value;
  }


  onSubmit() {
    this.validationForm.markAllAsTouched();


    console.log(this.validationForm)

    if (this.validationForm.valid) {
      const u = this.validationForm.value;
      u.privilege = "User";
      delete u.security;
      //console.log(u);

      if (this.isUpdate && u.id !== null) {
        this.personneService.Update(u.id, u)
          .subscribe().add(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/profil']);
            })
          });

      }
      else {
        this.personneService.AddUser(u)
          .subscribe().add(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/profil']);
            })
          });

      }

    }






  }





  checkPasswords(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      let pass = group.get('password')?.value;
      let confirmPass = group.get('passConfirm')?.value
      //console.log("password : " +pass+" confirm : "+confirmPass );

      return pass === confirmPass ? null : { notSame: true }
    }
  }


}
