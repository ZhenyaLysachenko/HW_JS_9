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
