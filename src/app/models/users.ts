import { Injectable } from "@angular/core";
import { Roles } from "./Roles.enum";
@Injectable({
    providedIn: 'root'
  })
export class Users {
        nom? : string
        email? : string
        motdepasse? : string
        role? : Roles
}
