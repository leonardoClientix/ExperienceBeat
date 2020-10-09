import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuizService } from "./../../../services/quiz.service";
import { QuizModule } from 'src/app/models/quiz.module';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ResponseService } from 'src/app/services/response.service';
import { ResponseModule } from 'src/app/models/response.module';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FA_ICONS } from 'src/app/fontawesome.module';

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
  showEndQuiz:boolean = false;
  formDataUser:NgForm;
  formPrev:NgForm;
  validExist = false;
  public resepQuestions = new ResponseModule();
  public response:any = {};
  @ViewChild('sliData', { static: false })  sliData:any;
  

  constructor(
    private activatedRoute:ActivatedRoute,
    private _quizService:QuizService,
    private _usersService:UsersService,
    private _responseService:ResponseService
  ) {

    this.activatedRoute.params.subscribe( data => {
      this.response.id_quiz = data['id'];
      this._quizService.getQuiz(data['id']).subscribe( resp => {
        this.quiz = resp;
        
        
          setInterval(() => { 
            if(this.response.user && (!this.quiz.state || this.quiz.state == 'process') ){
              this.saveResponse('process'); 
            }
          }, 30000);
        
        
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

          if(list.length == 0){   
            // no existe
            this.validExist = true; 
          } else {
            this.validExist = false;

            this.showInput = false;
            this.showQuestions = true;
            this.response.user  = userData.value;
            this.response.creation_date = new Date();
            this.quiz.end_date = '';
            this.response.state = 'process';
            this.response.questions = [];
                 
            return this._responseService.addResponse(this.response);

          }

      });

    }

  }

  saveResponse( state ){

    this.quiz.state = state;

    if(state == 'finished'){
      this.quiz.end_date = new Date();
      this.showInput = false;
      this.showQuestions = false;
      this.showEndQuiz = true;
    } 

    console.log(this.quiz);

    return this._responseService.updateResponse(this.quiz);  

  }

  stateQuiz(item,data?,type?,input?){

    let validate;

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

          if(data.type){
              if(data.type == 'none'){
                  const element_none = item.items.filter(as => as.check === true && as.type != 'none');
                  for (let t = 0; t < element_none.length; t++) {
                    delete element_none[t].check;     
                  }
              }

              if(data.type == 'other'){
                 data.value = '';
              }
          }

          if(data.check == true){
            delete data.check;
            delete item.alert;
            if(data.type == 'other'){
              delete data.value;
            }
          } else {

            if(data.type != 'none'){
                let indexOf_type = item.items.findIndex(as => as.check === true && as.type == 'none');
                if(indexOf_type != -1){
                  delete item.items[indexOf_type].check;
                }   
            }

             validate = this.validNumResponse(item,data);

            if(validate.valid){
              Object.assign(data, {'check': true});
              delete item.alert;
            } else {
              delete data.check;
              item.alert = validate.message;
              Object.assign(data, {'check': true});       
            }
            
          }

          setTimeout(() => {
            delete item.alert;
          }, 9000);
        
        break;
    
      default:
        break;
    }

    console.log(data);

  }

  saveSlider(input,item){

    for (const key in item.items) {
      if (Object.prototype.hasOwnProperty.call(item.items, key)) {

        if(item.items[key].name == input.value){
          Object.assign(item.items[key], {'check': true});   
        } else {
          delete item.items[key].check;
        }
        
      }
    }

  }

  sliColor(data,item?){
    if(!item){
      
    this.sliData._elementRef.nativeElement.children[0].children[2].children[2].style.background = data;
    this.sliData._elementRef.nativeElement.children[0].children[2].children[1].style.background = data;
    this.sliData._elementRef.nativeElement.children[0].children[0].children[1].style.background = data;
    } else {

      item._elementRef.nativeElement.children[0].children[2].children[2].style.background = data;
      item._elementRef.nativeElement.children[0].children[2].children[1].style.background = data;
      item._elementRef.nativeElement.children[0].children[0].children[1].style.background = data;

    }
  }

  validNumResponse(question,respon){

    const checks = question.items.filter(data => data.check === true);
    let indexOf = checks.findIndex(i => i.check === true);
   
    if(checks.length >= question.maximum_responses){
        checks[indexOf].check = false; 
        return { 'message': 'Recuerda que puedes seleccionar maximo '+question.maximum_responses+' respuestas y minimo '+question.minimal_responses , 'valid':false }
    } else {
        return { 'valid': true }
    }
 
  }

  selectIconOption(type,id){

    let icon:IconDefinition = FA_ICONS.options.faExclamationTriangle;

    switch (type) {
      case 'faces':

            switch (id) {
              case 0:
                icon = FA_ICONS.faces.faAngry;
                break;
              case 1:
                icon = FA_ICONS.faces.faFrown;
                break;
              case 2:
                icon = FA_ICONS.faces.faMeh;
                break;
              case 3:
                icon = FA_ICONS.faces.faSmile;
                break;
              case 4:
                icon = FA_ICONS.faces.faGrin;
                break;
              case 5:
                icon = FA_ICONS.faces.faGrinAlt;
                break;
              case 6:
                icon = FA_ICONS.faces.faLaugh;
                break;
              case 7:
                icon = FA_ICONS.faces.faGrinBeam;
                break;
              case 8:
                icon = FA_ICONS.faces.faGrinStars;
                break;
            
              default:
                break;
            }

        break;

      case 'heart':

            icon = FA_ICONS.heart.faHeart;
            
        break;
    
      default:
        break;
    }


    return icon;

  }

}
