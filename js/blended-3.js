// HW
/*-----------------Задача №1------------------*/
//Теория
//Объекты могут быть использованы для построения различных структур данных.
//Часто встречающаяся структура – список (не путайте с массивом).
//Список – связанный набор объектов, где первый объект содержит 
// ссылку на второй, второй – на третий, и т.п.

// const list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

//Списки удобны тем, что они могут делиться частью своей структуры.
//Например, можно сделать два списка, {value: 0, rest: list} и 
// { value: -1, rest: list }, где list – это ссылка на ранее
//объявленную переменную. Это два независимых списка, при этом 
// у них есть общая структура list,
//которая включает три последних элемента каждого из них. 
// Кроме того, оригинальный список также сохраняет свои свойства
//как отдельный список из трёх элементов.

//-------------Задание
//Напишите функцию arrayToList, которая строит такую структуру, 
// получая в качестве аргумента[1, 2, 3]

// 1й вариант
// const arrayToList = (arr) => { 
//     let list = {
//         value: arr[0],
//         rest: nestObject()
//     };
//     function nestObject() {
//         let rest = {};
//         arr.shift();
//         const length = arr.length;
//         if (length == 1) {
//             rest.value = arr[0];
//             rest.rest = null;
//         } else {
//             rest.value = arr[0];
//             rest.rest = nestObject();
//         }
//         return rest;   
//     }
//     return list;
// };

// console.log(arrayToList([1, 2, 3]));

// 2й вариант

// function arrayToList(params) {
//   let objectList = null;
//   params = params.reverse();
//   for (let i = 0; i < params.length; i += 1) {
//     const element = params[i];
//     objectList = { value: element, rest: objectList };
//   }
//   return objectList;
// }

// console.log(arrayToList([1, 2, 3, 8, 125, 22, 0]));



/*-----------------Задача №2------------------*/
//Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. 
//Но иногда полезно было бы сравнить объекты по содержимому. 
//Напишите функцию deepEqual, которая принимает два значения и возвращает
// true, только если это два одинаковых значения или это объекты, свойства
// которых имеют одинаковые значения, если их сравнивать рекурсивным 
// вызовом deepEqual.Чтобы узнать, когда сравнивать величины через ===, 
// а когда – объекты по содержимому, используйте оператор typeof. 
// Если он выдаёт “object” для обеих величин, значит нужно делать глубокое 
// сравнение. Не забудьте об одном дурацком исключении, случившемся 
// из - за исторических причин: “typeof null” тоже возвращает “object”.
// Решите задачу без использования метода JSON.stringify()

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

// var obj = { here: { is: "an" }, object: 2 };

// const deepEqual = function (x, y) {
//   if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
//     if (Object.keys(x).length != Object.keys(y).length)
//       return false;
//         for (var prop in x) {
//             if (y.hasOwnProperty(prop))
//             return deepEqual(x[prop], y[prop]);
//         }
//     }
//   else if (x !== y)
//     return false;
//   else
//     return true;
// }

// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


// ----- 1
// Заполнить массив нулями, кроме первого и последнего элементов, 
// которые должны быть равны единице.

// function createArray(num) {
//     const array = []
//     for (let i = 0; i < num; i += 1) {
//         if (i === 0 || i === num - 1) array.push(1)
//         else array.push(0) 
//     }
//     return array
// }
// console.log(createArray(9));


// ----- 2
// Заполнить массив нулями и единицами, при этом данные значения
// чередуются, начиная с нуля.

// function createArray(num) {
//     const array = []
//     for (let i = 0; i < num; i += 1) {
//         if (i % 2 === 0) {
//             array.push (0)
//         } else {
//             array.push(1)
//         }
//     }
//     return array
// }
// console.log(createArray(5));

// ----- 3
// Заполнить массив последовательными нечетными числами, 
// начиная с единицы.

// function createArray(num) {
//     const array = []
//     for (let i = 0; i <= num; i += 1) {
//         if (i % 2 !== 0) {
//             array.push(i)
//         }
//     }
//     return array 
// }
// console.log(createArray(5));

// ----- 4
// Сформировать убывающий массив из чисел, 
// которые делятся на 3.

// 1 вариант
// function createArray(num) {
//     const array = []
//     for (let i = num; i > 0; i -= 1) {
//         if (i % 3 === 0) {
//            array.push(i)
//        }
//     }
//     return array
// }
// console.log(createArray(10));

// 2 вариант
// function createArray(num) {
//     const array = []
//     for (let i = 1; i < num; i += 1) {
//         if (i % 3 === 0) {
//            array.push(i)
//        }
//     }
//     return array.reverse()
// }
// console.log(createArray(10));


// ----- 5
// Напишите функцию getSubstr(str, char, pos), которая
// озвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра
// pos.

// var str = 'Астрономия — Наука о небесных телах';

// function getSubstr(str, char, pos) {
//     const array = str.split(char)
//     if (pos === "before") {
//         return array[0]
//     } else {
//         return array[1]
//     }
// };
// console.log(getSubstr(str, '—','after'));
// document.writeln(getSubstr(str, '—','after')); // Наука о небесных телах
// document.writeln(getSubstr(str, 'Н','before')); // Астрономия —


// ----- 6
// Создайте метод объекта String endsWith(), 
// который сравнивает подстроку str1 с окончанием
// исходной строки str и определяет заканчивается
// ли строка символами подстроки.

// var str = "Каждый охотник желает знать"; 
// var str1 = "скрипт";
// var str2 = "знать";

// 1й вариант
// String.prototype.endsWith = function(substring) {
//     let newArray = this.split(" ") 
//     return (newArray[newArray.length - 1] === substring) 
// };
// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));

// 2й вариант
// String.prototype.endsWith = function(substring) {
//     let newArray = this.split(" ") 
//     return (newArray.length - 1 === newArray.indexOf(substring)) 
// };
// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));

// document.writeln(str.endsWith(str1)); // false
// document.writeln(str.endsWith(str2)); // true


// ----- 7
// Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str.
// По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos = 0) {
//     const array = str.split("")
//     if (substr) {
//         array.splice(pos, 0, substr)
//     }
//     return array.join('') 
// };
// console.log(insert('Казнить нельзя'));
// console.log(insert('Казнить нельзя', 'Помиловать '));
// console.log(insert('Казнить нельзя', 'Помиловать ', 8));

// document.writeln(insert('Казнить нельзя')); // Казнить нельзя
// document.writeln(insert('Казнить нельзя', 'Помиловать ')); // Помиловать Казнить нельзя 
// document.writeln(insert('Казнить нельзя', 'Помиловать ', 8)); // Казнить Помиловать нельзя


// ----- 8
// Напишите функцию limitStr(str, n, symb), которая 
// обрезает строку, если она длиннее указанного 
// количества символов n.Усеченная строка должна 
// заканчиваться троеточием «...» (если не задан 
// параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     let newStr = str
//     if (str.length > n && n) {
//         const newSymbol = symb ? symb : "..."
//         newStr = str.slice(0, n) + newSymbol
//     }
//     return  newStr
// };

// console.log(limitStr('Каждый охотник желает знать.'));
// console.log(limitStr('Каждый охотник желает знать.',17));
// console.log(limitStr('Каждый охотник желает знать.',22,'!'));

// document.writeln(limitStr('Каждый охотник желает знать.')); // Каждый охотник желает знать.
// document.writeln(limitStr('Каждый охотник желает знать.',17)); // Каждый охотник...
// document.writeln(limitStr('Каждый охотник желает знать.',22,'!')); // Каждый охотник желает!


// ----- 9
// Напишите функцию cutString(str, n), которая делит 
// строку на подстроки, состоящие из n символов.

// function cutString(str, n) {
//     const newArray = []
//     for (let i = 0; i < str.length; i += n) {
//        newArray.push(str.slice(i, i + n))
//     }
//     return newArray
// };

// console.log(cutString('наслаждение',3));
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// ----- 10
// Напишите функцию count(str, stringsearch), которая возвращает 
// количество символов stringsearch в строке str.

// var symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     let array = str.split("")
//     let result = 0
//     for (const el of array) {      
//         if (el === symb) {
//             result += 1
//         }
//     }
//     return result
// };
// console.log(count(str, symb));
// document.writeln(count(str, symb)) // 5

// ------ 11
// Напишите функцию alphabetize(str), которая возвращает строку, 
// отсортировав её символы в алфавитном порядке.

// function alphabetize(str) {
//     let array = str.split("")
//     return array.sort().join("")
// };
// console.log(alphabetize("Europe"));
// document.writeln(alphabetize("Europe")); // Eeopru

// let array = [1, 5, 333, 2222]
// // console.log(array.sort());
// console.log(array.sort((a, b) => {
//  return a - b
// }));


// ----- 12
// Напишите функцию unique_letters(str), которая возвращает строку, 
// оставив в ней только уникальные символы, т.е.встречающиеся 
// в строке один раз.

// function unique_letters(str) {
//     const newArray = str.split("")
//     return newArray.filter((el, idx, arr) => 
//         arr.lastIndexOf(el) === arr.indexOf(el)
//     )
// };
// console.log(unique_letters('anaconda'));
// document.writeln (unique_letters('anaconda')); // c,o,d


// ----- 13
// Напишите функцию removeDuplicate(str), которая 
// возвращает строку, очищенную от слов - дупликатов,
// т.е.каждое слово должно повторяться не более одного 
// раза.

var str = "вишня, груша, слива, груша";

function removeDuplicate(str) {
    
};

// document.writeln (removeDuplicate(str)); // вишня, груша, слива
