function createTitle(bookIdea) {

  return "The " + bookIdea
}

function buildMainCharacter(name, age, pronouns) {
  var person = {
      name: name,
      age: age,
      pronouns: pronouns,

    }
return person
}

function saveReview(fanReview, reviews) {
  if (!reviews.includes(fanReview)) {
    reviews.push(fanReview);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20

   }

function writeBook(title, character, genre) {
  var book = {
    title: title,
    mainCharacter: character,
    pageCount:calculatePageCount(title),
    genre: genre,
  }
  return book

}

function editBook(newTitle) {

  newTitle.pageCount = newTitle.pageCount * .75
//^ is dynamic key from writeBook function in book object
// aff is parameter, placeholder we need to access
}





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
