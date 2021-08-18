// 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

  
// orderedItems.forEach(function(number, index) {
//   totalPrice += number;
// })

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138


// 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
//   numbers.forEach(function(number, index) {
//   if (number > value) {
//         filteredNumbers.push(number);
//       }
//   })  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]


// 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   firstArray.forEach(function(number, index) {
//  if (secondArray.includes(number)) {
//         commonElements.push(number);
//       }
//   })
//     return commonElements;
//     // Пиши код выше этой строки
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]


// 4
// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100)); //500


// 5
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


// 6
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//  orderedItems.forEach ((item) => 
//     totalPrice += item)
//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291])); //503


// 7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) =>
//       number > value ? 
//         filteredNumbers.push(number) : number
//     )  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]


// 8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach ((element) => 
//       secondArray.includes(element) ? 
//         commonElements.push(element) : element      
//     )  
//     // Пиши код выше этой строки
//     return commonElements;
// }


// 9
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
  
//     numbers.forEach(number => 
//       (number % 2 === 0) ?
//         newArray.push(number + value) :
//                     newArray.push(number))   
//   return newArray
//     // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]


// 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);


// 11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// const titles = books.map(book => book.title);


// 12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(book => book.genres);


// 13
// const getUserNames = users => {
//     const names = users.map(user => user.name)
//     return names
// };


// 14
// const getUserEmails = users => {
//     const emails = users.map(user => user.email)
//     return emails
// };


// 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value  % 2 === 0);
// const oddNumbers = numbers.filter(value => value  % 2 !== 0);


// 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);


// 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating  >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author
//    ===  AUTHOR);


// 18
// const getUsersWithEyeColor = (users, color) => {
//  const array = users.filter(user => user.eyeColor === color)
// return array
// };


// 19
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const array = users.filter(user => user.age > minAge && user.age < maxAge)
//  return array
// };


// 20
// const getUsersWithFriend = (users, friendName) => {
//   const array =  users.filter(user => user.friends.includes(friendName))
//   return array
// };


// 21
// const getFriends = (users) => {
//   const array = users.flatMap(user => user.friends) 
//   const friends = array.filter((friends, index, array) => array.indexOf(friends) === index)
//     return friends
// };


// 22
// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user => user.isActive);
//   return activeUsers
// };


// 23
// const getInactiveUsers = (users) => {
//    const activeUsers = users.filter(user => !user.isActive);
//    return activeUsers
// };


// 24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);


// 25
// const getUserWithEmail = (users, email) => {
//   const getEmail = users.find((user) => user.email === email)
//   return getEmail
// };


// 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// 27
// const isEveryUserActive = (users) => {
//   const getActiveUsers = users.every((user) => user.isActive)
//   return getActiveUsers
// };


// 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);


// 29
// const isAnyUserActive = users => {
//   const getActiveUsers = users.some((user) => user.isActive)
//   return getActiveUsers
// };


// 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;


// 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed; 
// }, 0);


// 32
// const calculateTotalBalance = users => {
//   const total = users.reduce((total, user) => {   
//     return total + user.balance; 
//  }, 0);
//   return total
// };


// 33
// const getTotalFriendCount = users => {
//    const friends = users.reduce((total, user) => {   
//     return total + user.friends.length; 
//   }, 0);
//    return friends
// };


// 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);


// 36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
const authorsInAlphabetOrder = [...authors].sort();
  
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// 37
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// 38
const sortByAscendingBalance = users => {
   const sortedByBalance = [...users].sort((a, b) => a.balance - b.balance)
   return sortedByBalance
};


// 39
const sortByDescendingFriendCount = users => {
   const sortedByFriends = [...users].sort((a, b) => b.friends.length - a.friends.length)
   return sortedByFriends
};


// 40
const sortByName = users => {
   const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name))
   return sortedByName
};


// 41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));


// 42
const getNamesSortedByFriendCount = users => {
   const sortedByFriends = [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
   return sortedByFriends
};


// 43
const getSortedFriends = users => {
   const sortedByFriends = [...users].flatMap((user) => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort((a, b) => a.localeCompare(b))
   return sortedByFriends
};


// 44
const getTotalBalanceByGender = (users, gender) => {
  const getTotal = [...users].filter((user) => user.gender === gender).reduce((total, user) => total + user.balance, 0);
  return getTotal
};
