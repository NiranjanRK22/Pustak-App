import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public books: any = []
  public grandTotal: number=0;
  displayedColumns: string[] = ['position', 'name', 'image', 'price', 'quantity', 'total'];

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getBooks().subscribe(responseData =>  {
         this.books = responseData;
         this.grandTotal = this._cartService.getTotalPrice();
         console.log(this.books)
    })
  }

}
