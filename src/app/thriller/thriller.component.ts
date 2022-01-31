import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {

  books!:Book[];
  category: string = "Thriller";
  constructor(private _categoryService: CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this._categoryService.getBooksByCategory(this.category).subscribe({
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
