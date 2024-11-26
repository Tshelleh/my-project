import {Book} from "./Book";
import{BookList} from "./BookList";
import { generateId, validateBook } from "./LibraryUtils";

let booklist:BookList=new BookList();
let arrBook:Book[]=[];
arrBook[0]={id:generateId(),title:"The First",author:"First",isBorrowed:false,year:2022,borrowedBy:null,category:"Science"};
arrBook[1]={id:generateId(),title:"The Second",author:"Second",isBorrowed:false,year:2025,borrowedBy:null,category:"Fiction"};
arrBook[2]={id:generateId(),title:"The Third",author:"Third",isBorrowed:false,year:2020,borrowedBy:null,category:"Science"};
arrBook[3]={id:generateId(),title:"The Fourth",author:"Fourth",isBorrowed:false,year:2023,borrowedBy:null,category:"Fiction"};
arrBook[4]={id:generateId(),title:"The Fifth",author:"Fifth",isBorrowed:false,year:2021,borrowedBy:null,category:"Science"};
arrBook.forEach(book=>{
   if(validateBook(book))
   {
    booklist.addBook(book);
   }
    else
console.log("Please Try Again\n");
})
let searchprossing1=booklist.searchBooks("First");
let searchprossing2=booklist.searchBooks("The Second");
let searchprossing3=booklist.searchBooks("Not found");

console.log('Query 1:\n')
if(searchprossing1.length>0)
   console.log(searchprossing1)
else
console.log('Does not Exist\n')

console.log('Query 2:\n')
if(searchprossing2.length>0)
   console.log(searchprossing2)
else
console.log('Does not Exist\n')

console.log('Query 3:\n')
if(searchprossing3.length>0)
   console.log(searchprossing3)
else
console.log('Does not Exist\n');

booklist.MarkAsBorrowed(arrBook[2].id,"Ahmed")
booklist.MarkAsBorrowed(arrBook[4].id,"Nour")

booklist.MarkAsReturned(arrBook[2].id)

booklist.removeBook(arrBook[3].id)

console.log('All Books\n')
booklist.PrintBooks();

console.log('All Borrowed Books\n')
if(booklist.getBorrowedBooks().length>0)
   booklist.getBorrowedBooks().forEach((book)=>console.log(book)) 
else
console.log("There is no borrowed books\n")