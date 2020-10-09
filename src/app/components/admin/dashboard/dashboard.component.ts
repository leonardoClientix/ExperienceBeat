import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { ResponseService } from '../../../services/response.service';
import { UsersService } from '../../../services/users.service';
//import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
 
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { useAnimation } from '@angular/animations';

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
    private _usersService:UsersService,
    private datePipe: DatePipe
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

        for (let index = 0; index < resp.length; index++) {
          let indice = Object.keys(resp[index].user);
          this._usersService.getUserInput(indice[0],resp[index].user[indice[0]]).subscribe((us:any) =>{
            if(us[0]){
              delete us[0].configQuiz;
              resp[index].user = us[0];
            } else {
              resp[index].user.nodatabase = true;
            }
          });
        }

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

    console.log(dataResponse);
    
    let dataExcel = [];
    let titles = ["Fecha de Creación"];
    let cont = 1;

    for (let index = 0; index < dataResponse.length; index++) {

      let dataUser = {};
      let creationDate:any = {}
      const ordered = {};
      

      // ORDENAR Y AGREGAR DATOS DE USUARIO 
      if(dataResponse[index].user.nodatabase == true){
        delete dataResponse[index];
      }

      if(dataResponse[index]){

          creationDate['creation_date'] = this.datePipe.transform(new Date(dataResponse[index].creation_date),"yyyy-MM-dd , h:mma");
          Object.assign(dataUser,creationDate);

          Object.keys(dataResponse[index].user).sort().forEach(function(key) {
            
              if(titles.indexOf(key) == -1){
                titles.push(key);
              }   
              ordered[key] = dataResponse[index].user[key];
          });
              Object.assign(dataUser,ordered);
            

            //PREGUNTAS
        
            const allRespon = dataResponse[index].questions;
            const responses = {}; 
            for (let b = 0; b < allRespon.length; b++) {

                let it = allRespon[b].items;
                if(it){
                  for (let c = 0; c < it.length; c++) {
                    
                    if(c == 0){
                      if(cont == 2){
                        let descript = allRespon[b].description;
                        titles.push(descript.replace(/,/g," "));
                      }     
                      responses['B_'+b+'_'+c+'_0'] = '';  
                    } 
                    if(cont == 2){
                      let optTit = it[c].name;
                      titles.push(optTit.replace(/,/g," "));
                      if(it[c].type == "other"){
                        titles.push('Valor');
                      }
                    }

                    if(it[c].check){   
                      let opt = it[c].name;
                      responses['B_'+b+'_'+c] = opt.replace(/,/g," ");
                      if(it[c].type == "other"){
                          let valOther = it[c].value;
                          responses['B_'+b+'_'+c+'_1'] = valOther.replace(/,/g," ");
                      }
                    } else {
                      responses['B_'+b+'_'+c] = '';
                      if(it[c].type == "other"){
                        responses['B_'+b+'_'+c+'_2'] = '';
                      }
                    }      
                    Object.assign(dataUser,responses);
                  }
                }

            }
            dataExcel.push(dataUser);

       }

       cont++;

    }
 
    let options = { 
       headers: titles
    };

    new Angular5Csv(dataExcel, 'My Report',options);

  }

  togglePop(event: any,type){
    const hasClass = event.target.classList.contains('modal');

    if(hasClass){
      this.openQuiz(null,type);
    }
  }

}