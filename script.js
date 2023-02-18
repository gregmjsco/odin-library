let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    let info = `${title} by ${author}, ${pages}, ${read}`
    return info
  }

}

function addBookToLibrary() {
  // do stuff here
}