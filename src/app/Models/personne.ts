export class Personne {


  constructor() {
    Personne.nombre++;
	}
  

    private _idPersonne: string = "";
  public get idPersonne(): string {
    return this._idPersonne;
  }
  public set idPersonne(value: string) {
    this._idPersonne = value;
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
    
    private _mot_de_passe: string = "";
  public get mot_de_passe(): string {
    return this._mot_de_passe;
  }
  public set mot_de_passe(value: string) {
    this._mot_de_passe = value;
  }
    
    private _isAdult: boolean = true;
  public get isAdult(): boolean {
    return this._isAdult;
  }
  public set isAdult(value: boolean) {
    this._isAdult = value;
  }
    
    private _sexe: string = "";
  public get sexe(): string {
    return this._sexe;
  }
  public set sexe(value: string) {
    this._sexe = value;
  }
    
    private _privilege: string = "";
  public get privilege(): string {
    return this._privilege;
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
    
    private static _nombre: number = 0;
  public static get nombre(): number {
    return Personne._nombre;
  }
  public static set nombre(value: number) {
    Personne._nombre = value;
  }

}
