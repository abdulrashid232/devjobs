import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  
  jobs: any[]; 
  selectedJob: any;
  visibleJobs: any[];
  jobsPerPage: number = 12;
  showLoadMoreButton: boolean = true;

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



  ngOnInit(): void {
    this.dataService.fetchData().subscribe((result) => {
      this.jobs = result;
      this.visibleJobs = this.jobs.slice(0, this.jobsPerPage);
    });
    // this.dataService.setData(this.jobs);
  }


  
  viewJob = false

  jobDetails( job: any) {
    // this.router.navigate(['/job']);
    this.viewJob = true;
    this.selectedJob = job;

    console.log(this.selectedJob);

    // this.dataService.setSelectedJob(job);
    // console.log(this.dataService.selectedJob$);
  };

  loadMore() {
    const startIndex = this.visibleJobs.length;
    const remainingJobs = this.jobs.length - startIndex;
    const endIndex = this.jobsPerPage + remainingJobs;

    console.log('startIndex:', startIndex);
    console.log('endIndex:', endIndex);
    
    if (endIndex <= this.jobs.length) {
      this.visibleJobs = this.visibleJobs.concat(this.jobs.slice(startIndex, endIndex));
      console.log('Visible Jobs:', this.visibleJobs);
     
    }
    this.showLoadMoreButton = endIndex < this.jobs.length;
  }
 
 
}
