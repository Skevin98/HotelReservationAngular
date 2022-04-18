import { Categorie } from "./categorie";
import { Lit } from "./lit";
import { Option } from "./option";

export class Chambre {


  /**
   *
   */
  constructor() {

   }

    private _idChambre: string = "";
  public get idChambre(): string {
    return this._idChambre;
  }
  public set idChambre(value: string) {
    this._idChambre = value;
  }
   
    private _num_etage: number = 0;
  public get num_etage(): number {
    return this._num_etage;
  }
  public set num_etage(value: number) {
    this._num_etage = value;
  }
   
    private _batiment: string = "";
  public get batiment(): string {
    return this._batiment;
  }
  public set batiment(value: string) {
    this._batiment = value;
  }
   
    private _option: Option = new Option();
  public get option(): Option {
    return this._option;
  }
  public set option(value: Option) {
    this._option = value;
  }
   
    private _categorie: Categorie = new Categorie();
  public get categorie(): Categorie {
    return this._categorie;
  }
  public set categorie(value: Categorie) {
    this._categorie = value;
  }
   
    private _lits: Lit[] = [];
  public get lits(): Lit[] {
    return this._lits;
  }
  public set lits(value: Lit[]) {
    this._lits = value;
  }
   

  


}
