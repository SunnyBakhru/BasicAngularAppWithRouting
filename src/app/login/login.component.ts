import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userLogin } from  '../classes/User.login';
import { store } from '@angular/core/src/render3';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent implements OnInit {
  username:string;
  password:string;
  
  
 
  constructor(private router: Router) { }

  ngOnInit() {
   sessionStorage.setItem('key', this.username);
   sessionStorage.getItem('key');
  }
  

//   LoginUser(){
//     if(this.username=="Admin" && this.password=="admin123"){
//     console.log("Welcome");
//     this.router.navigate(['/userdetails']);
//   }
// }

LoginUser(){
  let obj = new userLogin();
  obj.UserSet=this.username;
  obj.PasswordSet=this.password;
 if(this.username==obj.UserGet && this.password==obj.PasswordGet){
  console.log("Welcome");
  
  this.router.navigate(['userdetails',this.username]);
 
}
    }
  }



