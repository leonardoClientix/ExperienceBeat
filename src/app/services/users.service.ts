import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { UserModule } from '../models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
     private afs: AngularFirestore
  ) { }

  addUsers(data){
    for (let i = 1; i < data.length; i++) {
      const param = JSON.parse(JSON.stringify(data[i]));
      console.log(param);
      this.afs.collection("users").add( param );
    }
  }
}
