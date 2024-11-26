 import { Book } from "./Book";
 
 export class BookList{
public static noOfBook:number=0;
private  books:Book[]=[];
public addBook(book:Book):void{
   this.books.push(book);
}
public removeBook(id:number):void{
let index=this.books.findIndex((book)=>book.id===id)
if(index>=0)
{
    this.books.splice(index,1);
    this.books=this.books.map((book,bookindex)=>{
     if(bookindex>=index){
        book.id-=1;
       }
       return book;
    })
    BookList.noOfBook=this.books.length;
}
else
console.log('No Book found With ID ${id}\n')
}
public searchBooks(query:string):Book[]{
   let searchresult= this.books.filter((book)=>{
    return query.trim().toLowerCase() == book.author.trim().toLowerCase() || query.trim().toLowerCase() == book.title.trim().toLowerCase();
   })
   return searchresult;
}
public MarkAsBorrowed(id:number,borrower:string):void{
this.books.forEach((book)=>{
    if(book.id===id){
        book.isBorrowed=true;
        book.borrowedBy=borrower;
    }
})
}
public MarkAsReturned(id:number):void{
    this.books.forEach((book)=>{
        if(book.id===id){
            book.isBorrowed=false;
            book.borrowedBy=null;
        }
    })
}
public getBorrowedBooks():Book[]{
let borrowedbook=this.books.filter((book)=>book.isBorrowed===true)
return borrowedbook;
}
PrintBooks():void{
    this.books.forEach((book)=>console.log(book))
}

}