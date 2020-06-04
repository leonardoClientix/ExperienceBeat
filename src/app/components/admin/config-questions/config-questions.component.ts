import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators , FormArray} from '@angular/forms';
import { faClone, faEdit, faSave, faArrowAltCircleRight, faArrowAltCircleLeft, faPlusCircle,faSortDown, faSortUp, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-config-questions',
  templateUrl: './config-questions.component.html',
  styleUrls: ['./config-questions.component.css']
})
export class ConfigQuestionsComponent implements OnInit {

  form:FormGroup;
  formType:FormGroup;

  step = "configuration-questions";
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

  question:Object = {
    logo : null,
  }

  quiz = {
    id: 1,
    question: [{
      idQuestion: 1,
      description : 'Pregunta 1',
      typeQuestion: 'itemTxt'
    },{
      idQuestion: 2,
      description : 'Pregunta 2',
      typeQuestion: 'itemOpt',
      itemOpt: [{ name : ''}]
    },{
      idQuestion: 3,
      description : 'Pregunta 3',
      typeQuestion: 'itemCubi',
      itemCubi: [{ name : ''}]
    },{
      idQuestion: 4,
      description : 'Pregunta 4',
      typeQuestion: 'itemCheckMult',
      itemCheckMult: [{
         label : '',
         options : [{ name : ''}]
      }]
    },{
      idQuestion: 5,
      description : 'Pregunta 5',
      typeQuestion: 'itemTxtFree'
    },{
      idQuestion: 6,
      description : 'Pregunta 6',
      typeQuestion: 'itemTable'
    }],
  };

  listStyle = {
    width:'100%'
  }


  constructor() {

    this.form = new FormGroup({
      'nameQuestion': new FormControl('', Validators.required )
    });

    this.formType = new FormGroup({
      'typeQuestion': new FormControl('', Validators.required )
    });
   
  }

  ngOnInit(): void {
  }

  steps(after){
      // basic-parameters
      this.step = after;
      console.log(this.step);
  }

  typeQuestion(){
    console.log("dsd");
  }


  listOrderChanged(data){
    console.log('dat',data);
  }  

  colorPicker(txt,id){
    console.log(txt,id);
    return txt+id;
  }

  addOptLabel(idQuestion,type,label){

    console.log("idQuestion",idQuestion);
    console.log("type",type);
    console.log("label",label);

    idQuestion = idQuestion -1;

    this.quiz.question[idQuestion][type][label].options.push({
      name :'' 
    });
  }

  addOpt(idQuestion,type){

    idQuestion = idQuestion -1;

    if(type == 'itemCheckMult'){
      this.quiz.question[idQuestion][type].push({
          label : '',
          options : [{ name : ''}]
      });
    } else {
      this.quiz.question[idQuestion][type].push({
        name :'' 
      });
    }

  }
  removeOpt(idQuestion,type,i) {

    idQuestion = idQuestion -1;

    this.quiz.question[idQuestion][type].splice(i, 1);

  }


}
