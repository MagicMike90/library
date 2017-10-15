import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, Headers, RequestMethod, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import { Book } from '../models/book.model';

import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/toPromise";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class BookService {
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes';  // URL to web api
  private serverApi = 'books';


  constructor(private http: Http,
    @Inject(REST_URL) private url: string) { }

  getAllBooks(): Promise<Book[]> {
    const endpoint =  this.url + this.serverApi;
    return this.http.get(endpoint)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // public getAllBooks(): Observable<Book[]> {
  //   return this.sendRequest(RequestMethod.Get, this.serverApi);
  // }

  // public deleteBook(BookId: string) {
  //   let URI = `${this.serverApi}/bucketBook/${BookId}`;
  //   let headers = new Headers;
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.delete(URI, { headers: headers })
  //     .map(res => res.json());
  // }

  // public addBook(Book: Book) {
  //   let URI = `${this.serverApi}/bucketBook/`;
  //   let headers = new Headers;
  //   let body = JSON.stringify({ title: Book.title, description: Book.description, category: Book.category });
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post(URI, body, { headers: headers })
  //     .map(res => res.json());
  // }

  private sendRequest(verb: RequestMethod,
    url: string, body?: Book): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.set("Access-Key", "<secret>");
    // headers.set("Application-Names", ["exampleApp", "proAngular"]);

    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body,
      headers: headers
    }))
      //.delay(5000)
      .map(function (response) {
        return response.json();
      })
      .catch(function (error) {
        return Promise.reject(`Network Error: ${error.statusText} (${error.status})`);
      })
  }
}