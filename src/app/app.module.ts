import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';



@NgModule({
  declarations: [ 
    AppComponent,
    SearchBarComponent,
    JobsComponent,
    JobComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
