// 1
// const btn = document.querySelector('#hider')
// const text = document.querySelector('#text')

// btn.addEventListener('click', onBtnClick)
// // function onBtnClick() {
// //     text.style.display = "none"
// // }
// function onBtnClick() {
//     text.classList.add("hidden")
// }


// 2
// const container = document.getElementsByTagName('div')
// const container2 = document.querySelectorAll('div')
// console.log(container);
// console.log(container2);

// const list = document.getElementsByClassName('list')
// // console.log(list);
// console.dir(list[0]);
// console.log(list[0].children[1]);


// 3
// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.

// const form = document.forms
// console.log(form);

// const label = form[0].children[0]
// console.log(label);
// function searchLabels(forms) {
//     let counter = 0
//     Array.from(forms).forEach(form => {
//         [...form.children].forEach(label => {
//             counter += label.querySelectorAll('label').length
//         })
//     })
//     return counter
// }
// console.log(searchLabels(form));


// const table = document.getElementsByTagName('table')[0]
// console.log(table.rows[0].children[0]);
// console.dir(table.rows[0].cells);


// function formNameSearch(forms) {
//     return [...forms].filter(form => {
//         return form.getAttribute('name') === 'search'
//     })
// }
// console.log(formNameSearch(form));


// 4
//Напишите код, который выделит красным цветом все ячейки в 
// таблице по диагонали.
//Вам нужно получить из таблицы <table> все 
// диагональные < td > и выделить их, используя код:
// let table = document.querySelector("table");
// console.log(table.rows);

// function paintRow(rows) {
//     [...rows].forEach((el, index) => {
//         el.cells[index].style.backgroundColor = 'red'
//          console.log(el);
//      })
// }
// console.log(paintRow(table.rows));


// // 5
// const ball = document.querySelector('.ball')
// const field = document.querySelector('.football-field')
// console.log(field.getBoundingClientRect()); //этот метод выводит координаты елемента на странице

// field.addEventListener('click', onClick);

// let offsetX = ball.clientWidth / 2
// let offsetY = ball.clientHeight / 2

// function onClick({clientX, clientY}) {
//     console.log(`x = ${clientX}, y = ${clientY}`);
//     ball.style.left = (clientX - offsetX) + 'px';
//     ball.style.top = (clientY - offsetY) + 'px';
    
// }
// console.dir(ball);
// console.log(offsetX);
// console.log(offsetY);



// 6
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.getElementById('container');

function createTree(container, data) {
    const result = []
    const list = document.createElement('ul');

    for (const key in data) {
        const item = document.createElement('li');
        item.textContent = key;
        list.append(item)
    }
    container.append(list)
}
createTree(container, data); // создаёт дерево в контейнере

