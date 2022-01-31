import { Component, OnInit } from '@angular/core';
import { Tabs } from '../models/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tabs:Tabs[] = []
  constructor() {
    this.tabs = [
      {
        label: 'All Books', route: 'books', active: true
      },
      {
        label: 'Fiction', route: 'fiction', active: true
      },
      {
        label: 'Thriller', route: 'thriller', active: false
      }
    ]
  }

  ngOnInit(): void {
  }

}
