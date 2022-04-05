import { Chambre } from './chambre';
import { Personne } from './personne';
export class Reservation {


	constructor() {

    Reservation._nombre++;
	}


  private _idReservation: string = "";
  public get idReservation(): string {
    return this._idReservation;
  }
  public set idReservation(value: string) {
    this._idReservation = value;
  }
  
  private _chambres: Chambre = new Chambre();
  public get chambres(): Chambre {
    return this._chambres;
  }
  public set chambres(value: Chambre) {
    this._chambres = value;
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
  
  private _etat: boolean = true;
  public get etat(): boolean {
    return this._etat;
  }
  public set etat(value: boolean) {
    this._etat = value;
  }
  
  private _personnes: Personne[] = [];
  public get personnes(): Personne[] {
    return this._personnes;
  }
  public set personnes(value: Personne[]) {
    this._personnes = value;
  }
  
  private _montant: number = 0;
  public get montant(): number {
    return this._montant;
  }
  public set montant(value: number) {
    this._montant = value;
  }
  
  private static _nombre: number = 0;
  public static get nombre(): number {
    return Reservation._nombre;
  }
  public static set nombre(value: number) {
    Reservation._nombre = value;
  }

}
