import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate,ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(
     public afAuth: AngularFireAuth,
     private router:Router
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
 

    if(localStorage.getItem('user')){
     // this.router.navigate(['config-questions']);
      return true; 
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }


}
