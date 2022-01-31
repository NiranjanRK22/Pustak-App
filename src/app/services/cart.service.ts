import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public bookList = new BehaviorSubject<any>([]);
  constructor() { }

  getBooks() {
    return this.bookList.asObservable();
  }

  setBooks(book: any) {
    this.cartItemList.push(...book);
    this.bookList.next(book);    
  }

  addToCart(book: any) {
    this.cartItemList.push(book);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((book: any) => {
      grandTotal += book.total;
    })
    return grandTotal;
  }
}
