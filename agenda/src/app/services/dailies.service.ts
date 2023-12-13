import { Injectable } from '@angular/core';
import { Daily } from '../models/daily.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailiesService {
  private myDailies: Daily[] = [
  ]

  // Retiene la data "reactiva": BehaviorSubject
  private todayDaily = new BehaviorSubject<Daily>({
    Date: '',
    notes: '',
    emotion: ''
  })

  // Observable
  todayDaily$ = this.todayDaily.asObservable()

  constructor() { }

  getDailies() {
    return this.myDailies
  }

  addDaily(daily: Daily): void {
    this.myDailies.unshift(daily)

    // Modificación del BehaviorSubject (todayDaily)
    this.todayDaily.next(daily)
  }

}