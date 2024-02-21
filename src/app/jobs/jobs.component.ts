import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  
  jobs: any[]; 
  selectedJobId: any;

  constructor(private router: Router,private dataService: DataService) {}

  // ngOnInit() {
  //   this.loadJobs();
  // }

  // loadJobs() {
  //   fetch('./assets/data.json')
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(jobs => {
  //     this.jobs = jobs;
  //   })
  //   .catch(error => {
  //     console.error('Error While fetching data:', error);
  //   });
  // }

 

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((jobs) => {
  //     this.jobs = jobs;
  //   });
  // }

  // data: any;


  ngOnInit(): void {
    this.dataService.fetchData().subscribe((result) => {
      this.jobs = result;
    });
    this.dataService.setData(this.jobs);
  }


  
  viewJob = false

  jobDetails( job: any) {
    this.router.navigate(['/job']);
    this.viewJob = true;
    // this.selectedJobId = job.id

    this.dataService.setSelectedJob(job);
    console.log(this.dataService.selectedJob$);
  };

 
}
