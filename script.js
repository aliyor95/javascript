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

// if (5 == 6) {
//     console.log('ok');
// } else {
//     console.log('error');
// }


// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('kop');
// } else {
//     console.log('ok');
// }
// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49:
//         console.log('notogri');
//         break;
//     case 100: 
//         console.log('notogri');
//         break;
//     case 52:
//         console.log('togri');
//         break;
//     default: 
//         console.log('aniqlanmadi');
//         break;
// }

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);
// for (let i = 1; i < 10; i++) {
//     if (i === 4) {
//         break;
//     }
//     console.log(i);
// }

const numberOfFilms = +prompt('Siz nechita kino korgansiz?', '');
// if (numberOfFilms == 100) {
//     const numberOfFilms = +prompt('Siz nechita kino korgansiz?', '');
// } 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const a = prompt('Oxirigi korgan filmingiz?', ''),
//       b = prompt('nechi baxo berasiz?', ''),
//       c = prompt('Oxirigi korgan filmingiz?', ''),
//       d = prompt('nechi baxo berasiz?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// switch (personalMovieDB.count) {
//     case 10:
//         console.log('kam');
//         break;
//     case 30:
//         console.log('yaxshi');
//         break;
//     case 50:
//         console.log('kop');
//         break;
//     default:
//         console.log('bilmadim');
//         break;
// }
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Oxirigi korgan filmingiz?', ''),
//           b = prompt('nechi baxo berasiz?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }   else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('kam');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('yaxshi');
// } else if (personalMovieDB.count >= 30) {
//     console.log('kop');
// } else {
//     console.log('xato');
// }

// console.log(personalMovieDB);
// let num = 10;
// function showFirstMessage(alex) {
//     console.log(alex);
//     num = 20;
// }

// showFirstMessage('Hellow World!');
// console.log(num);
// const str = 'Test';
// const arr = [1, 2, 4];
// console.log(arr.length);
// console.log(str.toUpperCase());
// console.log(str);
const logg = 'Hello World';
console.log(logg.substr(6, 5));