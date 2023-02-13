import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book/book';
import { BookService } from '../../../core/services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  public book: Book = new Book();

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadBook();
  }

  loadBook(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if (id) {
          this.bookService.getBook(id)
          .subscribe( book => this.book = book )
        }
      }
    )
  }

  public createBook(): void {
    this.bookService.createBook(this.book).subscribe(
      res => {
        this.router.navigate(['/books']);
        Swal.fire('Book added', `Author: ${res.Book.author}, Title: ${res.Book.title}`,  'success');
      }
    )
    console.log(this.book);
  }

  updateBookForm() {
    this.bookService.updateBook(this.book)
    .subscribe( res => {
      this.router.navigate(['/books'])
      Swal.fire('Book has been updated', `Author: ${res.Book.author}, Title: ${res.Book.title}`,  'success');
    } )
  }


}
