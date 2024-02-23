import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchBarComponent implements OnInit{

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.theme$.subscribe((isDark: boolean) => {
    
      const div = document.querySelectorAll('.darkContainer')
      div.forEach((item) => {
        item.classList.toggle('dark-theme', isDark);
      });

    });
  }
  search: string = '';
  searchJobs() {
    console.log(this.search);
  }
  clearSearch() {
    this.search = '';
  }
}
