import { Injectable } from '@angular/core';
import { FileItemsModule } from '../models/file-items.module';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { QuizModule } from '../models/quiz.module';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

    constructor(
        public db: AngularFirestore
    ){}

    uploadImageFirebase( data ) {
        console.log(data.logo);
        let file_img = 'img/quiz';
        

        return new Promise(function(resolve, reject) {
            
        let file_name = data.logo.target.files[0].name;
        file_name = file_name.split(".");
        let extension = file_name[file_name.length-1];

         const storageRef = firebase.storage().ref();
         const referenciaImagen = storageRef.child( `${ file_img }/${ data.name }.${ extension }` );
        //  const referenciaImagen = storageRef.child( `${ this.file_img }/${ item.target.files[0].name }` );
         const uploadTask: firebase.storage.UploadTask = referenciaImagen.put( data.logo.target.files[0] );
 
         uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED ,
               ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                             ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100 ,
               ( error ) => console.error('Error al subir', error),
               () => {
                 referenciaImagen.getDownloadURL().then(
                     ( urlImagen ) => {
                         console.log('Imagen cargada correctamente');
       
                            resolve({
                                nombre: data.logo.target.files[0].name ,
                                url: urlImagen
                            });
 
 
                     },
                     ( error ) => console.log('No existe la URL')
                 );
         });

        });
 
    }

    saveImg( data ){
        this.uploadImageFirebase(data).then((img:any)=>{
            data.logo = img.url;  

            if(localStorage.getItem('id_quiz')){
                this.db.collection("quiz").doc(localStorage.getItem('id_quiz')).update(JSON.parse(JSON.stringify(data)));
            } else {
                this.db.collection("quiz").add( data );
            }

        });
    }

    saveQuiz(data: QuizModule){

        console.log(data);

        this.db.collection<QuizModule>("quiz").add(JSON.parse(JSON.stringify(data))).then((quiz) =>{
            localStorage.setItem("id_quiz",quiz.id);
        });

    } 

    updateQuiz(data,idDocumentFire){
        return this.db.collection("quiz").doc(idDocumentFire).update(JSON.parse(JSON.stringify(data)));
    }

    getQuiz(idDocumentFire){
        return this.db.collection("quiz").doc(idDocumentFire).valueChanges();
    }

}
 
