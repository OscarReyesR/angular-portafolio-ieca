import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor(private quoteService: QuotesService) {

  }

  ngOnInit(): void {
    this.quoteService.getAllQuotes()
    .subscribe(data => {
      console.log(data)
    })
}
}
