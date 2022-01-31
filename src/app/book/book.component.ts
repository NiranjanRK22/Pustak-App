import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books!:Book[];
  constructor(private _bookService: BookService, private _router: Router) { }

  ngOnInit(): void {
    this._bookService.getAllBooks().subscribe({
      next: data => {
        this.books = data;
        console.log(data)
      },
      error: error => console.log(error),
      complete:() => console.log("completed")
    })
  }

  onView = (book: Book) => {
    console.log(book);
    this._router.navigate(['/book-details', book.bookId]);
  }

}
