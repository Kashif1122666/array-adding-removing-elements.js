// CHAPTER-16 ADDING AND REMOVING ELEMENTS

// const books = ["computer science","mathematics",];
// console.log(books);
// add elements to the array

// single
// books.push("physics");
// console.log(books);

// multiple
// books.push("english","history");
// console.log(books);

// add element at a specific position/index, it will replace already existing element
// const books = ["computer science","mathmatics"];
// // books[1] = "physics";
// books[4] = "english";
// console.log(books);

// adding elements to empty array
// const names = []; 

// names[0] = "ali";
// names[1] = "bilal";
// names[5] = "ahmad";
// names[7] = "asad";
// console.log(names);

// // remove elements
const books = ["urdu","english","math"];
// books.pop();
const popedbook = books.slice(2,2);

console.log(popedbook);
// console.log({books});