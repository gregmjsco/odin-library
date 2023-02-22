"use strict";

var myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    var info = `${title} by ${author}, ${pages}, ${read}`
    return info;
  }

}

const theHobbit = new Book("The Hobbit", "Tolkien", 750, "Not yet read")

theHobbit.info()
console.log(theHobbit.info())

function addBookToLibrary() {
  // do stuff here
}