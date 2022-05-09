export class Categorie {

	constructor() {

	}


  private _id: string = "";
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }


  private _libelle: string = "";
  public get libelle(): string {
    return this._libelle;
  }
  public set libelle(value: string) {
    this._libelle = value;
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



}
