(function () {
    'use strict';

    const theButton = document.querySelector('#theButton');
    let num = 1;

    theButton.addEventListener('click', addButton());

    function addButton() {
        const myNewButton = document.createElement('button');
        document.body.appendChild(myNewButton);
        myNewButton.innerText = num++;
        myNewButton.addEventListener('click', addButton());
    }
}());