export class Lit {
  

	constructor() {

	}
  
  
  private _idLit: string = "";
  public get idLit(): string {
    return this._idLit;
  }
  public set idLit(value: string) {
    this._idLit = value;
  }

  private _nb_places: number = 0;
  public get nb_places(): number {
    return this._nb_places;
  }
  public set nb_places(value: number) {
    this._nb_places = value;
  }



}
