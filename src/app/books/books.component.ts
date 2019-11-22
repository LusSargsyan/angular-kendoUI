import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";
import {IBook} from "../interfaces/IBook";


@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {

    isOpenModal = false;
    isLoading = false;
    books: IBook;
    editableItem: IBook;
    columns: any[] = [
        {field: "bookName", title: "Book Name"},
        {field: "author", title: "Author"},
        {field: "description", title: "Description"},
        {field: "genre", title: "Genre"},
    ];

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.isLoading = true;
        let db = this.bookService.get();
        db.subscribe((data: IBook) => {
            this.books = data;
            this.isLoading = false;
        });
    }

    open() {
        this.isOpenModal = true;
        this.editableItem = null;
    }

    close() {
        this.isOpenModal = false;
    }

    removeItem(key: string) {
        this.bookService.remove(key);
    }

    editItem(item: IBook) {
        this.editableItem = item;
        this.isOpenModal = true;
    }
}
