import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { QuestionsModule } from '../models/questions.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate,ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SigoutService implements CanActivate{


  constructor(
     private afs: AngularFirestore,
     public afAuth: AngularFireAuth,
     private router:Router
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(localStorage.getItem('user')){
      this.router.navigate(['config-questions']);
      return false;
    }else{
      return true;
    }
  } 

}
