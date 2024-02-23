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
  selectedJob: any;
  constructor(private dataService: DataService) {}
 

  ngOnInit(): void {
    
    this.dataService.data$.subscribe((jobs) => {
      this.jobs = jobs;
    });
    this.dataService.selectedJob$.subscribe((job) => {
      this.selectedJob = job;
    });

    this.dataService.theme$.subscribe((isDark: boolean) => {
    
      const div = document.querySelectorAll('.darkContainer')
      div.forEach((item) => {
        item.classList.toggle('dark-theme', isDark);
      });

    });
  }
  buttonColor: string = '#F4F6F8';
}
