import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl , Validators , FormArray} from '@angular/forms';
import { faClone, faEdit, faSave, faArrowAltCircleRight, faArrowAltCircleLeft, faPlusCircle,faSortDown, faSortUp, faAngleLeft,faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { QuizService } from '../../../services/quiz.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuizModule } from '../../../models/quiz.module';
import { QuestionsModule } from 'src/app/models/questions.module';
import { ColorModule } from '../../../models/color.module';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';


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
  @ViewChild('dbt') dbt: CKEditorComponent;
 
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

  listStyle = {
    width:'100%'
  }

  constructor(
    public _quizService : QuizService,
    private cdRef:ChangeDetectorRef
  ) {
    
    if(localStorage.getItem('step')){ 
      this.step = localStorage.getItem('step');
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

    if(localStorage.getItem("id_quiz") &&  this.loading == true){
      
      this._quizService.getQuiz(localStorage.getItem("id_quiz")).subscribe((data:QuizModule) => {
       
        this.quiz = data;
       
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
 
  }


  changeColor(type,event){

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

    if(localStorage.getItem('id_quiz')){
      this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));
    } else { 
      this._quizService.saveQuiz(this.quiz);
    }

     // console.log(this.dbt.editorInstance.settData('hols'));

    //  ClassicEditor.create( document.querySelector( '#validationTextarea' ) )
    // .then( editor => {
    //     console.log( editor );

    //     editor.setData( '<p>Some text.</p>' );

      
    // } )
    // .catch( error => {
    //     console.error( error );
    // } );
  
  }

  typeQuestion(){

    let typeQuestion = this.formTypeQuestion.controls['typeQuestion'].value;
    let dataQuestion: QuestionsModule = new QuestionsModule();
    
    let count_question = this.quiz.questions.length+1; 

    console.log("count_question",count_question);
    dataQuestion.id = count_question;
    dataQuestion.colors = new ColorModule();
    dataQuestion.description = '';
    
    switch (typeQuestion) {
      case 'open_question':
          dataQuestion.typeDesign = "open_question";
        break;
      case 'message':
          dataQuestion.typeDesign = "message";
        break;
      case 'multiple_choice':
          dataQuestion.typeDesign = "multiple_choice";
          dataQuestion.items = [{ name : ''}];
        break;
      case 'check_label':
          dataQuestion.typeDesign = "check_label";
          dataQuestion.items = [{ label : '',options : [{ name : ''}]}];
        break;
      case 'table':
          dataQuestion.typeDesign = "table";
          dataQuestion.items = [{ label : '',options : [{ name : ''}]}];
        break;
    
      default:
        break;
    }

    this.quiz.questions.push(dataQuestion);
    this.modalTypeQuestion = false;
    this.closeBtn.nativeElement.click();

    console.log(this.quiz.questions);
  }

  addOptLabel(item,typeDesign){   
    
    switch (typeDesign) {
      case 'check_label':
        item.options.push({name:''});
        break;
      case 'table':
        item.options.push({name:''});
        break;
    }

    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));

  }

  addOpt(item,typeDesign){

    switch (typeDesign) {
      case 'check_label':
        item.items.push({label:'',options : [{ name : ''}]});
        break;
      case 'table':
        item.items.push({label:'',options : [{ name : ''}]});
        break;
      case 'multiple_choice':
        item.items.push({ name : ''});
        break;
    }

    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));

  }

  removeOpt(item,typeDesign,id){

    switch (typeDesign) {
      case 'check_label':
        item.options.splice(id, 1);
        break;
      case 'table':
        item.items.push({label:'',options : [{ name : ''}]});
        break;
      case 'multiple_choice':
        item.items.splice(id, 1);
        break;
    }

    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));

  }

  saveQuestions( data:NgForm,input,item:QuestionsModule){

    console.log("data",data);
    console.log("input",input);
    
    item.description = data[input].value;

    switch (item.typeDesign) {
      case 'message':
        
        break;
    
      default:
        break;
    }

    console.log(this.quiz);

  }

  clonarQuestion(item:QuestionsModule){

    let clonQuestion = JSON.parse(JSON.stringify(item));
    let count_question = this.quiz.questions.length+1; 
        clonQuestion.id = count_question;
    this.quiz.questions.push(clonQuestion); 
      console.log(this.quiz);

  }

  listOrderChanged(data){
    console.log('dat',data);
  }  
  


} 
