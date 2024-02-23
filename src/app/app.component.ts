import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devjobs';
  isDarkTheme: boolean = false;

  
  
  constructor(private router:Router, private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.theme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    });
  }

  navigateToJobs(): void {
    this.router.navigate(['']);
  }

  toggleTheme(): void {
    // Toggle the theme and update DataService
    this.isDarkTheme = !this.isDarkTheme;
    this.dataService.setTheme(this.isDarkTheme);
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
