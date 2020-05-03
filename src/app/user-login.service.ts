import { Injectable } from '@angular/core';
import { userLogin } from  './classes/User.login';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 
  username:string;
  

  constructor(usreNam:string) {
       this.username=usreNam;
   }
}
