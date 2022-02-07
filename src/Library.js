function createLibrary(library, book) {

  return library
}





function addBook(library, book) {
  var library = {
    shelves: {
      fantasy: [book],
      fiction: [book],
      nonfiction: [book],

      library.unshift(book)
      console.log(library.unshift(book))
    }
  }

//denverLibrary.shelves.fantasy[0], dracula)
library.shelves[book.genre].push(book)
}


module.exports = {
  // createLibrary,
  // addBook,
  // checkoutBook
};
