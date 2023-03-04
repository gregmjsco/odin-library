

console.log("Hello");

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

function addBookToLibrary() {
  // do stuff here
}

let newBookBtn = document.querySelector("#add-book-btn");
newBookBtn.addEventListener("click", function(){
  let newBookForm = document.querySelector("#new-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "block";
})