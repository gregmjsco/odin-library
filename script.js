

console.log("Hello");

var myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }

  function render(){
    let libraryEl = document.querySelector("#library"); 
    libraryEl.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
      let book = myLibrary[index];
      let bookEl = document.createElement("div");
      bookEl.setAttribute("class", "book-card")
      bookEl.innerHTML = `
      <div class = "card header">
        <h3 class = "title">${book.title}</h3>
        <h5 class = "author">by ${book.author}</h5>
      </div>
      <div class ="card-body"
        <p>${book.pages} pages</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>`;
      libraryEl.appendChild(bookEl);


      
    }
  }

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook)
  render();
}

let newBookBtn = document.querySelector("#add-book-btn");
newBookBtn.addEventListener("click", function(){
  let newBookForm = document.querySelector("#new-book-form");
  console.log(newBookForm);
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault()
  addBookToLibrary()  
})