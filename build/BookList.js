"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookList = void 0;
var BookList = /** @class */ (function () {
    function BookList() {
        this.books = [];
    }
    BookList.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookList.prototype.removeBook = function (id) {
        var index = this.books.findIndex(function (book) { return book.id === id; });
        if (index >= 0) {
            this.books.splice(index, 1);
            this.books = this.books.map(function (book, bookindex) {
                if (bookindex >= index) {
                    book.id -= 1;
                }
                return book;
            });
            BookList.noOfBook = this.books.length;
        }
        else
            console.log('No Book found With ID ${id}\n');
    };
    BookList.prototype.searchBooks = function (query) {
        var searchresult = this.books.filter(function (book) {
            return query.trim().toLowerCase() == book.author.trim().toLowerCase() || query.trim().toLowerCase() == book.title.trim().toLowerCase();
        });
        return searchresult;
    };
    BookList.prototype.MarkAsBorrowed = function (id, borrower) {
        this.books.forEach(function (book) {
            if (book.id === id) {
                book.isBorrowed = true;
                book.borrowedBy = borrower;
            }
        });
    };
    BookList.prototype.MarkAsReturned = function (id) {
        this.books.forEach(function (book) {
            if (book.id === id) {
                book.isBorrowed = false;
                book.borrowedBy = null;
            }
        });
    };
    BookList.prototype.getBorrowedBooks = function () {
        var borrowedbook = this.books.filter(function (book) { return book.isBorrowed === true; });
        return borrowedbook;
    };
    BookList.prototype.PrintBooks = function () {
        this.books.forEach(function (book) { return console.log(book); });
    };
    BookList.noOfBook = 0;
    return BookList;
}());
exports.BookList = BookList;
