import { Injectable } from "@angular/core";
import { Roles } from "./Roles.enum";
@Injectable({
    providedIn: 'root'
  })
export class Users {
        nom? : String
        prenom? : String
        numero? : number
        email? : String
        motdepasse? : String
        role? : Roles
}
