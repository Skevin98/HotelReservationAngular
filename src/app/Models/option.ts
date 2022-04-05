export class Option {

  /**
   *
   */
  constructor() { 
    Option.nombre++;
   }

  private _idOption: string = "";
  public get idOption(): string {
    return this._idOption;
  }
  public set idOption(value: string) {
    this._idOption = value;
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
  
  private _hasCuisine: boolean = false;
  public get hasCuisine(): boolean {
    return this._hasCuisine;
  }
  public set hasCuisine(value: boolean) {
    this._hasCuisine = value;
  }
  
  private static _nombre: number = 0;
  public static get nombre(): number {
    return Option._nombre;
  }
  public static set nombre(value: number) {
    Option._nombre = value;
  }


}
