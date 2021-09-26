// module 1
// 1 
// Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// function yearToCheck(year) {
//     if (year % 4 === 0) {
//         return "Высокосный"
//     }
//     return "Не высокосный"
// }
// console.log(yearToCheck(2029));

// 2
// Написати програму де компютер загадає число від 1 до 10
// і запропонує користувачу вгадати його Користувач вводить
// свій варіант і отримує результат(Виграв чи ні) Вивести
// результат в форматі "Вітаю ви вгадали число (тут варіант
// компютера) " або "Ви програли, компютер загадав(тут варіант
// компютера)"

// function guessTheNumber() {
//     let comp = Math.ceil(Math.random() * (10 - 1) + 1)
//     let user = prompt('Введите число от 1 до 10')
//     console.log(comp, user)

//     if (comp == user) return `You won`
//     return `You lose`
// }
// console.log(guessTheNumber());

// 3
// Написати програму яка буде знаходити суму, різницю, добуток,
// частку двох чисел. Користувач вводить 2 числа потім вводить 
// знак операції і отримує результат в форматі "Сума чисел a i b =
// результат" (такий шаблон для кожної відповіді)

// function calculator() {
//   let num1 = prompt('Enter the first number')
//   let num2 = prompt('Enter the second number')
//   let symbol = prompt('Enter the symbol')
//     let total = 0
//     // console.log(num1, num2, symbol);

//     switch (symbol) {
//         case '+':
//             total = Number(num1) + (num2)
//             break;
//         case '-':
//             total = Number(num1) - (num2)
//             break;
//         case '*':
//             total = Number(num1) * (num2)
//             break;
//         case '/':
//             total = Number(num1) / (num2)
//             break;
//         default:
//             console.error(`ERROR`)
//     }
//     return total
// }
// console.log('result', calculator());

// 4
// Написати програму яка буде переводити температуру 
// з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії

// function temperature() {
//     let degree = prompt('Enter the degree in Fahrenheit')
//     let result = (degree - 32) / 1.8
//     return `The temperature in Celsius is ${result}`
// }
// console.log(temperature()); // 5 цельсия - 41 фаренгейта

// °C=(°F - 32) : 1,8

// 5
// Написати програму яка перевіряє чи введене число  
// потрапляє в діапазон від 55 до 99 включно

// function checkTheNumber(num) {
//     if (num >= 55 && num <= 99) {
//        return true
//     }
//     return false
// }
// console.log(checkTheNumber(54));

// 6
// Написати програму де користувач вводить 3 числа, після 
// вводу всіх трьох чисел йому на екрані показується найбільше
// з них. Додатково перевіряти чи це взагалі числа

// function getTheBiggestNumber() {

//     let number1 = prompt('Enter your first number')
//     let number2 = prompt('Enter your second number')
//     let number3 = prompt('Enter your third number')
    
//     // if (Number.isInteger(number1) && Number.isInteger(number2) && Number.isInteger(number3)) {
//     //   return Math.max(number1, number2, number3)
//     // }
//     return Math.max(number1, number2, number3)
// }
// console.log(getTheBiggestNumber());

// 7
// Написати програму яка переведе введену оцінку студента до
// болонського формату 89 - 100 це A 75 - 88 це В 
// 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// function checkTheMark() {
//     let mark = prompt('Enter your mark')

//     if (mark <= 100 && mark >= 89) {
//         return 'A'
//     } else if (mark <= 88 && mark >= 75) {
//         return 'B'
//     } else if (mark <= 74 && mark >= 60) {
//         return 'C'
//     } else if (mark <= 59 && mark >= 45) {
//         return 'D'
//     } else if (mark <= 44 && mark >= 20) {
//         return 'E'
//     } else if (mark < 20){
//         return 'F'
//     }
//     return 'Such a mark doesn`t exist'
// }
// console.log(checkTheMark());

// 8
// Написати програму яка отримає від користувача число 
// (кількість хвилин) і виведе на екран строку в форматі 
// години і хвилини. Приклад 70 покаже 1:10
// 450 покаже 7:30 
// 1441 покаже 24:1

// function getTheTime() {
//     let time = prompt('Enter the number of minutes')
//     return Math.floor(time / 60) + ':' + (time % 60)
// }
// console.log(getTheTime());

// 9
// Написати гру камінь ножиці папір. Де компютер загадує 
// своє значення потім користувач вводить свій варіант і 
// далі ми бачимо результат на екpані хто виграв

// var userChoice = prompt("Rock, Paper, or Scissors");
// var computerChoice = Math.random();

// let rock = "rock"
// let paper = "paper"
// let scissors = "scissors"
    
// var compchoice = function ()
// { 
//     if (computerChoice <= 0.34)
//     {
//         return computerChoice = rock;
//     } 
//     else if(computerChoice <= 0.67 && computerChoice >= 0.35)
//     {
//         return computerChoice = paper;
//     }
//     if (computerChoice >= 0.68)
//     {
//         return computerChoice = scissors;
//     }

// };

// var compare = function (choice1, choice2)
// {
//     choice1 = choice1.toLowerCase()
//     choice2 = choice2.toLowerCase()
    
//     if (computerChoice === rock || paper || scissors)
//     {
//         if (choice1 === choice2)
//         {
//             return alert("The result is a tie!");
//         }

//         else if (choice1 === rock)
//         {
//             if (choice2 === scissors)
//             {
//                 return alert("Rock crushes Scissors!");
//             }
//             else if (choice2 === paper)
//             {
//                 return alert("Paper covers Rock!");
//             }
//         }
//         if (choice1 === scissors)
//         {
//             if (choice2 === rock)
//             {
//                 return alert("Rock crushes Scissors!");
//             }
//             else if (choice2 === paper)
//             {
//                 return alert("Scissors cuts Paper!");
//             }
//         }
//         else if (choice1 === paper)
//         {
//             if (choice2 === rock)
//             {
//                 return alert("Paper covers Rock!");
//             }
//             else if (choice2 === scissors)
//             {
//                 return alert("Scissors cuts Paper!");
//             }
//         }
//     }
//     else 
//     {
//         return alert("Please type Rock, Paper, or Scissors next           time");
//     }
// };

// compchoice();

// compare(userChoice, computerChoice);



// module 2
// 1 
// Написати ф-ю capitalize яка буде приймати строку і буде 
// вертати нову строку де кожне слово буде починатися 
// з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// function capitalize(str) {
//     let a = str.split(' ')
//     let array = []
//     for (let i = 0; i < a.length; i += 1) {
//         let b = a[i][0].toUpperCase()
//         let c = a[i].slice(1)
//         array.push(b + c)
//     }
//     return array.join(" ")
// }
// console.log(capitalize('the quick brown fox'));

// 2
// Написати ф-ю countVowels яка буде приймати строку і буде 
// вертати кількість голосних літер.aeiouAEIOU - рядок
// з голосними в англ алфавіті

// function countVowels(str) {
//     let a = str.toLowerCase().split('')
//     let result = 0
    
//     for (let i = 0; i < a.length; i += 1) {
//         if (a[i].includes('a')
//             || a[i].includes('e')
//             || a[i].includes('i')
//             || a[i].includes('o')
//             || a[i].includes('u')) {
//             result += 1
//         }
//     }
//   return result
// }

// console.log(countVowels('the quick brown fox')); // 5

// 3
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem)
// і велечину базового шрифта("20px") і вертає конвертований
// розмір в пікселях

// function ConvertIntoPixels(a, b) {
    
// }
// console.log(ConvertIntoPixels(a, b));

// 4
// Написати ф-ю що приймає число (температура в цельсіях)
// і виводить результат в фаренгейтах

// function temperature() {
//     let degree = prompt('Enter the degree in Celsius')
//     let result = (degree * 1.8) + 32
//     return `The temperature in Fahrenheit is ${result}`
// }
// console.log(temperature()); // 5 цельсия - 41 фаренгейта

// ℉=(℃*1.8)+32


// 5
// Написати ф-ю calculateDogAge яка приймає один параметр - 
// вік собачки.Результатом її роботи буде вік перевединий 
// на людський(1 рік собаки це 7 років в людини)

// function calculateDogAge(age) {
//     return age * 7  
// }
// console.log(calculateDogAge(9.5));

// 6
// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і 
// повертає колір в форматі hex

// 1й вариант
// function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }

// function rgb2hex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
// console.log(rgb2hex(0, 0, 0));

// 2й вариант
// function rgbToHex (r, g, b){ 
//     r = r.toString(16);
//     g = g.toString(16);
//     b = b.toString(16);
//     if (r.length == 1) r = '0' + r;
//     if (g.length == 1) g = '0' + g;
//     if (b.length == 1) b = '0' + b;         

//     return '#'+(r + g + b).toUpperCase();
// }
    
// console.log(rgbToHex(128, 128, 128));


// 7
// Написати ф-ю яка приймає масив і видаляє 
// звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

// 1й вариант
// function nonUniqueElements(values) {
//   return values.filter(
//     (elem, idx, arr) =>
//       (arr.lastIndexOf(elem) !== idx || arr.indexOf(elem) !== idx) && true,
//   )
// }
// console.log(nonUniqueElements([1, 2, 3, 1, 3]));

// 2й вариант
// function nonUniqueElements(values) {
//   const myValues = []

//   for (let i = 0; i < values.length; i += 1) {
//     if (myValues[values[i]] === undefined) {
//       myValues[values[i]] = 0
//     }
//     myValues[values[i]] += 1
//   }
//   const result = []
//   for (let i = 0; i < values.length; i += 1) {
//     if (myValues[values[i]] > 1) {
//       result.push(values[i])
//     }
//   }
//   return result
// }
// console.log(nonUniqueElements([1, 2, 3, 1, 3]));

// 8
// Написати ф-ю median яка приймає масив і знаходить його медіану
// Медіана – це числове значення, яке ділить відсортований масив
// чисел на більшу і меншу половини.У відсортованому масиві з 
// непарним числом елементів медіана – це число в середині масиву.
// Для масиву з парним числом елементів, де нема ні одного елемента 
// точно посередині, медіана – це середнє значення двох чисел, 
// які знаходяться в середині масиву.В цій задачі заданий непустий
// масив натуральних чисел.Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

// 1й вариант
// function median(arr){
//   arr.sort(function(a, b){ return a - b; });
//   var i = arr.length / 2;
//   return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
// }
// console.log(median([3, 6, 10, 15, 20, 99]));
// console.log(median([1, 2, 3, 4, 5]));

// 2й вариант
// function median(arr){
//     arr.sort(function (a, b) { return a - b; });
//     let result = 0
//     let a = arr.length / 2
//     if (arr.length % 2 === 0) {
        
//         result = (arr[a - 1] + arr[a]) / 2
//     } else {
//         result = arr[Math.floor(a)]
//     }
//     return result
// }
// console.log(median([1, 2, 3, 4, 5]));
// console.log(median([3, 6, 10, 15, 20, 99]));
