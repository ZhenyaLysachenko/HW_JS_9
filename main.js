// 1 let div = document.createElement('div');

//  2 tagElement.insertAdjacentHTML(position, text);
//   Параметр  position - визначає позицію елемента що додається, 
//   щодо елемента, що викликав метод.
// 
//   "beforebegin": до відкриваючого тега.
//   "afterbegin": після відкриваючого тега.
//   "beforeend": перед закриваючим тегом .
//   "afterend": після закриваючого тега.

// 3   За допомогою методу remove()
//     Наприклад:
//     div.remove();  




function showElementsList(arr, parentUl = document.body) {

    let ul = document.createElement('ul');

    arr.forEach((elem) => {
        let li = document.createElement('li');
        li.append(elem);
        ul.append(li);
    });
    parentUl.prepend(ul);
}

showElementsList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"] );
