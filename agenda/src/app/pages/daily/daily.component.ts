import { Component } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent {
  myDailies: Daily[] = []

  constructor(private dailiesService: DailiesService) {
    this.myDailies = this.dailiesService.getDailies()
    console.log("dailies ",this.myDailies);
  }

  handlerCompletedDaily(daily: Daily): void {
    this.dailiesService.addDaily(daily)
  }
}
