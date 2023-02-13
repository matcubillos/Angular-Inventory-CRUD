import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../../core/models/book/book';
import { BookService } from '../../../core/services/book/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  newBooks: Book[] = []
  subscription: Subscription

  constructor(private bookSvc: BookService) {
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.bookSvc.getNewBooks().subscribe(
      (res) => {
        this.newBooks = res
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
