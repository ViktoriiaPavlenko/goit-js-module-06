// 1
// Используя метод map() напишите код, который получает из 
// массива строк новый массив, содержащий их длины.
// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map((el) => el.length)

// console.log( vegetableLength ); // 7,4,7,8

// 2
// Напишите функцию JavaScript, чтобы проверить, является 
// ли `input` массивом или нет.

// function is_array(value) {
//   return Array.isArray(value)
// }

// console.log (is_array ( 'w3resource')); //false
// console.log (is_array ([1, 2, 4, 0])); //true

// 3
// Напишите функцию JavaScript для клонирования массива. 

// let array1 = [1, 2, 4, 0]
// let array2 = [1, 2, [4, 0]]

// 1 variant
// function array_Clone(array) {
//   return array.slice(0)
// }

// 2 variant
// function array_Clone(array) {
//     return [...array]
// }

// console.log (array_Clone (array1) === array1);
// console.log(array_Clone(array2));

// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// 4
//  Удаление ложных значений из массива
// Напишите функцию filterFalse(arr), которая очищает массив 
// от ложных(false) значений: false, null, undefined, 0, –0, 
// NaN и ""(пустя строка).

// const array = [NaN, 0, 77, false, -17, '',undefined, 99, null];
// function filterFalse(arr) {
//    return arr.filter(el => el)
// }
// console.log(filterFalse(array));
// document.writeln(filterFalse(array)); // [ 77, -17, 99 ]


// 5
// Напишите код, который отсортирует массив объектов litmir 
// по значению свойства title.

// var litmir = [ 
//    { author: 'Хэленка', title: 'Улетела сказка'},
//    { author: 'Коул Кресли', title: 'Восстание Аркан'},
//    { author: 'Райчел Мид', title: 'Золотая лилия'}
// ];

// 1 variant
// const newLitmir = [...litmir].sort((a, b) => a.title.localeCompare(b.title))

// 2 variant
// const newLitmir = litmir.slice()
// newLitmir.sort((a, b) => {
//     if (a.title < b.title) return - 1
//     else if (a.title > b.title) return 1
//     else return 0
// })
// console.log(newLitmir);
// Восстание Аркан Золотая лилия Улетела сказка


// 6
// Напишите функцию findCouple(array, number), которая 
// ищет в массиве все пары целых чисел, сумма которых 
// равна заданному значению.

// var number = 5;
// var array = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

// function findCouple(array, number) {
//     let result = []
//     for (let i = 0; i < array.length; i += 1) {
//         const element1 = array[i]
//         if (i < array.length - 1) {
//             for (let j = i + 1; j < array.length; j += 1) {
//                 const element = array[j]
//                 if (element1 + element === number) {
//                     result.push([element1, element])
//                 }
//             }
//         }
        
//     }
//   return result
// }

// console.log(findCouple(array, number));
// Ваша пара чисел: 1 + 4,Ваша пара чисел: 2 + 3


// 7
// Напишите функцию startingSubstring(arr), которая возвращает
//  общую начальную подстроку в массиве строк.

// var arr1 = ['Капуста', 'Капитал'];
// var arr2 = ['Репа', 'Редиска'];
// function startingSubstring(arr) {
//  let result = ''
//     for (let i = 0; i < arr[0].length; i += 1) {
//         // console.log(arr[0][i]);
//         if (arr[0][i] === arr[1][i]) {
//            result += arr[0][i] 
//         }
//     }
//     return result

// }

// // var res1 = ;
// // var res2 = ;

// console.log(startingSubstring(arr1)); // Кап
// console.log(startingSubstring(arr2)); // Ре


// 8
// изменить стиль текста по клике на кноку
// const text = document.querySelector('#text')
// const btn = document.querySelector('#jsstyle')

// btn.addEventListener('click', onClickBtn)

// function onClickBtn() {
//     text.style.color = 'red'
//     text.style.fontSize = '30px'
// }


// 9
// по клику на кнопку - вывести имя в консоль

// const form1 = document.querySelector('#form1')
// const btn = document.querySelector('input[type="submit"]')
// const name = document.querySelector('input[name="fname"]')
// const surname = document.querySelector('input[name="lname"]')

// btn.addEventListener('click', onGetFormValue)

// function onGetFormValue(event) {
//     event.preventDefault()
//     // console.log(event);
//     console.log(name.value, surname.value);
// }

// 2variant
// const form1 = document.querySelector('#form1')
// const btn = document.querySelector('input[type="submit"]')

// btn.addEventListener('click', onGetFormValue)

// function onGetFormValue(event) {
//     event.preventDefault()
    
//     const formData = new FormData(form1)
//     formData.forEach((key, value) => {
//         console.log(key, value);
//     })
// }


// 10

// const btn = document.querySelector('#button')
// const link = document.querySelector('#w3r')

// btn.addEventListener('click', getAttributes)

// function getAttributes() {
//     // console.log(link.attributes);
//     const values = Object.values(link.attributes)
//     console.log(values);
//     values.forEach(el => {
//         console.log(el);
//     })
// }


// 11
// есть обьект, есть разметка которая состоит из img и кнопки. По клику на кнопку 
// мы подгружаем изображение из обьекта данных в тег img
// var theImages = [{
//     src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
//     width: "240",
//     height: "160"
// }, {
//     src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
//     width: "320",
//     height: "195"
// }, {
//     src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
//     width: "500",
//     height: "343"
// }];

// const img = document.querySelector('#box-image')
// const btn = document.querySelector('#btn1')

// btn.addEventListener('click', onClickBtn)

// function onClickBtn() {
//     const index = getRandomName(theImages.length - 1)
    
//     const { src, width, height } = theImages[index]
//     img.src = src
//     img.width = width
//     img.height = height
// }

// function getRandomName(num) {
//     return Math.floor(Math.random() * num + 1)
// }
