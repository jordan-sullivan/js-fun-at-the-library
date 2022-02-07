

function shelfBook(book, shelf) {
//bookoObject is object of the bookShelf
//shelf is an arrray
//run console.log separatley to see what each param does/shows
//array should only hold 3 books. if only one book on shelf,
//we can add another, if 2, we can add another until we get to three or less. <=3
//should only happen if room on shelf
  if (shelf.length <3) {
    shelf.unshift(book);
  }
}
  //console.log(sciFiShelf)

//arrray.method()
  //shelf.splice(1)
  //shelf.splice (i, 1)
function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == book) {
    shelf.splice(i, 1)
  }
 }
}
// console.log(sciFiShelf)
//    if (sciFiShelf.length === )
  //we need the shelf array
  //iterate through the array until the book we are looking for
  //is at the front of the array, then
  //    sciFiShelf.shift(bookObject)

  // function saveReview(fanReview, reviews) {
  //   if (!reviews.includes(fanReview)) {
  //     reviews.push(fanReview);
  //   }
  //
  // for (var i = 0; i < shelf.length ; i++) ;{

    //    if (i === shelf), break;

    // function writeBook(title, character, genre) {
    //   var book = {
    //     title: title,
    //     mainCharacter: character,
    //     pageCount:calculatePageCount(title),
    //     genre: genre,
    //   }
    //   return book


// function listTitles(book, shelf) {
//   var titles = [];
//   var onShelf = [];
  // same as:
  //   it("should only add unique reviews", function() {
  //   var reviews = [];
  //
  //   saveReview("I want everyone to read this book!", reviews);
  //   saveReview("I couldn't stop reading!", reviews);
  //   saveReview("I want everyone to read this book!", reviews);
  function listTitles(fantasyShelf) {
    var stringOfTitles = [];
    // ^ didn't need a second var- var onShelf = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    stringOfTitles.push(fantasyShelf[i].title)
    //console.log(onShelf.join(" , "));
 }
 return stringOfTitles.join(", ")

 //console.log(titles.push(fantasyShelf[i].title));
//console.log(onShelf.toString())
//needs to be returned in a string as a list
}

  //return titles
  //   if (fantasyShelf[i].title == book) {
  // return listTitles("title") or book.title?
//function should create a list of all titles on shelf
//and return them

//return listTitles(returnTitles)


//SEARCH SHELF
//"should tell us if a title is on the shelf"
// How can I find what shelf a book is even on?
// nonFiction shelf is an array of objects,

function searchShelf(sciFiShelf) {
  for (var i=0; i< sciFiShelf.length; i++) {
  if ( sciFiShelf.length[i] === sciFiShelf.title) {
return true
     }
   }
 }
//function needs to run through the available objects on each shelf
//of books, searching for the title to match the
//title given, then produce a boolean stating if
//true its on shelf or false it is not.

//need a for loop
//need an if statement
//need a return statement to produce boolean

  //should tell us if a title is on the shelf",
  //(searchShelf(sciFiShelf, "Hyperion"), true);
  //(searchShelf(sciFiShelf, "The Fifth Season"), false);








module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};



//
// }
