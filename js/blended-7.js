// 1
// Написать функцию, которой передаем имя, и она возраващает 
// приветствие в зависимости от времени
// суток (Доброе утро\день\вечер\ночи Иван)

// function greetingTime(name) {
//     const time = new Date()
//     const hours = time.getHours()

//     if (hours >= 6 && hours < 12) {
//         console.log(`Good morning, ${name}!`);
//     } else if (hours >= 12 && hours <= 18) {
//         console.log(`Good afternoon, ${name}!`);
//     } else if (hours > 18 && hours <= 22) {
//         console.log(`Good evening, ${name}!`);
//     } else {
//         console.log(`Good night, ${name}!`);
//     }
// }
// greetingTime('Vika')

// 2
// Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста
// (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый

// function getYears() {
//     let message = ''
//     for (let i = 1; i < 101; i += 1) {
//         if (i <= 17) {
//            message = `${i} - ребенок`
//         } else if (i > 17 && i <= 30) {
//             message = `${i} - молодой`
//         } else if (i > 30 && i <= 55){
//             message = `${i} - зрелый`
//         } else {
//             message = `${i} - опытный`
//         }
//         console.log(message);
//     }
// }
// getYears();

// 3
// Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение
// (Иван имеет возраст 44 и он зрелый).
// А также вызови внутри своей функции, функцию из прошлого задания

// function getYears(name, age) {
//     let message = ''
//     // for (let i = 1; i < 101; i += 1) {
//         if (age <= 17) {
//            message = `${name} имеет возраст ${age} и он ребенок`
//         } else if (age > 17 && age <= 30) {
//             message = `${name} имеет возраст ${age} и он молодой`
//         } else if (age > 30 && age <= 55){
//             message = `${name} имеет возраст ${age} и он  зрелый`
//         } else {
//             message = `${name} имеет возраст ${age} и он  опытный`
//         }
//         return message
//     // }
// }
// console.log(getYears('Vika', 24));

// 4
// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
// где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

// 1 variant
// function newArr(arr) {
//     return arr.filter((num) => num % 5 === 0)
// }
// console.log(newArr([1,2,5,12,15,21]));


// 2 variant
// function newArr(arr) {
//     let result = []
//     for (const el of arr) {
//         if (el % 5 === 0) {
//             result.push(el)
//         }
//     }
//     return result
// }
// console.log(newArr([1,2,5,12,15,21]));


// 5
// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5]
// и функция возращает среднее арифметическое, (округлить результат до десятых)

// function getNumber(array) {
//     let result = 0
    
//   for (const el of array) {
//     result += el
//     }

//     let num = result / array.length
//     // return num.toFixed(1) // 1 variant
//     return Math.floor(num * 10) / 10 // 2 variant
// }
// console.log(getNumber([1,2,3,4,5,7.39]));


// 6
// // Написать функцию, которая принимает массив чисел, 
// например[1, 2, 3, 4, 5], и переносит первый элемент
// массива в конец, попробуй несколькими способами сделать

// 1 variant
// function newArr(arr) {
//     let arr2 = []
//     for (let i = 1; i < arr.length; i += 1) {
//         arr2.push(arr[i])
//     }
//     arr2.push(arr[0])
//     return arr2
// }
// console.log(newArr([1, 2, 3, 4, 5]));

// 2 variant
// function newArr(arr) {
//     let arr2 = [...arr]
//     let num = arr2.shift()
//     arr2.push(num)
//     return arr2
// }
// console.log(newArr([1, 2, 3, 4, 5]));


// 7 ========== TO DO LIST =========

const refs = {
    input: document.querySelector('#myInput'),
    addBtn: document.querySelector('.addBtn'),
    myUL: document.querySelector('#myUL')
}

refs.addBtn.addEventListener('click', addString);
refs.myUL.addEventListener('click', classСheck)

function addString(e) {
    if (!refs.input.value) return
    addLocalStorage(refs.input.value)
    addItem()
    refs.input.value = ''
}

function addLocalStorage(value) {
    const obj = {
        text: value,
        result: false 
    }
    let str = localStorage.getItem('data')
    const array = str ? JSON.parse(str) : []
    array.push(obj)
    const data = localStorage.setItem('data', JSON.stringify(array))
}

function getDataLocaleStorage() {
    const item = localStorage.getItem('data')
    return JSON.parse(item)
}

function addItem() {
    const array = getDataLocaleStorage()
    const markup = array.map(({ text, result, }, index) => {
        let classEl = result ? "checked" : ''
        return `<li class="${classEl}" data-index='${index}'>${text}
        <button type="button" data-index='${index}' class="btn-remove">Remove</button>
        </li>`
    }).join('')
    
    refs.myUL.innerHTML = markup
}

function classСheck({ target }) {
    let array = getDataLocaleStorage()
    let idx
    if (target.classList.contains('btn-remove')) {
        idx = Number(target.parentElement.getAttribute('data-index'))
        array.splice(idx, 1)
    } else if (target.tagName === 'LI') {
        idx = Number(target.getAttribute('data-index'))
        array[idx].result = !array[idx].result
    }
    localStorage.setItem('data', JSON.stringify(array))

    addItem()
}
addItem()