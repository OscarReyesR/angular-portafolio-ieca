import { Component,OnInit, Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Daily } from 'src/app/models/daily.model';
import { DailiesService } from 'src/app/services/dailies.service';
import { emotionsCollection } from 'src/app/utils/constants';
@Component({
  selector: 'app-active-daily-card',
  templateUrl: './active-card.component.html',
  styleUrls: ['./active-card.component.scss']
})
export class ActiveCardComponent implements OnInit {

  today: Date = new Date()
  formDaily!: FormGroup
  emotionsCollection = emotionsCollection

  todayDaily: Daily = {
    Date: '',
    emotion: '',
    notes: ''
  }

  @Output('nuevoDaily') savedDaily = new EventEmitter<Daily>()

  constructor(private formBuilder: FormBuilder, private dailiesService: DailiesService) {
    this.buildForm()
  }

  ngOnInit(): void {
      // this.noteField!.valueChanges.subscribe((value) => {
      //   console.log(value)
      // })


      this.dailiesService.todayDaily$.subscribe(newDaily =>
        this.todayDaily = newDaily
      )
  }

  private buildForm() {
    this.formDaily = this.formBuilder.group({
      emotion: ['', [Validators.required]],
      notes: ['', [Validators.required, Validators.minLength(45), Validators.maxLength(85)]],
      Date: [this.today.toString()]
    })
  }

  get noteField() {
    return this.formDaily.get('notes')
  }

  get emotionField() {
    return this.formDaily.get('emotion')
  }

  get dateField() {
    return this.formDaily.get("date")
  }

  checkEmotion(): boolean {
    return this.emotionField?.value === ''
  }

  changeEmotion() {
    this.emotionField?.setValue('')
  }

  saveDaily() {
    console.log("evento ",this.formDaily.value as Daily);
    if (this.todayDaily.Date === this.today.toString()) {
      alert("Ya subiste Daily")
    } else {
      this.savedDaily.emit(this.formDaily.value as Daily)
    }

  }
}
