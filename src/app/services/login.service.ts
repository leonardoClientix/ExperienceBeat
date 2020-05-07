import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { QuestionsModule } from '../models/questions.module';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private itemsCollection: AngularFirestoreCollection<QuestionsModule>;
  public dataUser: any = {}
  constructor(
     private afs: AngularFirestore,
     public afAuth: AngularFireAuth,
     private router:Router
  ) { 

    this.afAuth.authState.subscribe( user =>{
        if(!user){
            return;
        } else {
            this.dataUser.name = user.displayName;
            this.dataUser.uId = user.uid;
        }
    })
  }


  login(data){
    
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(data.email,data.password)
        .then( userData => resolve(userData),
        error => reject(error));
    });
   
  }
 

}
