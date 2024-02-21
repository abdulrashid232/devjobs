import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search/search.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
