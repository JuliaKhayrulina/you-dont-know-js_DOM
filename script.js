'use strict';

const books = document.querySelectorAll('.book');

const titleBook = document.querySelectorAll('a');
const listBook3 = books[0].querySelectorAll('li');
const listBook5 = books[5].querySelectorAll('li');
const listBook8 = books[2].querySelectorAll('li');

books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
titleBook[4].textContent = 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').remove();

listBook3[9].before(listBook3[7]);
listBook3[9].after(listBook3[2]);
listBook3[3].after(listBook3[6]);
listBook3[6].after(listBook3[8]);

listBook5[4].after(listBook5[2]);
listBook5[3].before(listBook5[9]);
listBook5[8].before(listBook5[5]);

listBook8[8].innerHTML = `<li>Глава 8: За пределами ES6</li>`;
