import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchBarComponent implements OnInit{

  searchTextCompanies: string = '';
  searchTextLocation: string = '';
  fullTimeOnly: boolean = false;

  @Output() searchClicked: EventEmitter<any> = new EventEmitter();

  onSearch() {
    this.searchClicked.emit({
      searchTextCompanies: this.searchTextCompanies,
      searchTextLocation: this.searchTextLocation,
      fullTimeOnly: this.fullTimeOnly
    });
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.theme$.subscribe((isDark: boolean) => {
    
      const div = document.querySelectorAll('.darkContainer')
      div.forEach((item) => {
        item.classList.toggle('dark-theme', isDark);
      });

    });
  }



}
