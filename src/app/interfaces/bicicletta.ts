import { Taglia } from "../enum/tagliaEnum"
export interface Bicicletta {

  id?: number,
  modello?: string,
  marca?: string,
  colore?: string,
  taglia?: Taglia,
  tipologia?: string,
  immagini?: any

}