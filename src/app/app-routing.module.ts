import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { FictionComponent } from './fiction/fiction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThrillerComponent } from './thriller/thriller.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BookComponent},
  {path: 'fiction', component: FictionComponent},
  {path: 'thriller', component: ThrillerComponent},
  {path: 'book-details/:id', component:BookDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
