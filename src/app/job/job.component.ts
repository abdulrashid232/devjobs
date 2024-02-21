import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  jobs: any[];

  constructor(private dataService: DataService) {}
  selectedJob: any;

  ngOnInit(): void {
    
    this.dataService.data$.subscribe((jobs) => {
      this.jobs = jobs;
    });
    this.dataService.selectedJob$.subscribe((job) => {
      this.selectedJob = job;
    });
  }
}
