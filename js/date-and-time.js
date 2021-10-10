// https://habr.com/ru/company/mailru/blog/269465/     -промисы

// const data = new Date();
// console.log(data.getDate()); // сегодняшнее число

// Методы объекта Date
// data.getDay(); // номер дня (0-6)
// data.getFullYear(); // 1000-9999
// data.getHours(); // текущее значение часов
// data.getMilliseconds(); // миллисекунды
// data.getMinutes(); // минуты
// data.getMonth(); // месяцы (0-11)
// data.getSeconds(); // секунды

// // преобразования в строку:
// data.toDateString();
// data.toLocaleDateString();
// data.toLocaleString();
// data.toString();

// const my_date = new Date();
// alert(my_date.getDate());

// // 'my_date' - это экземпляр объекта Date?
// alert(my_date instanceof Date);


// Установка даты
// let today = new Date();
// let birth = new Date("March 27, 1986 05:24:00");
// alert(birth);


// Текущее время
// function getTime() {
//   const now = new Date();
//   const result = now.getHours() + ":" + now.getMinutes();

//   return(result);
// }
// alert("Сейчас " + getTime());


// Создание читаемой даты
// const tm = new Date();
// let resTxt = '';
// resTxt += "Сейчас " + tm.getHours() + ":"
//        + tm.getMinutes() + ":" + tm.getSeconds() + ", ";

// resTxt += "дата: " + tm.getDate() + "." + (tm.getMonth() + 1)
//        + "." + tm.getFullYear();

// alert(resTxt);


// Собственная функция форматирования даты
// function showTime() {
//   var monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
//   "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

//   var daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

//   var dateObj = new Date();

//   var year = dateObj.getFullYear();
//   var month = dateObj.getMonth();
//   var numDay = dateObj.getDate();
//   var day = dateObj.getDay();
//   var hour = dateObj.getHours();
//   var minute = dateObj.getMinutes();
//   var second = dateObj.getSeconds();

//   if (minute < 10) minute = "0" + minute;

//   if (second < 10) second = "0" + second;

//   var out = daysArr[day] + ", " + numDay + " " + monthsArr[month]
//           + " " + year + ", " + hour + ":" + minute + ":" + second;

//   return out;
// }

// alert(showTime());



// Выполнение через 4 секунды (время в миллисекундах)
// setTimeout(function() { alert("Foobar!") } , 4000);

// const date = new Date();
// const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
// const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
// console.log([hour, minutes, seconds]);


// const date = new Date('July 22, 2018 07:22:13')

// date.toString() // "Sun Jul 22 2018 07:22:13 GMT+0200 (Central European Summer Time)"
// date.toTimeString() //"07:22:13 GMT+0200 (Central European Summer Time)"
// date.toUTCString() //"Sun, 22 Jul 2018 05:22:13 GMT"
// date.toDateString() //"Sun Jul 22 2018"
// date.toISOString() //"2018-07-22T05:22:13.000Z" (ISO 8601 format)
// date.toLocaleString() //"22/07/2018, 07:22:13"
// date.toLocaleTimeString()	//"07:22:13"
// date.getTime() //1532236933000
// date.getTime() //1532236933000

// console.log(date.toTimeString());


// const date = new Date('July 22, 2018 07:22:13')

// date.getDate() //22
// date.getDay() //0 (0 means sunday, 1 means monday..)
// date.getFullYear() //2018
// date.getMonth() //6 (starts from 0)
// date.getHours() //7
// date.getMinutes() //22
// date.getSeconds() //13
// date.getMilliseconds() //0 (not specified)
// date.getTime() //1532236933000
// date.getTimezoneOffset()// -120 (will vary depending on where you are and when you check - this is CET during the summer). Returns the timezone difference expressed in minutes
