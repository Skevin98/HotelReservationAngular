export class Categorie {

	constructor() {
    Categorie._nombre++;
	}
  

  private _idCategorie: string = "";
  public get idCategorie(): string {
    return this._idCategorie;
  }
  public set idCategorie(value: string) {
    this._idCategorie = value;
  }


  private _libelle: string = "";
  public get libelle(): string {
    return this._libelle;
  }
  public set libelle(value: string) {
    this._libelle = value;
  }


  private _nb_Chambres: number = 0;
  public get nb_Chambres(): number {
    return this._nb_Chambres;
  }
  public set nb_Chambres(value: number) {
    this._nb_Chambres = value;
  }


  private _tarif: number = 0;
  public get tarif(): number {
    return this._tarif;
  }
  public set tarif(value: number) {
    this._tarif = value;
  }


  private _description: string = "";
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  private static _nombre: number = 0;
  public static get nombre(): number {
    return Categorie._nombre;
  }
  public static set nombre(value: number) {
    Categorie._nombre = value;
  }

}
