import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent  {

  msg = ""; 

  public user = {
    email:"",
    password:""
  }

  constructor(
    public _lgn:LoginService,
    private router:Router
  ) {
    
  }

  getIn(){

    this._lgn.login(this.user).then((res:any)=>{
       localStorage.setItem("user",res.user.email);
       this.router.navigate(['config-questions']);
    }).catch(err => {
      console.log(err);
      if(err.code == "auth/user-not-found"){
        this.msg = "Usuario incorrecto";
      } else if(err.code == "auth/wrong-password"){
        this.msg = "Contraseña incorrecta"; 
      }
    });
  }

}
