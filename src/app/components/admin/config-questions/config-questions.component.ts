import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl , Validators , FormArray} from '@angular/forms';
import { faClone, faEdit, faSave, faArrowAltCircleRight, faArrowAltCircleLeft, faPlusCircle,faSortDown, faSortUp, faAngleLeft,faAngleRight, faPlus, faCheckCircle, faBook, faTimesCircle,faExchangeAlt, faUpload, faAsterisk, faWindowClose, faTimes, faExclamationCircle, faNetworkWired, faDizzy, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { QuizService } from '../../../services/quiz.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuizModule } from '../../../models/quiz.module';
import { QuestionsModule } from 'src/app/models/questions.module';
import { ColorModule } from '../../../models/color.module';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { QuestionsService } from 'src/app/services/questions.service';
import { UserModule } from 'src/app/models/user.module';
import { UsersService } from 'src/app/services/users.service';
import { InputModule } from 'src/app/models/input.module';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FA_ICONS } from "../../../fontawesome.module";

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
  public records: any[] = [];
  public FA_ICONS = FA_ICONS;
   
  modalTypeQuestion = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @ViewChild('dbt') dbt: CKEditorComponent;
  @ViewChild('csvReaderQuestions', { static: false })  csvReaderQuestions:any;
  @ViewChild('csvReaderUsers', { static: false })  csvReaderUsers:any;
  @ViewChild('csvRelatedInput', { static: false })  csvRelatedInput:any;
  @ViewChild('sliData', { static: false })  sliData:any;

 
  fileLogo: any;
  form:FormGroup;
  formTypeQuestion:FormGroup;
  formConditional: FormGroup;
  step = "basic-parameters";
  loading = true;
  typeConditional;
  faBook = faBook;
  inputActive = false;
  listObj = [];
  inputsData = [];
  listUsers = [];
  idQuestionFilter;
  configModalQuestion:any = {};
  configModalDesign:any = {};
  dataLisInput = [];
 

  question:Object = {
    logo : null,
  }

  listStyle = {
    width:'100%'
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    public _quizService : QuizService,
    private cdRef:ChangeDetectorRef,
    public _questions:QuestionsService,
    public _users:UsersService
  ) {


    this.activatedRoute.params.subscribe( data => {

      if(data['id']){
        localStorage.setItem("id_quiz",data['id']);
      }
      
    });

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
      this.quiz.inputs = [];
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

    // this.updateQuiz();
 
  }

  steps(after){

    this.step = after;
    localStorage.setItem("step",this.step);

    if(after == 'configuration-questions'){

      this.quiz.name = this.form.controls['nameQuiz'].value;
      this.quiz.description = this.form.controls['description'].value;
      this.quiz.initial_text = this.form.controls['initial_text'].value;
      this.quiz.final_text = this.form.controls['final_text'].value;
      
  
      if(localStorage.getItem('id_quiz')){
        this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz")).then(dat => {
          console.log(dat);
        });
      } else { 
        this.quiz.creation_date = new Date();
        this._quizService.saveQuiz(this.quiz);
      }

    }

    console.log(this.quiz);

  }

  uploadImage(event){    

    this.quiz.logo = event;
    this._quizService.saveImg(this.quiz);

  } 

  // updateQuiz(){

  //   this.quiz.name = this.form.controls['nameQuiz'].value;
  //   this.quiz.description = this.form.controls['description'].value;
  //   this.quiz.initial_text = this.form.controls['initial_text'].value;
  //   this.quiz.final_text = this.form.controls['final_text'].value;

  //   if(localStorage.getItem('id_quiz')){
  //     this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));
  //   } else { 
  //     this._quizService.saveQuiz(this.quiz);
  //   }
  
  // }

  saveQuizQuestion(){
    console.log(this.quiz);
    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));
  }

  typeQuestion( formType:NgForm ){
    console.log(formType);
    let typeQuestion = formType.form.controls.typeQuestion.value;
    let dataQuestion: QuestionsModule = new QuestionsModule();
    
    let count_question = this.quiz.questions.length+1; 

    console.log("count_question",count_question);
    dataQuestion.id = count_question;
    dataQuestion.colors = new ColorModule();
    dataQuestion.description = '';
    dataQuestion.responsiveDesign = 'basic';
    
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
    
    this._quizService.updateQuiz(this.quiz,localStorage.getItem("id_quiz"));

    console.log(this.quiz);

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

   // this._quizService.updateQuiz(this.quiz.questions[this.quiz.questions.length-1],localStorage.getItem("id_quiz"));

  }

  addOpt(item,typeDesign,option?){

    let optValue;

    if(option == 'none'){
       optValue = "Ninguna";
    } else if(option == 'other'){
       optValue = "Otra, ¿Cuál?";
    } else {
      optValue = "Ninguna";
    }

    switch (typeDesign) {
      case 'check_label':
        if(option){
          item.items.push({ label:'', options : [{ name : optValue }], type : option });
        } else {
          item.items.push({ label:'', options : [{ name : ''}] });
        }
        break;
      case 'table':
        if(option){
          item.items.push({label:'', options : item.items[0].options, type : option });
        } else {
          item.items.push({label:'', options : item.items[0].options });
        }
        break;
      case 'multiple_choice':
        
        if(option){
          item.items.push({ name : optValue , type : option });
        } else {
          item.items.push({ name : ''});
        }

        break;
    }

    

    console.log(item);
    //this._quizService.updateQuiz(this.quiz.questions[this.quiz.questions.length-1],localStorage.getItem("id_quiz"));

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

    //this._quizService.updateQuiz(this.quiz.questions[this.quiz.questions.length-1],localStorage.getItem("id_quiz"));

  }

  clonarQuestion(item:QuestionsModule){

    let clonQuestion = JSON.parse(JSON.stringify(item));
    let count_question = this.quiz.questions.length+1; 
        clonQuestion.id = count_question;
    this.quiz.questions.push(clonQuestion); 
     // this._quizService.updateQuiz(this.quiz.questions[this.quiz.questions.length-1],localStorage.getItem("id_quiz"));

  }

  configQuestion( data:NgForm ){

    console.log(data);
    let type = data.form.controls.typeConditional.value;
  }

  addInputType(){
    if(this.quiz.inputs === undefined){
      this.quiz.inputs = [];
    }
    this.quiz.inputs.push({name:' ',placeholder:'',selAct: false,selFilter: false});
  }

  selectInput(item){
    this._users.getUserQuiz().subscribe((data)=>{
      this.listObj = Object.keys(data[0]);
      item.selAct = !item.selAct;
    });
  } 

  saveTypeInput(item,obj){
    obj.name = item;
    obj.selAct = false;
    this.inputActive = false;
  }
 
  getUsers( data:InputModule ){

    data.selFilter = !data.selFilter;
    this._users.getUserQuiz().subscribe((data:any)=>{
      this.listUsers = data;
    });

  }

  uploadRelatedInput($event?, idInput?, dataInput?,daForm?){

    this.csvRelatedInput.nativeElement.click();
    
    if($event){
      
    dataInput.selFilter = true;
   
      let files = $event.srcElement.files;

        if (this.isValidCSVFile(files[0])) {

            let input = $event.target;
            let reader = new FileReader();
            reader.readAsText(input.files[0], 'ISO-8859-1');
      
            reader.onload = () => {
              let csvData = reader.result;
              let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
              let headersRow = this.getHeaderArray(csvRecordsArray);
      
              console.log(csvRecordsArray);
              console.log(daForm.form['controls']['selectedFilterInput'+idInput]);

              this._users.getFilterUserInput( csvRecordsArray , dataInput.name ).subscribe((parm:any)=>{
                 this.dataLisInput = parm;     
              });
            
            };
      
            reader.onerror = function () {
              console.log('Ocurrio un error al leer el archivo!');
            };
      
        } else {
            alert("El archivo no es CSV");
            this.fileReset();
        }

    }
    
  }

  dataDuplicate( obj, input ){

    let acum = [];
    for (let index = 0; index < obj.length; index++) {
      if(acum.indexOf(obj[index][input]) == -1){
          acum.push(obj[index][input]);
      }
    }
    return acum;

  }

  saveFilterUserQuestion( value,input ){
    this._users.updateFiltersQuestion(this.configModalQuestion.idQuestionFilter,value,input);
  }

  openModalConfigQuestion(idQuestion,item){
    this.configModalQuestion = {};
    this.configModalQuestion.idQuestionFilter = idQuestion;
    this.configModalQuestion.typeDesign = item.typeDesign;
    this.configModalQuestion.items = item.items;
  }

  listOrderChanged(data){
    console.log('dat',data);
  }  

  deleteInput(item,id){
    item.splice(id, 1);
  }

  deleteQuestion(id){
    let indexOf = this.quiz.questions.findIndex(i => i.id === id); 
    let r = confirm("¿Esta seguro que quiere eliminar esta pregunta?");
    if (r == true) {
        this.quiz.questions.splice(indexOf, 1);
    } 
  }

  modalEditQuestion(item){
    this.configModalDesign = {};
    this.configModalDesign = item;

    console.log(this.quiz);
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

 

  uploadListener($event: any, type): void {

    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0], 'ISO-8859-1');

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);

        if( type == "questions") {
          this.records = this.getDataQuestions(csvRecordsArray, headersRow.length);
          this._questions.addQuestion(this.records);
          
        }

        if( type == "users") {
          this.records = this.getDataUsers(csvRecordsArray, headersRow.length);
          console.log(this.records);
          this._users.addUsers(this.records);
        }
 
      };

      reader.onerror = function () {
        console.log('Ocurrio un error al leer el archivo!');
      };

    } else {
      alert("El archivo no es CSV");
      this.fileReset();
    }
    
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(';');
    let headerArray = [];

    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }

    return headerArray;
  }

  getDataQuestions(csvRecordsArray: any, headerLength: any) {

    let csvArr = [];
    let csvMessage:any = {};
    let itemInput:any = [];
    let inputs = [];
    let list:any = [];

    let dataMessage = csvRecordsArray[1].split(';');
    let dataInput = csvRecordsArray[2].split(';');
    dataInput = dataInput[1].split('|');

    for( let w = 0; w < dataInput.length; w++) {
      itemInput = dataInput[w].split(',');
      inputs.push(itemInput);
    }

    for( let t = 0; t < inputs.length; t++) {
        list.push({ name: inputs[t][0], type: inputs[t][1], placeholder: inputs[t][2] });
    }

    csvMessage.message = dataMessage[1];
    csvMessage.data =  list;
    // agregar mensaje de bienvenida
    this._questions.addMessage(csvMessage);

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');

      if (curruntRecord.length == headerLength) {
        let csvRecord:QuestionsModule = new QuestionsModule();
        csvRecord.id = parseFloat(curruntRecord[0]);

        let listOption =  curruntRecord[0].split('.');
        // lista de preguntas
        if(listOption.length == 1){
          // lista de opciones de cada pregunta
          let valueOption = this.getOptions(curruntRecord[0], csvRecordsArray, headerLength );
         
          csvRecord.parameters = { message: curruntRecord[1], option: valueOption, repeat: curruntRecord[4], valcheck: [] };
          //csvRecord.mandatory = curruntRecord[2];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[5];
          csvRecord.conditional = curruntRecord[6];
          csvRecord.variable = curruntRecord[7];
          csvRecord.multiple = curruntRecord[8];
          csvRecord.text = curruntRecord[9];
          csvRecord.rack = curruntRecord[10];
          csvRecord.order = curruntRecord[11];
          csvRecord.comparator = curruntRecord[12];
          csvRecord.check = curruntRecord[13];
          csvRecord.matriz = curruntRecord[14];
          csvRecord.miltiCheck = curruntRecord[15];
          csvRecord.alerts = curruntRecord[16];
          csvArr.push(csvRecord);

        }

      }
    }

    return csvArr;
  }

  getDataUsers(csvRecordsArray: any, headerLength: any){

    let csvDataUser = [];
    let headerData:any = [];
    let csvData:any = {};
    let dataSave = [];
    let cont = 0;
    headerLength = headerLength-1;

    for (let i = 0; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(';');
 
      for (let a = 0; a < curruntRecord.length; a++) {
        if(i == 0){
          headerData.push(curruntRecord[a]);
        } else {
          csvDataUser.push(curruntRecord[a]);
        }
      }
    }

    for (let c = 0; c < csvDataUser.length; c++) {

      if(headerData[cont]){
        csvData[headerData[cont]] = csvDataUser[c];
        csvData['configQuiz'] = [{ idQuiz: localStorage.getItem('id_quiz') }];
      } 
    
      if(cont == headerLength){
        console.log(csvData);
        dataSave.push(csvData);
        csvData = {};
        cont = 0;
      } else {
        cont++;
      }
       
    }
    
    return dataSave;

  }


  getOptions( idQuestion, csvRecordsArray: any, headerLength: any ){

    let csvOption = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {

      let curruntRecord = (<string>csvRecordsArray[i]).split(';');

      if (curruntRecord.length == headerLength) {

        let csvRecord:QuestionsModule = new QuestionsModule();
        let listOption =  curruntRecord[0].split('.');

        if(listOption.length == 2 && idQuestion == listOption[0]){

          csvRecord.id = curruntRecord[0];
          if(curruntRecord[3] == "value"){
            csvRecord.options = curruntRecord[1].split(',');
          } else {
            csvRecord.options = curruntRecord[1];
          }
          //csvRecord.mandatory = curruntRecord[2];
          csvRecord.valcheck = [];
         // csvRecord.repeat = curruntRecord[4];
          csvRecord.typeDesign = curruntRecord[3];
          csvRecord.assets = curruntRecord[5];
          csvRecord.conditional = curruntRecord[6];
          csvRecord.variable = curruntRecord[7];
          csvRecord.multiple = curruntRecord[8];
          csvRecord.text = curruntRecord[9];
          csvRecord.rack = curruntRecord[10];
          csvRecord.order = curruntRecord[11];
          csvRecord.comparator = curruntRecord[12];
          csvRecord.check = curruntRecord[13];
          csvRecord.matriz = curruntRecord[14];
          csvRecord.miltiCheck = curruntRecord[15];
          csvRecord.alerts = curruntRecord[16];
          csvOption.push(csvRecord);

        }
      }

    }

    return csvOption;
  }

  fileReset() {
    this.csvReaderQuestions.nativeElement.value = "";
    this.csvReaderUsers.nativeElement.value = "";
    this.records = [];
  }
  


} 
