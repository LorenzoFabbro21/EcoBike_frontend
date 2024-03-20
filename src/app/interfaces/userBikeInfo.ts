import { User } from "../classes/user";
import { adRent } from "./adRent";
import { adSell } from "./adSell";
import { Appointment } from "./appointment";
import { Bicicletta } from "./bicicletta";

export interface userBikeInfo {
    user: User;
    bike: Bicicletta;
    appointment: Appointment;
    ad: adSell | adRent;
  
  }