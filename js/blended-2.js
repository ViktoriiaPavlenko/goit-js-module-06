// 1
// Задача. Создайте переменную str и
// присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки
// выведите на экран символ 'a', символ 'b', символ 'e'.

// const str = 'abcde';
// alert(str[0])
// alert(str[1])
// alert(str[2])
// alert(str[3])
// alert(str[4])


//2 
// let str = '';

// for (let i = 0; i < 10; i += 1) {
//     str += '#'
//     console.log(str);
// }


// 3
// alert(60 * 60)

// 4
// Переделайте приведенный код так, чтобы в нем 
// использовались операции +=, -=, *=, /=, ++, --. 
// Количество строк кода при этом не должно измениться.
// Код для переделки:
// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// alert(num);

// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;
// alert(num);

// 5
// Создайте переменные m и n.В m поместите произвольное
// числовое значение.Напишите оператор ветвления if так,
// чтобы если m было больше 50, то в переменную n
// помещалось слово «большое», иначе — слово «маленькое».

// let m;
// let n;

// m = Math.floor(Math.random() * 70)

// if (m > 50) {
//  n = "больше"
// } else {
//     n = "меньше"
// }
// console.log(`Переменная "m" ${n} 50`);

// 6
// Напишите скрипт, который используя оператор while 
// выведет все числа от 45 до 67.

// let number = 45;

// while (number < 67) {
//     number += 1
//     console.log(number);
// }

// 7
// Напишите скрипт, который используя оператор while 
// выведет все числа от 45 до 670, кратные 10.

// let number = 45;

// while (number < 670) {
//     if (number % 10 === 0) {
//        console.log('number: ', number);
        
//     }
    
//      number += 1;
// }


// 8
// for (let i = 0; i <= 100; i += 1) {
//     if (i % 3 === 0) {
//         console.log("Кратное 3");
//     } else if (i % 5 === 0){
//         console.log("Кратное 5");
//     } else {
//         console.log(i);
//     }
// }

// 9
// Переменная n хранит целое число от 0 до 9.
// Используя оператор switch, написать скрипт,
// который в зависимости от числа будет выводить
// слово(Например, если n равно 3, то будет выводиться слово «три»)

// let n = Math.floor(Math.random() * 10)
// let m = ""

// switch (n) {
//     case 0:
//         m = "zero"
//         break;
//     case 1:
//         m = "one"
//         break;
//     case 2:
//         m = "two"
//         break;
//     case 3:
//         m = "three"
//         break;
//     case 4:
//         m = "four"
//         break;
//     case 5:
//         m = "five"
//         break;
//     case 6:
//         m = "six"
//         break;
//     case 7:
//         m = "seven"
//         break;
//     case 8:
//         m = "eight"
//         break;
//     default:
//         m = "nine"
//         break;
    
// }

// console.log(m, n);

// 10
// Напишите функцию hello1(), которая при вызове 
// будет возвращать строку «Привет, JavaScript!».
// Напишите функцию hello2(), которая при вызове будет
// принимать переменную name(например, «Василий») и
// выводить строку(в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет,
// гость»

// function hello1() {
//  return `Привет, JavaScript!`
// }
// console.log(hello1());

// function hello2(name) {
//     if (name) {
//         return `Привет, ${name}`
//     } return `Привет гость!`
// }

// console.log(hello2('Василий'));
// hello2('Василий')

// 11
// Напишите функцию mul(n,m), которая принимает два 
// аргумента и возвращает произведение этих аргументов.
// Проверьте ее работу.

// const getSum = (a, b) => {
//     return a + b
// }

// console.log(getSum(5, 11));


// 12
// Создайте функцию repeat(str, n), которая возвращает 
// строку, состоящую и n повторений строки str.n —
// по умолчанию 2, str — пустая строка

// const repeatStr = (str, n = 2) => {
//     let finalStr = ''

//     for (let i = 0; i < n; i += 1) {
//         finalStr += str

//     }
//     return finalStr
// }

// console.log(repeatStr('Get', 4));


// 13
// Напишите функцию min, принимающую два аргумента,
// и возвращающую минимальный из них.

// function min(a, b) {
//     if (a > b) {
//         return b
//     }
//     return a
// }

// console.log(min(7, 20));


// function min(a, b) {
//     return Math.min(a, b)
// }

// console.log(min(7, 20));


// 14
// Создайте функцию rgb(), которая будет принимать 
// три числовых аргумента и возвращать строку вида
// «rgb(23, 100, 134) ».Если аргументы не заданы,
// считать их равными нулю.Не проверять переменные
// на тип данных


// function getRandomNumber(min, max) {
// return Math.floor(Math.random() * (max - min + 1) - min)
// }

// function rgb() {
//     let r = getRandomNumber(0, 255)
//     let g = getRandomNumber(0, 255)
//     let b = getRandomNumber(0, 255)
    
//    return `rgb(${r}, ${g}, ${b})`
// }
// console.log(rgb());


// 15
// Создайте функцию avg() , которая будет находить 
// среднее значение по всем своим аргументам(аргументы 
//     величины числовые).

// function avg(...arg) {
//     let sum = 0;
//     for (let el of arg) {
//         sum += el
//     }
//     return sum / arg.length
// }


// console.log(avg(2, 3, 4, 5, 6));


// 16
//  палиндром
// function name(a) {
//     a = a.toLowerCase()
//     let reverseName = a.split('').reverse().join('')
//     if (a === reverseName) {
//         return true
//     }
//     return false
// }

// console.log(name('Анна'));
// console.log(name('Вика'));


// 17
// шахматная доска
// let array = [];

// for (let i = 0; i < 72; i += 1) {
//     if (i % 9 === 0) {
//         array.push('\n')
//     } else {
//         if (i % 2 === 0) {
//         array.push('#')
//     } else {
//         array.push(' ')
//     }
//     }
// }
// console.log(array.join(''));



// 18
// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

// function deepEqual(a, b) {
//     for (const key in a) {
//         if (b[key]) {
//             if (b[key] === a[key]) {
//                 return true
//             }
//             return false
//         } else {
//             return false
//         }
//     }

//     // return JSON.stringify(a) === JSON.stringify(b)
// }
