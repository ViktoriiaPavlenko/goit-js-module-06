// 1
// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// // Ваш код
//     return str.split(' ')

// };

// var arr = stringToarray(str);

// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// 2
// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

// // Ваш код
//   return str.slice(0, length)
// };

// document.writeln(delete_characters(str, 7));

// console.log(delete_characters(str, 7));

// 3
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {

// Ваш код
//   return arr.slice()   // 1й вариант
    // return [...arr]    // 2й вариант
//   let arr2 = []           // 3й вариант
//     for (let i = 0; i < arr.length; i += 1) {
//         arr2.push(arr[i])
//     }
//     return arr2;
// }

// var arr1 = arrayClone(vegetables);

// document.writeln(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log(arr1);
// console.log(arr1 === vegetables);



// 4
// Напишите код, который преобразовывает и объединяет все
// элементы массива в одно строковое значение.Элементы
// массива будут разделены запятой.Получите результат
// двумя разными методами.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// 1й вариант
// vegetables.join(',')
// console.log(vegetables.join(','));

// 2й вариант
// let str = ""
// let str1 = ","
// for (let i = 0; i < vegetables.length; i += 1) {
//     if (i === (vegetables.length - 1)) {
//         str1 = ''
//     }
//     str += vegetables[i] + str1
// }
// console.log(str);


// 5
// Напишите функцию insert_dash(str), которая принимает
// строку str в качестве аргумента и вставляет тире(-)
// между словами.При этом все символы строки необходимо
// перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
// // Ваш код
//     str = str.toUpperCase()
//     let a = str.split(' ')
//     return a.join('-')
    
// }

// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// console.log(insert_dash(str));


// 6
// Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки
// из нижнего регистра в верхний.

// var str = "string not starting with capital";  
 
// function cursive_letter(str) {
//     let b = str[0].toUpperCase()
//     let c = str.slice(1)
//     return b + c
// }

// // document.writeln(cursive_letter(str)); // "String not starting with capital"
// console.log(cursive_letter(str));


// 7
// Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";  
 
// function capitalize(str) {
//     let a = str.split(' ')
//     let array = []
//     for (let i = 0; i < a.length; i += 1) {
//        let b = a[i][0].toUpperCase()
//        let c = a[i].slice(1) 
//        array.push(b + c)
//     }
//   return array.join(' ')
// }

// // document.writeln(capitalize(str)); // "Каждый Охотник Желает Знать"
// console.log(capitalize(str));


// 8

// Напишите функцию change_register(str), которая принимает
// в качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный.Например, если вводится «КаЖдЫй
// ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
 
// function change_register(str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i += 1) {
//         let a = str[i]
        
//         if (a.toUpperCase() === a) {

//             newStr += a.toLowerCase()
//         } else {
//             newStr += a.toUpperCase()
//         }
//     }
//     return newStr

// }

// // document.writeln(change_register(str));
// console.log(change_register(str));


// 9

// Пользователь вводит многозначное число через prompt.
// Напишите функцию colonOdd(num), которая принимает
// число num в качестве аргумента и вставляет двоеточие(: )
// между двумя нечетными числами.Например, если вводится
// число 55639217, то на выход должно быть 5: 563: 921: 7.

// const num = prompt('Введите число', 55);

// function colonOdd(num) {
//     let str = String(num)
//     let result = [str[0]]
//     for (let i = 1; i < str.length; i += 1) {
//         if (str[i] % 2 !== 0 && str[i - 1] % 2 !== 0) {
//             result.push( ':' + str[i]) 
//         } else {
//             result.push(str[i]) 
//         }
//     }
//   return result.join('')
// }

// // document.writeln(colonOdd(num)); // 5:5
// console.log(colonOdd(55639217));


// 10

// Напишите функцию removeDuplicates(arr), которая возвращает
// массив, в котором удалены повторяющиеся элементы из
// массива arr(игнорируйте чувствительность к регистру).

// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];
// 1й вариант
// function removeDuplicates(arr) {
//     let ret = []
//     for (let i = 0; i < arr.length; i += 1) {
//         if (!ret.includes(arr[i])) {
//             ret.push(arr[i])
//         }
//     }
//     return ret
// }

// 2й вариант
// let a = new Set([1, 1, 2, 2, 3])
// console.log(a);

// function removeDuplicates(arr) {
//     return [...new Set(arr)]
// }


// // document.writeln(result);
// console.log(removeDuplicates(arr));




// 11

// Напишите функцию zeros(num, len), которая дополняет нулями
// до указаной длины числовое значение с дополнительным
// знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros (num, len) {
//     let str = String(num)
//     let result = len - str.length
//     let newStr = ''
//     for (let i = 0; i < result; i += 1) {
//         newStr += '0'
//     }
//   return newStr + str
// };
// console.log(zeros(33, 4));
// document.writeln(zeros(145, 5)); // -00145
// document.writeln(zeros(33, 4));  // +0033 
// document.writeln(zeros(33, 4));       // 0033



// 12

// Напишите функцию repeatStr(str, n), которая вовращает
// строку повторяемую определённое количество раз.

// function repeatStr(str, n) { 
//     let newStr = ''
//     for (let i = 0; i < n; i += 1) {
//         newStr += str
//     }
//     return newStr
// }

// document.writeln(repeatStr('Hello!', 3)); // Hello!Hello!Hello!
// console.log(repeatStr('Hello!', 3));


// 13

// Напишите функцию find_longest_word(str), которая принимает
// строку в качестве параметра и находит самое длинное слово в
// строке.

// function find_longest_word(str) {
//     let arr = str.split(' ')
//     let str2 = arr[0]
//     for (let i = 1; i < arr.length; i += 1) {
//         if (arr[i].length > str2.length) {
//              str2 = arr[i]
//         }
//     }
//     return str2
// }
// console.log(find_longest_word('Web Development Tutorial'));
// document.writeln(find_longest_word('Web Development Tutorial')); // "Development"



// 14

// Напишите функцию JavaScript, которая переворачивает число.


// function reverse_a_number(n) {
//     n = String(n)
//     let arr = n.split('').reverse().join('')
//      return arr

// };
// console.log(reverse_a_number(258961));
// document.writeln(reverse_a_number(258961)); // 169852


// 15

// Напишите функцию JavaScript, которая возвращает переданную
// строку с буквами в алфавитном порядке.
// Пример строки: 'alphabetical'.
// Ожидаемый результат: 'aaabcehillpt'

// function alphabet_order(str) {
//     let arr = str.split('').sort().join('')
//     return arr
// }
// console.log(alphabet_order("alphabetical"));
// document.writeln(alphabet_order("alphabetical")); // "aaabcehillpt"



// 16

// Напишите функцию matrix(n), которая возвращает единичную
// матрицу n строк и n столбцов.
// Пример вывода:
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1


// function matrix(n) {
//     let arr = []
//     for (let i = 0; i < n; i += 1) {
//         for (let j = 0; j < n; j += 1){
//             if (i === j) {
//                 arr[i][j].push(1)
//             } else {
//                 arr[i][j].push(0)
//             }
//         }
//     }
//   return arr
// };

// matrix(4);
// console.log(matrix(4));


// function matrix(n) {
//     let arr = []
//     for (let i = 0; i < n; i += 1) {
//         for (let j = 0; j < n; j += 1){
//             if (i === j) {
//                 arr.push(1)
//             } else {
//                 arr.push(0)
//             }
//         }
//         arr.push('\n')
//     }
//   return arr.join('')
// };


// console.log(matrix(4));


// 17

// Напишите функцию insensitive_search(str1, str2),
//     которая осуществляет поиск подстроки str2 в
// строкеstr1 без учёта регистра символов.

function insensitive_search(str1, str2) {
    let arr = str1.toLowerCase().split(' ').includes(str2.toLowerCase())
    return arr
    // 2ий вариант 
    // for (let i = 0; i < arr.length; i += 1) {
    //     if (arr[i].toLowerCase() === str2.toLowerCase()) {
    //         return true
    //     } 
    // }
    // return false
};
console.log(insensitive_search('Изучаю JavaScript', 'javascript'));
// document.writeln(insensitive_search('Изучаю JavaScript', 'javascript')); 
// // Соответствует 
// document.writeln(insensitive_search('Изучаю JavaScript', 'javascriptS'));
// // Не соответствует



// 18

// Напишите функцию path(pathname), которая вовращает имя
// файла(подстрока после последнего символа "\" ) из полного 
// пути к файлу.

var pathname = "/home/user/dir/file.txt";

function path(pathname) { 
//    let arr = pathname.split('/').slice(-1)
    let arr = pathname.split('/').pop()
   return arr
};
console.log(path(pathname));
// document.writeln(path(pathname)); // file.txt


