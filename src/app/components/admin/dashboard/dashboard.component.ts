import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { ResponseService } from '../../../services/response.service';
//import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
 
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[];
  dataSource;
  userQuiestion;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  showPop = 'none';
  faSms = faSms;
  response;
  loading = true;
  expandedElement;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _responseService:ResponseService,
  ) { 

    this.activatedRoute.params.subscribe( data => {

      this._responseService.getQuizAllResponse(data['id']).subscribe( (resp:any) => {

      if(resp.length > 0){
        this.displayedColumns = Object.keys(resp[0].user);
        this.displayedColumns.push('state','creation_date','ver');
        this.expandedElement = this.displayedColumns;        
        this.dataSource = new MatTableDataSource<any>(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        console.log(this.dataSource);
        this.response = resp;  
      }
        this.loading = false;
      });

    });

  }

  

  ngOnInit(): void {

    
    let stackedLine = new Chart('stackedLine', {
      type: 'line',
      data: { 
        labels: ['2020-07-02', '2020-07-03', '2020-07-04', '2020-07-05', '2020-07-06', '2020-07-07', '2020-07-08'],
        datasets: [{
          label: 'Encuesta de Seguimiento',
          data: [ 28,32,53,8,82,53,7],
          backgroundColor: 'rgb(246, 98, 132)',
					borderColor: 'rgb(246, 98, 132)',
					fill: false,
					borderDash: [5, 5],
					pointRadius: 9,
					pointHoverRadius: 12,
        },{
          label: 'Encuesta de Satisfacción',
          data: [ 9,25,92,10,29,72,9],
					fill: false,
					borderDash: [5, 5],
					pointRadius: 9,
					pointHoverRadius: 12,
        }
      ],
      },
      options: {
        scales: {
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Numero de Personas'
						}
					}]
				},
      }
    });


    let myPieChart = new Chart('myPieChart', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
              'rgb(60, 202, 189)',
              'rgb(246, 98, 132)',
              'rgba(204, 81, 234, 0.9)'
            ],
        }],
    
        labels: [
            'Promotores (1-2)',
            'Pasivos (3)',
            'Detractores (4-5)'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


    let myPieChart2 = new Chart('myPieChart2', {
      type: 'pie',
      data: {
        datasets: [{
            data: [80, 60, 9,45,12],
            backgroundColor: [
              'rgb(60, 202, 189)',
              'rgb(246, 98, 132)',
              'rgba(204, 81, 234, 0.9)',
              'rgb(255, 207, 96)',
              'rgb(96, 166, 255)'
            ],
        }],
    
        labels: [
            'Muy bajo esfuerzo',
            'Bajo esfuerzo​',
            'Neutral',
            'Alto Esfuerzo​',
            'Muy Alto Esfuerzo​'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });

    let myPieChart3 = new Chart('myPieChart3', {
      type: 'polarArea',
      data: {
        datasets: [{
            data: [80, 60, 9,45,12],
            backgroundColor: [
              'rgb(60, 202, 189)',
              'rgb(246, 98, 132)',
              'rgba(204, 81, 234, 0.9)',
              'rgb(255, 207, 96)',
              'rgb(96, 166, 255)'
            ],
        }],
    
        labels: [
            'Muy bajo índice de defensa',
            'Bajo índice de defensa',
            'Neutral',
            'Alto índice de defensa​​',
            'Muy Alto índice de defensa'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


    let myPieChart4 = new Chart('myPieChart4', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10,5],
            backgroundColor: [
              'rgb(255, 230, 41)'
            ],
        }],
        labels: [
          'Bueno',
          'Malo'
      ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
        display: false
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


    let myPieChart5 = new Chart('myPieChart5', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
              'rgb(60, 202, 189)',
              'rgb(246, 98, 132)',
              'rgba(204, 81, 234, 0.9)'
            ],
        }],
    
        labels: [
            'Promotores (1-2)',
            'Pasivos (3)',
            'Detractores (4-5)'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


    let myPieChart6 = new Chart('myPieChart6', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [80, 40, 70],
            backgroundColor: [
              'rgb(60, 202, 189)',
              'rgb(246, 98, 132)',
              'rgba(204, 81, 234, 0.9)'
            ],
        }],
    
        labels: [
            'Promotores (1-2)',
            'Pasivos (3)',
            'Detractores (4-5)'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


    // let myPieChart7 = new Chart('myPieChart7', {
    //   type: 'doughnut',
    //   data: {
    //     datasets: [{
    //         data: [4,10],
    //         backgroundColor: [
    //           'rgb(255, 230, 41)'
    //         ],
    //     }],
    //     labels: [
    //       '4',
    //       '10'
    //     ]
    // },
    // options: {
    //   responsive: true,
    //   legend: { 
    //     position: 'left',
    //     display: false
    //   },
    //   title: {
    //     display: false,
    //     text: 'Índice de Satisfacción'
    //   },
    //   animation: {
    //     animateScale: true,
    //     animateRotate: true
    //   }
    // }
      
    // });

    // let myPieChart8 = new Chart('myPieChart8', {
    //   type: 'doughnut',
    //   data: {
    //     datasets: [{
    //         data: [4,10],
    //         backgroundColor: [
    //           'rgb(255, 230, 41)'
    //         ],
    //     }],
    //     labels: [
    //       '4',
    //       '10'
    //     ]
    // },
    // options: {
    //   responsive: true,
    //   legend: { 
    //     position: 'left',
    //     display: false
    //   },
    //   title: {
    //     display: false,
    //     text: 'Índice de Satisfacción'
    //   },
    //   animation: {
    //     animateScale: true,
    //     animateRotate: true
    //   }
    // }
      
    // });


  }


  openQuiz(id,type){

    if(id){
      this._responseService.getResponse(id).subscribe((data:any)=>{
        this.userQuiestion = data.questions;
      });
    }

    this.showPop = type;
  }

  exportData( dataResponse ){
    //console.log(dataResponse);

    let data = [];
    let edas = {};
    let titles_user = {};
    let titles_question = {};
    let titles_items = {};
    
    for (let index = 0; index < dataResponse.length; index++) {
      const quest = {};
      

      let user = this.rebuildUserExcel('A',index,dataResponse[index].user,titles_user);
          user = user.data;
      const allRespon = dataResponse[index].questions;

      //Object.assign(quest,dataResponse[index].user);

       for (let b = 0; b < dataResponse[index].questions.length; b++) {
         let response:any = this.rebuildQuiestionsExcel("B",index, b, allRespon[b],titles_question );   
             edas = Object.assign(response,user);

             if(response.typeDesign == "check_label" || response.typeDesign == "table" || response.typeDesign == "multiple_choice" ){
                for (let m = 0; m < response.items.length; m++) {
                  const datItem = this.concatItemsExcel("C",response.typeDesign,response.items[m],index,b,m,titles_items);      
                  Object.assign(edas,datItem);
                }
             }

         
            // switch (response.typeDesign) {
            //   case "check_label":

            //      for (let m = 0; m < response.items.length; m++) {
            //       const datItem = this.concatItemsExcel("C",response.typeDesign,response.items[m],index,b,m,titles_items);      
            //       Object.assign(edas,datItem);
            //      }
       
            //     break;
            //   case "table":

            //     for (let m = 0; m < response.items.length; m++) {
            //       const datItem = this.concatItemsExcel("C",response.typeDesign,response.items[m],index,b,m,titles_items);      
            //       Object.assign(edas,datItem);
            //     }
        
            //     break;
            //   case "multiple_choice":

            //     for (let m = 0; m < response.items.length; m++) {
            //       const datItem = this.concatItemsExcel("C",response.typeDesign,response.items[m],index,b,m,titles_items);      
            //       Object.assign(edas,datItem);
            //     }
          
            //     break;
            
            //   default:
                
            //     break;
            // }
          
          delete response.items;
          delete response.typeDesign;
          delete response.mandatory;
          delete response.value;
          delete response.maximum_responses;
          delete response.minimal_responses;

          data.push(edas);

       }
      
    }

   
    console.log(data);

    let header = [];

    for (const da in titles_question) {
      header.push(titles_question[da]);
    }

    for (const da in titles_user) {
      header.push(titles_user[da]);
    }

    for (const da in titles_items) {
      header.push(titles_items[da]);
    }

    console.log(header);

    let options = { 
      headers: header
    };
 
     new Angular5Csv(data, 'My Report');
  }

  concatItemsExcel( order,typeDesign,item,idRegistro,idQuestion,idItem,title ){
    
    let concat = {};
    let name = {};

    if(typeDesign != "multiple_choice"){

      let label = { };
      label[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+'_0_0_label'] = item.label;
      if(idItem == 0){
        title[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+'_0_0_label'] = item.label;
      }
      let options = item.options;

      for (let f = 0; f < options.length; f++) {
        if(options[f].check){ 
          name[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_"+f+"_name"] = options[f].name;     
          if(idItem == 0){
            title[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_"+f+"_name"] = options[f].name;     
          }
        } else {
          name[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_"+f+"_name"] = '';
          if(idItem == 0){
            title[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_"+f+"_name"] = options[f].name;   
          }
        }
        concat = Object.assign(name,label);
      }

    } else {

        if(item.check){ 
          name[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_name"] = item.name; 
          if(idItem == 0){   
            title[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_name"] = item.name;   
          } 
        } else {
          name[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_name"] = '';
          if(idItem == 0){
            title[order+'-'+idRegistro+'_'+idQuestion+'_'+idItem+"_name"] = item.name;   
          }
        }
        concat = Object.assign(name);

    }

     return concat;

  }

  rebuildQuiestionsExcel( order, idRegistro, id, question, title ){

    question[order+'-'+idRegistro+'_'+id+'_description'] = question.description;
    question[order+'-'+idRegistro+'_'+id+'_typeDesign'] = question.typeDesign;
    question[order+'-'+idRegistro+'_'+id+'_mandatory'] = question.mandatory;
    question[order+'-'+idRegistro+'_'+id+'_value'] = question.value;
    question[order+'-'+idRegistro+'_'+id+'_0_id'] = question.id;

    if(id == 0 && idRegistro == 0 ){
      title[order+'-'+idRegistro+'_'+id+'_description'] = "DESCRIPCION";
      title[order+'-'+idRegistro+'_'+id+'_typeDesign'] = "DISEÑO";
      title[order+'-'+idRegistro+'_'+id+'_mandatory'] = "OBLIGATORIA";
      title[order+'-'+idRegistro+'_'+id+'_value'] = "VALOR PREGUNTA ABIERTA";
      title[order+'-'+idRegistro+'_'+id+'_0_id'] = "ID";
    }


    //question[id+'_0_0_0_0_description'] = question.description;
    delete question.id;
    delete question.description;
    delete question.colors;
    delete question.repeat;

    return question;

  }

  rebuildUserExcel( order, id, user, titles ){

    let indice = Object.keys(user);
      
    for (let index = 0; index < indice.length; index++) {
      user[order+"-"+id+"_"+indice[index]] = user[indice[index]];
      if(id == 0){
        titles[order+"-"+id+"_"+indice[index]] = indice[index];
      }
      delete user[indice[index]];
    }


    return { data: user };
    
  }

  togglePop(event: any,type){
    const hasClass = event.target.classList.contains('modal');

    if(hasClass){
      this.openQuiz(null,type);
    }
  }

}