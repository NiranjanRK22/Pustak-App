import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _baseurl: string = 'http://localhost:8081/book-api/books/category'
  constructor(private http: HttpClient) { }

  getBooksByCategory = (category: string):Observable<Book[]> => {
    let url = this._baseurl + "/" + category;
    let bookObs:Observable<Book[]> = this.http.get<Book[]>(url);
    return bookObs;
  }
}
