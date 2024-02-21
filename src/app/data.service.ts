// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = './assets/data.json'; 

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  private dataSubject = new BehaviorSubject<any[]>([]);
  public data$ = this.dataSubject.asObservable();

  private selectedJobSubject = new BehaviorSubject<any>(null);
  public selectedJob$ = this.selectedJobSubject.asObservable();

  setData(data: any[]): void {
    this.dataSubject.next(data);
  }

  setSelectedJob(job: any): void {
    this.selectedJobSubject.next(job);
  }
}
