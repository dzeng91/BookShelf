
let shelfTitle = document.querySelector("#shelfTitle")

// We get a stack of index cards of book info - book-data.js
// I enter all the info into a spreadsheet - contructor
// I use the spreadsheet to order books - addbook
// I take the books and put them onto shelf - render

class Book {
    // Create the four elements needed to categorize each book
    constructor(title, author, language, subject) {
        this.title = title;
        this.author = author;
        this.language = language;
        this.subject = subject;
    }
    render(){
         // Create each element and style them
        let bookTitle = document.createElement("h1");
        bookTitle.textContent = `${this.title}`;
        bookTitle.style.fontSize = "50px"
        bookTitle.style.color = "maroon"
        
        let bookAuthor = document.createElement("h1");
        bookAuthor.textContent = `${this.author}` ;
        bookAuthor.style.fontSize = "30px"
        bookAuthor.style.color = "red"

        let bookLanguage = document.createElement("h2")
        bookLanguage.textContent = `${this.language}`;
        bookLanguage.style.fontSize = "20px"
        bookLanguage.style.color = "black"

        let bookSubject = document.createElement("ol")
        bookSubject.textContent = `${this.subject}`;
        bookSubject.style.fontSize = "30px"
        bookSubject.style.color = "black"
        bookSubject.style.border = "5px dotted black"
        bookSubject.style.textOverflow = "ellipsis"

        // Put all the elements into its own box, representing the cover of the books
        let bookItem = document.createElement("li");
        bookItem.append(bookTitle, bookAuthor, bookLanguage, bookSubject)
        bookItem.style.border = "10px solid black"
        bookItem.style.backgroundColor = "silver"
        bookItem.style.width = "30%"
        bookItem.style.height = "550px"
        bookItem.style.display = "inline-block"
        bookItem.style.margin = "4px"
        
        return bookItem
    }
}



class Bookshelf {
    // This represents the spreadsheet
    // I want to take all the books and display them on the bookshelf
    // I am to place all the books into an array
    constructor() {
        this.arrayOfBooks = []
    }

    // Method to add book to the bookshelf
    addBook(addedBook) {
        this.arrayOfBooks.push(addedBook);
    }

    render(){
        let shelf = document.querySelector("#shelf");

        let bookItemList = document.createElement("ul");
    
        // Using a for loop, loop through all the individual objects (book) of the array and
        // append to the unordered list (bookItemList) for display on UI
        for(const book of this.arrayOfBooks){
          bookItemList.append(book.render())
        } 
        shelf.append(bookItemList);
    }
    
    // Using seed method?? , loop through all the books and populate the shelf with the elements
    // of each book
    seed(arrayOfBooks){
    for(const book of arrayOfBooks){
        let bookInstance = new Book(book.title, book.author, book.language, book.subject)
        bookShelf.addBook(bookInstance)
    }
    }
}


// console.log("this is a book test", new Book("JRR Tolkien", "English", ["Fantasy, Adventure"], "Lord of the Rings"))
// console.log("this be a Bookshelf test", new Bookshelf())

let book1 = new Book("title", "author", "language", ["subject1, subject2"]);
console.log("this is a rendered book", book1)
let bookShelf = new Bookshelf();
bookShelf.addBook(book1)

bookShelf.seed(bookData)
bookShelf.render()





