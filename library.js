// define a library object
let library = {
    books: [],

    // function to add a book to the library
    addBook: function (title, author, genre) {
        const book = { title, author, genre };
        this.books.push(book);
    },

    // function to display books by genre
    displayBooksByGenre: function (genre) {
        console.log("Displaying books by genre: " + genre);

        // loop through the books array
        for (let i = 0; i < this.books.length; i++) {
            // check the genre of each book in the array
            if (this.books[i].genre === genre) {
                console.log(this.books[i].title)
            }
        }
    }
};

console.log(library)

library.addBook("The Hound of the Baskervilles", "Arthur Conan Doyle", "Fantasy");
library.addBook("The Lord of the Rings", "Tolkien", "Fantasy");
library.addBook("Fight Club", "Chuck Palahniuk", "Thriller");

console.log(library.books)

library.displayBooksByGenre("Fantasy");
