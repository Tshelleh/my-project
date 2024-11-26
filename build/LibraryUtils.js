"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
exports.validateBook = validateBook;
var BookList_1 = require("./BookList");
function generateId() {
    return ++BookList_1.BookList.noOfBook;
}
function validateBook(book) {
    if (book.year > new Date().getFullYear()) {
        console.log("Unvalide year\n");
        return false;
    }
    else
        return true;
}
