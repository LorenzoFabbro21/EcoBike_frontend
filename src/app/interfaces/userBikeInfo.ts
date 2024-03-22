import { User } from "../classes/user";
import { adRent } from "./adRent";
import { adSell } from "./adSell";
import { Appointment } from "./appointment";
import { Bicicletta } from "./bicicletta";

export interface userBikeInfo {
  adsell: adSell | adRent;
  appointment: Appointment;
  bike: Bicicletta;
  user: User;
}