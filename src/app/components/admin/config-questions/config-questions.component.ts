import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl , Validators , FormArray} from '@angular/forms';
import { faClone, faEdit, faSave, faArrowAltCircleRight, faArrowAltCircleLeft, faPlusCircle,faSortDown, faSortUp, faAngleLeft,faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { QuizService } from '../../../services/quiz.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuizModule } from '../../../models/quiz.module';
import { QuestionsModule } from 'src/app/models/questions.module';
import { ColorModule } from '../../../models/color.module';


@Component({
  selector: 'app-config-questions',
  templateUrl: './config-questions.component.html', 
  styleUrls: ['./config-questions.component.css']
})
export class ConfigQuestionsComponent implements OnInit {

  public Editor = ClassicEditor;
  public quiz:QuizModule;
  public questions:QuestionsModule;
  public colors:ColorModule;
   


  modalTypeQuestion = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;
 
  fileLogo: any;
  form:FormGroup;
  formTypeQuestion:FormGroup;

  step = "basic-parameters";
  faClone = faClone;
  faEdit = faEdit;
  faSave = faSave;
  faArrowAltCircleRight = faArrowAltCircleRight;
  faPlusCircle = faPlusCircle;
  faSortDown = faSortDown;
  faSortUp = faSortUp;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faPlus = faPlus;
  loading = true;

  question:Object = {
    logo : null,
  }

  // quiz = {
  //   name:'',
  //   logo:'',
  //   description:'',
  //   initial_text: '',
  //   final_text: '',
  //   colors:
  //     {
  //       name: '#000000',
  //       header: '#cacaca',
  //       background: '#ffffff',
  //       question: '#ced5de',
  //       txtquestion: '#000000',
  //       option: '#000000',
  //       txtoption: '#000000'
  //     }
  //   ,
  //   question: [{
  //     idQuestion: 1,
  //     description : 'Pregunta 1',
  //     typeQuestion: 'itemTxt'
  //   },{
  //     idQuestion: 2,
  //     description : 'Pregunta 2',
  //     typeQuestion: 'itemOpt',
  //     itemOpt: [{ name : ''}]
  //   },{
  //     idQuestion: 3,
  //     description : 'Pregunta 3',
  //     typeQuestion: 'itemCubi',
  //     itemCubi: [{ name : ''}]
  //   },{
  //     idQuestion: 4,
  //     description : 'Pregunta 4',
  //     typeQuestion: 'itemCheckMult',
  //     itemCheckMult: [{
  //        label : '',
  //        options : [{ name : ''}]
  //     }]
  //   },{
  //     idQuestion: 5,
  //     description : 'Pregunta 5',
  //     typeQuestion: 'itemTxtFree'
  //   },{
  //     idQuestion: 6,
  //     description : 'Pregunta 6',
  //     typeQuestion: 'itemTable',
  //     itemTable: [{
  //       label : 'Formación y Desarrollo',
  //       options : [{ name : ''}]
  //    }]
  //   }],
  // };

  listStyle = {
    width:'100%'
  }


  constructor(
    public _quizService : QuizService
  ) {

     console.log(this.quiz);
    
    if(localStorage.getItem('step')){ 
      this.step = localStorage.getItem('step');
    }

    if(localStorage.getItem("id_quiz") &&  this.loading == true){
      this._quizService.getQuiz(localStorage.getItem("id_quiz")).subscribe((data:QuizModule) => {
        this.quiz = data;
        this.loading = false;  
      });
       
    } else {

      this.quiz = new QuizModule();
      this.quiz.colors = new ColorModule();
      this.quiz.questions = [];
      this.quiz.colors.name = '#000000';
      this.quiz.colors.header = '#cacaca';
      this.quiz.colors.background = '#ffffff';
      this.quiz.colors.question = '#ced5de';
      this.quiz.colors.txtquestion = '#000000';
      this.quiz.colors.option = '#000000';
      this.quiz.colors.txtoption = '#000000'; 

      this.loading = false;

    }

    


      this.form = new FormGroup({
        'nameQuiz': new FormControl( '',Validators.required ),
        'colorTitle': new FormControl('', Validators.required ),
        'logo': new FormControl('', Validators.required ),
        'description': new FormControl('', Validators.required ),
        'initial_text': new FormControl('', Validators.required ),
        'final_text': new FormControl('', Validators.required ),
        'colorHeader': new FormControl('', Validators.required ),
        'colorBackground': new FormControl('', Validators.required ),
        'colorQuestion': new FormControl('', Validators.required ),
        'TxtQuestion': new FormControl('', Validators.required ),
        'colorOption': new FormControl('', Validators.required ),
        'TxtOption': new FormControl('', Validators.required )
      });
  
      this.formTypeQuestion = new FormGroup({
        'typeQuestion': new FormControl('', Validators.required )
      });

  }

  ngOnInit(){

    console.log(this.quiz);

    setTimeout(() => {
      if(localStorage.getItem("id_quiz")){
      this.form.setValue({
        'nameQuiz': this.quiz.name,
        'colorTitle': this.quiz.colors.name,
        'logo': '',
        'description': this.quiz.description,
        'initial_text': this.quiz.initial_text,
        'final_text': this.quiz.final_text,
        'colorHeader': this.quiz.colors.header,
        'colorBackground': this.quiz.colors.background,
        'colorQuestion': this.quiz.colors.question,
        'TxtQuestion': this.quiz.colors.txtquestion,
        'colorOption': this.quiz.colors.txtoption,
        'TxtOption': this.quiz.colors.txtoption
      });
      }
  
    }, 3000);

  }

  changeColor(type,event){
    console.log(event); 
    switch (type) {
      case 'colorTitle':
        this.quiz.colors.name = event;
        break;
      case 'colorHeader':
        this.quiz.colors.header = event;
        break;
      case 'colorBackground':
        this.quiz.colors.background = event;
        break;
      case 'colorQuestion':
        this.quiz.colors.question = event;
        break;
      case 'TxtQuestion':
        this.quiz.colors.txtquestion = event;
        break;
      case 'colorOption':
        this.quiz.colors.option = event;
        break;
      case 'TxtOption':
        this.quiz.colors.txtoption = event;
        break;
    
      default:
        break;
    }

    this.updateQuiz();
 
  }

  steps(after){
      this.step = after;
      localStorage.setItem("step",this.step);
  }

  uploadImage(event){    
    this.quiz.logo = event;
    this._quizService.saveImg(this.quiz);
  } 

  updateQuiz(){


      this.quiz.name = this.form.controls['nameQuiz'].value;
      this.quiz.description = this.form.controls['description'].value;
      this.quiz.initial_text = this.form.controls['initial_text'].value;
      this.quiz.final_text = this.form.controls['final_text'].value;

      console.log(this.quiz);

      if(localStorage.getItem('id_quiz')){
        this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));
      } else { 
        this._quizService.saveQuiz(this.quiz);
      }

  }

  typeQuestion(){

    let typeQuestion = this.formTypeQuestion.controls['typeQuestion'].value;
    let dataQuestion: QuestionsModule = new QuestionsModule();
    
    switch (typeQuestion) {
      case 'open_question':
          dataQuestion.typeDesign = "open_question";
        break;
      case 'multiple_choice':
          dataQuestion.typeDesign = "multiple_choice";
        break;
      case 'multiple_choice_table':
          dataQuestion.typeDesign = "multiple_choice_table";
        break;
      case 'message':
          dataQuestion.typeDesign = "message";
        break;
    
      default:
        break;
    }
    console.log(this.quiz);
    this.quiz.questions.push(dataQuestion);
    this.modalTypeQuestion = false;
    
    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));

    this.closeBtn.nativeElement.click();

  }

  listOrderChanged(data){
    console.log('dat',data);
  }  

  colorPicker(txt,id){
    console.log(txt,id);
    return txt+id; 
  }

  addOptLabel(idQuestion,type,label){

    idQuestion = idQuestion -1;
    console.log("pregunta", this.quiz.questions[idQuestion][type]);

    this.quiz.questions[idQuestion][type][label].options.push({
      name :'' 
    });
  }

  addOpt(idQuestion,type){

    idQuestion = idQuestion -1;

    if(type == 'itemCheckMult' || type == 'itemTable'){
      this.quiz.questions[idQuestion][type].push({
          label : '',
          options : [{ name : ''}]
      });
    } else {
      this.quiz.questions[idQuestion][type].push({
        name :'' 
      });
    }

  }
  removeOpt(idQuestion,type,i) {
    idQuestion = idQuestion -1;
    this.quiz.questions[idQuestion][type].splice(i, 1);
  }


} 
