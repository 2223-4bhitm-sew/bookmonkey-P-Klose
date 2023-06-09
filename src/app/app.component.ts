import { Component } from '@angular/core';
import {Book} from "./shared/book";

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-monkey-pk';
  book: Book | null = null;
}
