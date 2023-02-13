import { Book } from '../models/book/book';
export interface IBookServiceResponse {
    Message: string;
    Book:Book;
}