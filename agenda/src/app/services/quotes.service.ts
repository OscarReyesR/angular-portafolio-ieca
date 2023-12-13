import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getAllQuotes() {
    return this.http.get<Quote[]>('https://api.quotable.io/quotes/random?limit=50')
  }
}
