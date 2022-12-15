/* ------------------------------ TASK 2 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget >= 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const myMovieOne = new Movie("Avatar", "James Cameron", 237000000);
const myMovieTwo = new Movie("Titanic", "James Cameron", 200000000);
const myMovieThree = new Movie(
  "From Dusk till Dawn",
  "Quentin Tarantino",
  19000000
);

console.log(myMovieOne.title);
console.log(myMovieTwo.wasExpensive());
console.log(myMovieThree.wasExpensive());
