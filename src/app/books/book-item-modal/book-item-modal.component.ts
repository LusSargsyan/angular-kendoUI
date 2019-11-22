import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookService} from "../book.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {IBook} from "../../interfaces/IBook";

@Component({
    selector: 'app-book-item-modal',
    templateUrl: './book-item-modal.component.html',
    styleUrls: ['./book-item-modal.component.css']
})
export class BookItemModalComponent implements OnInit {

    @Output() onCloseModal = new EventEmitter();
    @Input() editableItem: IBook;
    bookForm: FormGroup;
    genres: Array = [
        'Science Fiction',
        'Fantasy',
        'Drama',
        'Novel',
        'Poetry',
        'Biography',
        'Tragedy',
        'Fairy Tail'
    ];
    maxDate: Date = new Date();

    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.bookForm = new FormGroup({
            'bookName': new FormControl(this.editableItem ? this.editableItem.bookName : null, Validators.required),
            'author': new FormControl(this.editableItem ? this.editableItem.author : null, Validators.required),
            'description': new FormControl(this.editableItem ? this.editableItem.description : null, [Validators.required, Validators.maxLength(180)]),
            'genre': new FormControl(this.editableItem ? this.editableItem.genre : null, Validators.required),
            'date': new FormControl(this.editableItem ? new Date(this.editableItem.date) : null, Validators.required),
            'key': new FormControl(this.editableItem ? this.editableItem.key : null),
        });
    }

    onClose() {
        this.onCloseModal.emit();
    }

    onSubmit() {
        let isNew = this.editableItem ? false : true;
        let item: IBook = this.bookForm.value;
        item.date = this.bookForm.value.date.getTime();
        this.bookService.save(this.bookForm.value, isNew);
        this.onCloseModal.emit();
    }

}
