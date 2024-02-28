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
  // selectedJob: any;
  visibleJobs: any[];
  jobsPerPage: number = 12;
  showLoadMoreButton: boolean = true;

  filteredJobs: any[] = [];


  constructor(private router: Router,private dataService: DataService) {}




  ngOnInit(): void {
    this.dataService.fetchData().subscribe((result) => {
      this.jobs = result;
      this.visibleJobs = this.jobs.slice(0, this.jobsPerPage);

      this.filteredJobs = this.visibleJobs;
    });
    this.dataService.setData(this.jobs);

  
    this.dataService.theme$.subscribe((isDark: boolean) => {
    
      
      let mainDiv = document.querySelectorAll('.JobsContainer');
      mainDiv.forEach((item) => {
        item.classList.toggle('dark-theme', isDark);
      });
      let gridDiv = document.querySelectorAll('.grid-item')
      gridDiv.forEach((item) => {
        item.classList.toggle('dark-theme', isDark);
      });

    });
  }


  
  viewJob = false

  jobDetails( job: any) {
    this.router.navigate(['/job']);
    this.viewJob = true;
    // this.selectedJob = job;

    // console.log(this.selectedJob);

    this.dataService.setSelectedJob(job);
    // console.log(this.dataService.selectedJob$);
  };

  loadMore() {
    const startIndex = this.filteredJobs.length;
    const remainingJobs = this.jobs.length - startIndex;
    const endIndex = this.jobsPerPage + remainingJobs;

    console.log('startIndex:', startIndex);
    console.log('endIndex:', endIndex);
    
    if (endIndex <= this.jobs.length) {
      this.filteredJobs = this.filteredJobs.concat(this.jobs.slice(startIndex, endIndex));
      console.log('Visible Jobs:', this.filteredJobs);
     
    }
    this.showLoadMoreButton = endIndex < this.jobs.length;
  }
  
  noJobsFound = false;

  onSearch(searchParams: any) {
    const { searchTextCompanies, searchTextLocation, fullTimeOnly } = searchParams;
  
    this.filteredJobs = this.jobs.filter(job => {
      const companyOrPositionMatch = searchTextCompanies ? job.company.toLowerCase().includes(searchTextCompanies.toLowerCase()) || job.position.toLowerCase().includes(searchTextCompanies.toLowerCase()) : true;
      const locationMatch = searchTextLocation ? job.location.toLowerCase().includes(searchTextLocation.toLowerCase()) : true;
      const fullTimeMatch = !fullTimeOnly || job.contract.toLowerCase() === 'full time';

      if(this.filteredJobs.length === 0) {
        console.log('No jobs found');
        this.noJobsFound = true;
      }
  
      return companyOrPositionMatch && locationMatch && fullTimeMatch;
    });
  }
  

 
 
}
