import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './layout/pages/news/news.component';
import { BookComponent } from './layout/components/book/book.component';
import { BookFormComponent } from './layout/components/book-form/book-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path:'books', component: BookComponent},
  {path: 'news', component: NewsComponent},
  {path: 'books/create', component: BookFormComponent},
  {path: 'books/book/:id', component: BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
