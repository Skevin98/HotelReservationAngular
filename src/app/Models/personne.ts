export class Personne {


  constructor() {

	}


    private _id: string = "";
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }



  private _idFirebaseUser : string="";
  public get idFirebaseUser() : string {
    return this._idFirebaseUser;
  }
  public set idFirebaseUser(v : string) {
    this._idFirebaseUser = v;
  }


  private _username : string="";
  public get username() : string {
    return this._username;
  }
  public set username(v : string) {
    this._username = v;
  }

  private _password: string = "";
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

    private _nom: string = "";
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    this._nom = value;
  }

    private _prenom: string = "";
  public get prenom(): string {
    return this._prenom;
  }
  public set prenom(value: string) {
    this._prenom = value;
  }

  private _adresse: string = "";
  public get adresse(): string {
    return this._adresse;
  }
  public set adresse(value: string) {
    this._adresse = value;
  }

    private _email: string = "";
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

    private _telephone: string = "";
  public get telephone(): string {
    return this._telephone;
  }
  public set telephone(value: string) {
    this._telephone = value;
  }

  private _age: number = 0;
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  private _sexe: string = "Non spécifié";
  public get sexe(): string {
    return this._sexe;
  }
  public set sexe(value: string) {
    this._sexe = value;
  }

    private _privilege: string = "User";
  public get privilege(): string {
    return this._privilege;
  }
  public set privilege(value: string) {
    this._privilege = value;
  }



}
