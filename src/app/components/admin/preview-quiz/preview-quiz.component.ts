import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuizService } from "./../../../services/quiz.service";
import { QuizModule } from 'src/app/models/quiz.module';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ResponseService } from 'src/app/services/response.service';
import { ResponseModule } from 'src/app/models/response.module';

@Component({
  selector: 'app-preview-quiz',
  templateUrl: './preview-quiz.component.html',
  styleUrls: ['./preview-quiz.component.css']
})
export class PreviewQuizComponent implements OnInit {

  quiz;
  loading = true;
  showInput:boolean = true;
  showQuestions:boolean = false;
  formDataUser:NgForm;
  formPrev:NgForm;
  validExist = false;
  public resepQuestions = new ResponseModule();
  public response:any = {};
  

  constructor(
    private activatedRoute:ActivatedRoute,
    private _quizService:QuizService,
    private _usersService:UsersService,
    private _responseService:ResponseService
  ) {

    this.activatedRoute.params.subscribe( data => {

      this._quizService.getQuiz(data['id']).subscribe( resp => {
        this.quiz = resp;
        
        setInterval(() => { this.saveResponse(this.formPrev); }, 30000);
        this.loading = false;
      });

    });

   }

  ngOnInit(): void {
  }

  openQuiz( userData:NgForm ){
   
    let indice = Object.keys(userData.value);

    for (let index = 0; index < indice.length; index++) {
      const name = indice[index];
      const value = userData.value[indice[index]];

      this._usersService.searchInput(name,value).subscribe( list =>{

          if(list.length != 0){   
            this.validExist = false;
            this.showInput = false;
            this.showQuestions = true;

            this.response.user  = userData.value;
            this.response.questions = [];
           
            return this._responseService.addResponse(this.response);
            
          } else {
            this.validExist = true;
          }

      });

    }
    
  }

  saveResponse( form:NgForm){
    return this._responseService.updateResponse(this.quiz.questions);   
  }

  stateQuiz(item,data?,type?){

    switch (type) { 
      case 'open_question':
        item.value = data.value;
        break;
      case 'table':

        let indexOfStevie_table = item.options.findIndex(i => i.name === data);
        if(item.options[indexOfStevie_table].check){
          delete item.options[indexOfStevie_table].check;
        } else {
          Object.assign(item.options[indexOfStevie_table], {'check': true});
        }

        break;
      case 'check_label':

        let indexOfStevie_ck = item.options.findIndex(i => i.name === data);
        if(item.options[indexOfStevie_ck].check){
          delete item.options[indexOfStevie_ck].check;
        } else {
          Object.assign(item.options[indexOfStevie_ck], {'check': true});
        }
        
        break;
      
      case 'multiple_choice':
  
        if(item.check){
          delete item.check;
        } else {
          Object.assign(item, {'check': true});
        }

        break;
    
      default:
        break;
    }

  }

}
