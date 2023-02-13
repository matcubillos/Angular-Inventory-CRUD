import { Injectable } from '@angular/core';
import { Book } from '../../models/book/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { IBookServiceResponse } from '../../intefaces/IBookServiceResponse';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookApiURL: string = 'http://localhost:8080/api/v1/book'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookApiURL)
    .pipe( catchError( err => {
      this.router.navigate(['/books'])
      console.log(err.error.message);
      return throwError(() => new Error(err))
    } ))
  };
  getNewBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookApiURL + '/new-books')
  }

  createBook(book: Book): Observable<IBookServiceResponse> {
    return this.http.post<IBookServiceResponse>(this.bookApiURL, book, { headers: this.httpHeaders })
    .pipe ( catchError(err => {
      this.router.navigate(['/books'])
      console.log(err.error.Message);
      return throwError(() => new Error(err))
    }) )
  }

  getBook(id: Book['id']): Observable<Book> {
    return this.http.get<Book>(this.bookApiURL + '/' + id)
    .pipe( catchError( err => {
      this.router.navigate(['/books'])
      console.log(err.error.Message);
      return throwError(() => new Error(err))
    } ))
  }

  updateBook(book: Book): Observable<IBookServiceResponse> {
    return this.http.put<IBookServiceResponse>(`${this.bookApiURL}/${book.id}`, book, {headers: this.httpHeaders})
    .pipe( catchError( err => {
      this.router.navigate(['/books'])
      console.log(err.error.message);
      return throwError(() => new Error(err))
    } ))
  }

  deleteBook(id: Book['id']): Observable<Book> {
    return this.http.delete<Book>(this.bookApiURL + '/' + id, {headers: this.httpHeaders})
    .pipe( catchError( err => {
      this.router.navigate(['/books'])
      console.log(err.error.message);
      return throwError(() => new Error(err))
    } ))
  }
}


