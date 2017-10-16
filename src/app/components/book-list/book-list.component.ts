import { Component,ViewChild, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = new Array<Book>();

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // this.bookService.getAllBooks().subscribe(data => this.books = data);
    this.bookService.getAllBooks().then(data => this.books = data);
  }

}
