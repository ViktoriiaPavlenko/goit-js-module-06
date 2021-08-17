// let myName = 'Viktoriia'
// console.log(myName);

// function changeValue(value) {
//     return myName = value
// }
// changeValue('Emma')
// console.log(myName);

// -------
// const scores = [13, 12, 14, 16]

// function getBestRsult(results) {
//     // console.log(...results);
//     // console.log(Math.max(...results));
//     return results = Math.max(...results)
// }
// console.log(getBestRsult(scores));

// -------
// const numbers = [1, 2, 3, 4, 5]

// function updateArray(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         // console.log(arr);
//         arr[i] += 1
//     }
//     return arr
// }
// console.log(updateArray(numbers));


// 
// array.method(callback)
//        elem, index, array
// callback = () => {}
// array.mthod((elem, index, array) => {})


// 
// ===== array.forEach() => undefined

// const numbers = [1, 2, 3, 4, 5]
// console.log("исходный массив", numbers);

// const newArr = []
// const forEachResult = numbers.forEach((num) => {
//     console.log(num + 1);
//     newArr.push(num + 1)
//     return num // все равно ничего не возвращает
// })
// console.log(forEachResult);
// console.log(newArr);



// ===== array.map() => всегда массив той же длины, что и исходный

// const numbers = [1, 2, 3, 4, 5]

// const mapResult = numbers.map((item) => {
//     console.log(item);
//     return item + 1
// })
// console.log(mapResult);
// console.log("исходный массив", numbers);
// console.log(mapResult === numbers);


// ===== array.filter() => всегда массив, но только тех элементов, что прошли проверку

// const numbers = [1, 2, 3, 4, 5]

// const filterResult = numbers.filter((elem) => {
//     console.log(elem);
//     return elem > 2 && elem < 5
// })
// console.log(filterResult);


// ===== array.find => только один элемент массива, т.е. первое совпадение с условием

// const numbers = [1, 2, 3, 4, 5]

// const findResult = numbers.find((i) => {
//     // console.log(i);
//     return i > 2 && i < 5
// })
// console.log('findResult', findResult);


// ===== array.reduce() => швейцарский нож ({}, [], 0, '')

// const numbers = [1, 2, 3, 4, 5]

// const reduceResultArray = numbers.reduce((acc, elem) => {
//     // console.log(acc, elem);
//     acc.push(elem + 1)
//     return acc
// }, [])
// console.log(reduceResultArray);
// console.log(reduceResultArray === numbers); //false

// 
// const reduceResultObject = numbers.reduce((newObject, number) => {
//     console.log(newObject, number);
//     newObject[number] = number
//     return newObject
// }, {})
// console.log("reduceResultObject", reduceResultObject);


// const reduceResultNumber = numbers.reduce((total, num) => {
//     console.log(total, num);
//     total += num
//     return total
// }, 0)
// console.log("reduceResultNumber", reduceResultNumber);

// ===== array.every() => true || false, проверку должны пройти все элементи        (&&)

// const numbers = [1, 2, 3, 4, 5]
// const everyResult = numbers.every((elem) => {
//     console.log(elem);
//     return elem > 0
// })
// console.log("everyResult", everyResult);


// ======= array.some() => true || false, проверку должен пройти хотя бы один элемент (||)

// const numbers = [1, 2, 3, 4, 5]
// const someResult = numbers.some((elem) => {
//     console.log(elem);
//     return elem > 5
// })
// console.log("someResult", someResult);


// ====== array.sort() => мутирует исходный массив
// const fruits = ['banana', 'apples', 'oranges']

// const sortFruits = fruits.sort().reverse()
// console.log(sortFruits);
// console.log(fruits);
// console.log(fruits === sortFruits);

// 
// const ages = [54, 78, 18, 100, 3]

// const sortAges = ages.sort((min, max) => {
//     // return min - max
//     return max - min
// })
// console.log(sortAges);