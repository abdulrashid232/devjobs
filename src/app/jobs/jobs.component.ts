import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  
  jobs: any; 
  // selectedJob: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    fetch('./assets/data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jobs => {
      this.jobs = jobs;
    })
    .catch(error => {
      console.error('Error While fetching data:', error);
    });
  }

 

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((jobs) => {
  //     this.jobs = jobs;
  //   });
  // }


  
  viewJob = false
  jobDetails( job: any) {
    // this.selectedJob = job;
    // this.jobSelected.emit(jobId);
    this.router.navigate(['/job']);
    this.viewJob = true;  
  };

 
}
