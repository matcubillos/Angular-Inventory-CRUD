import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../../core/models/book/book';
import { BookService } from '../../../core/services/book/book.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  books: Book[] = []
  bookSubscription: Subscription

  constructor(private bookSvc: BookService) { 
    this.bookSubscription = new Subscription()
  }

  ngOnInit(): void {
    this.bookSubscription = this.bookSvc.getBooks().subscribe(
      (res) => {
        this.books = res
      }
    );
  }

  deleteBookForm(book: Book): void {
    Swal.fire({
      title: 'Delete Book',
      text: `<${book.title}>, from <${book.author}>?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookSvc.deleteBook(book.id)
        .subscribe( res => {
          this.books = this.books.filter(i => i !== book)
        } )

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe()
  }

}
