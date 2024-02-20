import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  jobs:any; 

  constructor() { }

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
}
