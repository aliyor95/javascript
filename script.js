// 'use strict';

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a = 10;
// console.log(obj);

// let number1 = 4.6;
// console.log(-4/0);
// console.log('string' * 9);

// const persone = 'Alex';

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const object = {
//     name: 'Alex',
//     age: 25,
//     isMarried: false
// };

// console.log(object.name);

// let arr = ['alex', 'max', 9, 'brain', {}, []];
// console.log(arr[1])

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('sizning yoshingiz nechida?', '');
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('sizning ismingiz nima?', '');
// answers[1] = prompt('sizning ismingiz nima?', '');
// answers[2] = prompt('sizning ismingiz nima?', '');
// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5/${category}`);

// const user = "aliyor"
// alert(`sening isming: ${user}`);

// console.log('arr' + ' - object');
// console.log(4 + ' - max');

// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);
// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 1 !== 8);

// const isChacked = false,
//       isClose = false;
// console.log(isChacked && isClose);
// console.log(isChacked || !isClose);

const numberOfFilms = prompt('Siz nechita kino korgansiz?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Oxirigi korgan filmingiz?', ''),
      b = prompt('nechi baxo berasiz?', ''),
      c = prompt('Oxirigi korgan filmingiz?', ''),
      d = prompt('nechi baxo berasiz?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);