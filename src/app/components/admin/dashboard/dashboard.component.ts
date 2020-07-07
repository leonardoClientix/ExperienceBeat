import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'num_question', 'category','profile','start_date', 'end_date','quiz'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  showPop = 'none';
  faSms = faSms;


  constructor() { }

  

  ngOnInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

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


    let myPieChart7 = new Chart('myPieChart7', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [4,10],
            backgroundColor: [
              'rgb(255, 230, 41)'
            ],
        }],
        labels: [
          '4',
          '10'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
        display: false
      },
      title: {
        display: false,
        text: 'Índice de Satisfacción'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });

    let myPieChart8 = new Chart('myPieChart8', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [4,10],
            backgroundColor: [
              'rgb(255, 230, 41)'
            ],
        }],
        labels: [
          '4',
          '10'
        ]
    },
    options: {
      responsive: true,
      legend: { 
        position: 'left',
        display: false
      },
      title: {
        display: false,
        text: 'Índice de Satisfacción'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
      
    });


  }


  openQuiz(item,type){
    console.log(item);
    this.showPop = type;
  }

  togglePop(event: any,type){
    const hasClass = event.target.classList.contains('modal');

    if(hasClass){
      this.openQuiz(null,type);
    }
  }

}

export interface PeriodicElement {
  name: string; 
  num_question: number;
  category: string;
  profile: string;
  position: number;
  start_date: string;
  end_date: string;
  quiz: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1},
  {position: 1, name: 'Leonardo Hernandez', num_question: 23, category: 'MECE', profile: 'Activador de Marca', start_date: '2020-07-04', end_date: '2020-07-04', quiz: 1}
];