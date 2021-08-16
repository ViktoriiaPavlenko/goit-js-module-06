// --------- Array.prototype.sort(callback(currentEl, nextEl){})
//  - Сортирует и ИЗМЕНЯЕТ оригинальный массив
//  - По умолчанию:
//     - сортирует по возрастанию
//     - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)

// const numbers = [1, 9, 6, 2, 3];   //сортирует по возрастанию
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);


//  compareFunction - функция сравнения (callback)
//  Элементы массива сортируются в соответствии с её возвращаемым значением
//   - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
//   - если compareFunction(A, B) больше 0, сортировка поставит B перед A
//   - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на 
//     неизменными по отношению друг к другу, но отсортирует 
//     их по отношению ко всем другим элементам.

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;   //сортирует по убыванию
// });

// console.log(numbers);

// ---Как сделать копию массива чтобы не сортировать оригинальный
//  - Array.prototype.slice()
//  - Операция spread
 
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);  //сортирует по убыванию (descending)
// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);   //сортирует по возрастанию (ascending)
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);


// ---Кастомная сортировка сложных типов

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// По игровому времени

//сортирует по убыванию
// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//     return nextPlayer.timePlayed - prevPlayer.timePlayed;
// });
// console.table(sortedByBestPlayers);


//сортирует по возрастанию
// const sortedByWorstPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
// );
// console.table(sortedByWorstPlayers);


// const byName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     }
// });
// console.table(byName);






// ------ Array.prototype.flat(depth)
//  - Разглаживает массив до указанной глубины
//  - По умолчанию глубина 1

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));




//------- Array.prototype.flatMap(callback)
//  - Комбинация map + flat

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// выводим все теги
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);
// ведём статистику тегов
// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(stats);

// то же самое
// const tags = tweets.flatMap(t => t.tags).reduce((acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }),
//   {},
// );
// console.log(tags);



// =========== Цепочки вызовов - chaining

// const numbers = [1, 5, 2, 4, 3];

// const greaterThanTwo = numbers.filter(num => num > 2);
// console.log(greaterThanTwo);

// const multByThree = greaterThanTwo.map(num => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);

// Цепочка предыдущих трёх
// const sorted = numbers.filter(num => num > 2).map(num => num * 3).sort((a, b) => a - b);
// console.log(sorted);



//  Сортируем тех кто онлайн по рангу
//  - сначала фильтруем
//  - потом сортируем

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
//     { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
// ];

// const onlineAndSorted = players.filter(player => player.isOnline).sort((a, b) => a.rank - b.rank);
// console.table(onlineAndSorted);


// Chaining в методах объекта как jquery

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;

//         return this;
//     },
// };

// element.toggleHovered().changeClass('open').toggleHovered();
// console.log(element);




// ======================== lodash

// ------- isEmpty()
// console.log(_.isEmpty({})); //true
// console.log(_.isEmpty({ a: 1 })); //false


// ------- get()
// const user = {
//     name: 'mango',
//     location: {
//         city: 'Kyiv',
//     },
// };

// console.log(_.get(user, 'location.city')); //Kyiv

// console.log(user?.location?.city); //Kyiv


// ------- union()
// console.log(_.union([1, 2, 3], [3, 4, 5])); //выводит уникальные елементы - [1, 2, 3, 4, 5]


// ------- range()
// console.log(_.range(1, 5)); //[1, 2, 3, 4]
// console.log(_.range(1, 5, 2)); //[1, 3] - с шагом 2


// ------- sortBy()
const users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 34},
]
console.log(_.sortBy(users, ['user', 'age'])); //отсортирует по имени и по возрасту - 
// 0: { user: "barney", age: 34 }
// 1: {user: "barney", age: 36}
// 2: {user: "fred", age: 40}
// 3: {user: "fred", age: 48}


// ------- sum()
console.log(_.sum([1, 2, 3, 4, 5, 6])); //сумма чисел - 21


// ------- sumBy() - для массива обьектов
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
console.log(_.sumBy(players, player => player.timePlayed));  //1240 - сумма всех timePlayed


// ------- minBy() и maxBy()
console.log(_.minBy(players, player => player.timePlayed)); // - игрок с самым низким timePlayed - {id: "player-5", name: "Chelsey", timePlayed: 80, online: true}


// ------- camelCase(), capitalize(),  kebabCase(),
// ------- lowerCase(), upperCase()
console.log(_.kebabCase(' a b c ')); //a-b-c