import { Chambre } from './chambre';
import { Personne } from './personne';
export class Reservation {


	constructor() {

	}


  private _id: string = "";
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }


  private _personneID : string="";
  public get personneID() : string {
    return this._personneID;
  }
  public set personneID(v : string) {
    this._personneID = v;
  }


  private _personne: Personne = new Personne();
  public get personne(): Personne {
    return this._personne;
  }
  public set personne(value: Personne) {
    this._personne = value;
  }


  private _chambreID : string="";
  public get chambreID() : string {
    return this._chambreID;
  }
  public set chambreID(v : string) {
    this._chambreID = v;
  }


  private _chambre: Chambre = new Chambre();
  public get chambre(): Chambre {
    return this._chambre;
  }
  public set chambre(value: Chambre) {
    this._chambre = value;
  }

  private _dateReservation: Date = new Date();
  public get dateReservation(): Date {
    return this._dateReservation;
  }
  public set dateReservation(value: Date) {
    this._dateReservation = value;
  }

  private _dateEntree: Date = new Date();
  public get dateEntree(): Date {
    return this._dateEntree;
  }
  public set dateEntree(value: Date) {
    this._dateEntree = value;
  }

  private _dateSortie: Date = new Date();
  public get dateSortie(): Date {
    return this._dateSortie;
  }
  public set dateSortie(value: Date) {
    this._dateSortie = value;
  }

  private _isActive: boolean = true;
  public get isActive(): boolean {
    return this._isActive;
  }
  public set isActive(value: boolean) {
    this._isActive = value;
  }

  private _montant: number = 0;
  public get montant(): number {
    return this._montant;
  }
  public set montant(value: number) {
    this._montant = value;
  }


    private _nb_Adults : number = 1;
    public get nb_Adults() : number {
      return this._nb_Adults;
    }
    public set nb_Adults(v : number) {
      this._nb_Adults = v;
    }


    private _nb_Enfants : number= 0;
    public get nb_Enfants() : number {
      return this._nb_Enfants;
    }
    public set nb_Enfants(v : number) {
      this._nb_Enfants = v;
    }




}
