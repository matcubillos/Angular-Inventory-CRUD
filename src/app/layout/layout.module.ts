//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//components pers
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { NewsComponent } from './pages/news/news.component';
//library imports
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NewsComponent,
    BookComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    TableModule,
    RouterModule, 
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    NewsComponent,
    BookComponent,
    BookFormComponent
  ]
})
export class LayoutModule { }
