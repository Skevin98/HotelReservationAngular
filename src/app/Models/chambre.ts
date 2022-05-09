import { Categorie } from "./categorie";


export class Chambre {


  /**
   *
   */
  constructor() {

   }

  private _id: string = "";
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }



  private _categorieID : string = "";
  public get categorieID() : string {
    return this._categorieID;
  }
  public set categorieID(v : string) {
    this._categorieID = v;
  }


  private _categorie: Categorie = new Categorie();
  public get categorie(): Categorie {
    return this._categorie;
  }
  public set categorie(value: Categorie) {
    this._categorie = value;
  }

  private _numero: number = 0;
  public get numero(): number {
    return this._numero;
  }
  public set numero(value: number) {
    this._numero = value;
  }


  private _numEtage: number = 0;
  public get numEtage(): number {
    return this._numEtage;
  }
  public set numEtage(value: number) {
    this._numEtage = value;
  }

    private _numBatiment: number = 0;
  public get numBatiment(): number {
    return this._numBatiment;
  }
  public set numBatiment(value: number) {
    this._numBatiment = value;
  }


  private _nbLits : number = 0;
  public get nbLits() : number {
    return this._nbLits;
  }
  public set nbLits(v : number) {
    this._nbLits = v;
  }



  private _isAvailable : boolean = false;
  public get isAvailable() : boolean {
    return this._isAvailable;
  }
  public set isAvailable(v : boolean) {
    this._isAvailable = v;
  }



  private _hasBalcon: boolean = false;
  public get hasBalcon(): boolean {
    return this._hasBalcon;
  }
  public set hasBalcon(value: boolean) {
    this._hasBalcon = value;
  }

  private _hasVue_sur_mer: boolean = false;
  public get hasVue_sur_mer(): boolean {
    return this._hasVue_sur_mer;
  }
  public set hasVue_sur_mer(value: boolean) {
    this._hasVue_sur_mer = value;
  }


private _hasSalle_sejour : boolean = false;
public get hasSalle_sejour() : boolean {
  return this._hasSalle_sejour;
}
public set hasSalle_sejour(v : boolean) {
  this._hasSalle_sejour = v;
}



  private _hasCuisine: boolean = false;
  public get hasCuisine(): boolean {
    return this._hasCuisine;
  }
  public set hasCuisine(value: boolean) {
    this._hasCuisine = value;
  }

}
