//Дан массив с числами. Проверьте, есть ли в нем два 
// одинаковых числа подряд.
//Если есть - выведите 'да', а если нет - выведите 'нет'.
// const number = [2, 3, 77, 5, 5];

// function validateArray(array) {
//     let flag = false;
//     for (let i = 1; i < array.length; i += 1) {
//         if (array[i] === number[i - 1]) {
//             flag = true;
//         }
//     }
//     return flag;
// }
// console.log(validateArray(number));

// 2
// //Дано число, например 31. Проверьте, что это число
//  не делится ни на одно другое число кроме себя
//  самого и единицы.
//То есть в нашем случае нужно проверить, что число
// 31 не делится на все числа от 2 до 30. Если число
// не
//делится - выведите 'false', а если делится - 
// выведите 'true'.

// function checkNumber(number) {
//     for (let i = 2; i < number; i += 1) {
//         if (number % i === 0) {
//            return true
//        }
//     }
//     return false;
// }
// console.log(checkNumber(31));

// 3
//Дан массив с числами.
//Проверьте, что в этом массиве есть число 5. 
// Если есть - выведите 'да', а если нет - 
// выведите 'нет'.
// const number = [2, 3, 77, 5];

// // 1 variant
// console.log(number.find(num => num === 5));

// // 2 variant
// console.log(number.includes(5));

// // 3 variant
// console.log(number.some(num => num === 5));

// // 4 variant
// console.log(number.indexOf(5) >- 1);


// 4
//Дан массив с числами.
// Узнайте сколько элементов с начала массива надо 
// сложить, чтобы в сумме получилось больше 10 - ти.
// const number = [2, 3, 2, 5, 7, 1];

// let counter = 0;
// let total = 0;

// for (let i = 0; i < number.length; i += 1) {
//     total += number[i]
//     counter += 1
//     if (total > 10) {
//         console.log('finish', total);
//         break;
//     } 
//     console.log(counter);
// }


// 5
// Дан массив с числами. Найдите сумму первых N 
// элементов до первого нуля.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем 
// первые 3 элемента, так как дальше стоит 
// элемент с числом 0

// function amount(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === 0) {
//             return result
//         } else {
//             result += array[i]
//         }
//     }
//     return result
// }

// console.log(amount([1, 2, 3, 0, 4, 5, 6]));


// 6
// // Напишите программу на JavaScript, которая 
// принимает число в качестве входных данных 
// и вставляет
// тире (-) между каждыми двумя четными числами. 
// Например,
// если вы принимаете 025468, вывод 
// должен быть 254 - 6 - 8.
// let str = '025468';

// function newArray(str) {
//     let array = [str[0]]
//     for (let i = 1; i < str.length; i += 1) {
//         let previousNumber = +str[i - 1];
//         let nextNumber = Number(str[i]);
        
//         if (previousNumber % 2 === 0 && nextNumber % 2 === 0) {
//           array.push('-' + nextNumber) 
//         } else {
//             array.push(nextNumber)
//        }
//     }
//     return array.join('')
// };
// console.log(newArray(str));

// 7
// Напишите программу на JavaScript, чтобы найти наиболее 
// частый элемент массива.
// Пример массива : const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Пример вывода : а (5 раз)
// const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// function newArr(elem) {
//     let key = {};
//     for (let i = 0; i < elem.length; i += 1) {
        
//         if (key[elem[i]]) {
//            key[elem[i]] += 1 
//         } else {
//             key[elem[i]] = 1;
//         }
//     }
//     let maxValue = Math.max(...Object.values(key))
//     let result = ''
//     for (const element in key) {
        
//         if (key[element] === maxValue) {
//             result = element
//             break;
//         }
//     }
//     return `${result} (${maxValue} раз)`
// }
// console.log(newArr(arr2));

// 8
// // Напишите программу на JavaScript, которая печатает 
// элементы следующего массива.
// Примечание. Используйте вложенные циклы.
// Пример массива: const arr3 = [[1, 2, 1, 24], 
// [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Пример вывода :
// "row 0"
// "1"
// "2"
// "1"
// "24"
// "row 1"

// const arr3 = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];

// function printItem (arr) {
//   arr.forEach(element => {
//       element.forEach(item => {
//           console.log(item);
//       })
//   })
// }
// console.log(printItem (arr3));

// 9
// //Напишите программу на JavaScript для вычисления суммы и 
// произведения массива целых чисел.

//Пример вывода: Sum: 21 Product: 720
// const arr4 = [1, 2, 3, 4, 5, 6];

// function resultArray (array) {
//     let sum = 0;
//     let multiply = 1;
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i];
//         multiply *= array[i];
//     }
//     return `Sum: ${sum}. Product ${multiply}`
// }
// console.log(resultArray (arr4));


// 10
// //Напишите программу на JavaScript для добавления 
// элементов в пустой массив и отображения элементов.
// Element 0 = 25
// Element 1 = 258
// Element 2 = 87
/* <input type="text" id="text1"></input>
<input type="button" id="button1" value="Add"></input>
<input type="button" id="button2" value="Display"></input>
<ul id="Result"></ul>  */

// const textRef = document.querySelector('#text1')
// const btn1Ref = document.querySelector('#button1')
// const btn2Ref = document.querySelector('#button2')
// const resultRef = document.querySelector('#Result')

// let resultArr = []

// btn1Ref.addEventListener('click', valueText)
// btn2Ref.addEventListener('click', displayValue)

// function valueText() {
//     console.log(textRef.value);
//     resultArr.push(textRef.value);
//     textRef.value = ''
// }

// function displayValue() {
//     let markup = resultArr.map((currentValue, index) => {
//         return `<li>Element ${index} = ${currentValue}</li>`
//     }).join('')
//     resultRef.innerHTML = markup
// }

// 11
// Напишите функцию JavaScript для преобразования суммы в монеты.
// Пример функции : количество токоинов 
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
// Здесь 46 сумма. и 25, 10, 5, 2, 1 - монеты.
// Выход : 25, 10, 10, 1
