import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private _baseurl: string = 'http://localhost:8081/book-api/books'
  constructor(private http: HttpClient) { }

  getAllBooks = ():Observable<Book[]> => {
    return this.http.get<Book[]>(this._baseurl);
  }

  getById = (bookId: number): Observable<Book> => {
    let url = this._baseurl + "/id/" + bookId;
    let bookObs:Observable<Book> = this.http.get<Book>(url);
    return bookObs;
  }
}
