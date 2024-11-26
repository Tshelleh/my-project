import { Book } from "./Book";
import { BookList } from "./BookList";

export function generateId():number{
return ++BookList.noOfBook
}
export function validateBook(book:Book):boolean{
    if(book.year>new Date().getFullYear()){
        console.log("Unvalide year\n")
        return false;
    }
        else
     return true;
}


