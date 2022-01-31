import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId!: number;
  book!: Book;
  constructor(private _activatedRoute: ActivatedRoute, private _bookService: BookService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map => {
      let id = map.get("id");
      if (id) 
        this.bookId = parseInt(id);
    });
    this._bookService.getById(this.bookId).subscribe(
      data => this.book = data
    )
  }

  addBookToCart(item: any) {
    this._cartService.addToCart(item);
  }

}
