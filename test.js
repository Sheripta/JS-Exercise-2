// JS Object properties

// Exercise 1
const bookInfo = {};
bookInfo["Title"] = "The Book";
bookInfo["Author"] = "Famous Writer";
bookInfo["Year"] = "1984";

console.log(bookInfo);

// Exercise 2
const bookInfo2 = {
    Title : "The Book",
    Author: "Famous Writer",

}
bookInfo2.Page="300 page";

console.log(bookInfo2);

// Object methods

// Exercise 1
const bookInfo3 = {
Title :"The Book",
Author:"Famous Writer",
     bookInfo4:function(){
        return 'The books title and author name is :'+bookInfo.Title+" "+bookInfo.Author;
     }
}
console.log(bookInfo3.bookInfo4());

// Exercise 2

 const person={
    firstName:'Jhon',
     lastName:'Doe',
     fullName:function(){
         return 'the person\'s fullname is :'+this.firstName+" "+this.lastName;
     }

 }
 console.log(person.fullName());

// JS object display

// Exercise 1

 const person2={
     firstName:'Jhon',
     lastName:'Doe',
     age:30,

 }
 document.write(Object.keys(person2));
 document.write(Object.values(person2));

// JS object constructors

// Excercise 1
    
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}

const book1=new Book('The First Book', 'Famous Writer num1', "Year");
console.log(book1);
const book2=new Book('The Second Book', 'Famous Writer num2', "Year");
console.log(book2);

// Exercise 2

function Book1(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.book_details=function(){
        return this.title+" "+this.author
    };
}
const book3=new Book1('The First Book', 'Famous Writer num1', "Year");
console.log(book3.book_details());


// Exercise adding a method to an object
function Book2(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
  
}
const book4=new Book2('The third Book', 'Famous Writer num3', "Year");
book4.page='300 page';
console.log(book4);




