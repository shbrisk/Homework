(function () {
    'use strict';
    const startButton = document.querySelector('#Start');
    const page = document.querySelector('body');
    const colorTable = document.querySelector('#Table');


    function getcolorInfo(color, bgcolor) {
        const row = colorTable.insertRow();
        const timeCell = row.insertCell();
        timeCell.innerText = new Date().toLocaleDateString();
    }

    let interval;
    startButton.addEventListener('click', e => {
        if (e.target.innerText === 'Start') {
            interval = setInterval(rndmColor, 1);
            e.target.innerText = 'Stop';
        } else {
            clearInterval(interval);
            interval = null;
            e.target.innerText = 'Start';
        }
    });
    let index = 0;

    function color() {
        const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White', 'Gray', 'Cyan', 'Magenta', 'Turquoise', 'Lavender', 'Indigo', 'Gold', 'Silver', 'Bronze', 'Teal'
        ];
        document.body.style.color = colors[index++];
        document.body.style.backgroundColor = colors[index];
        if (index === colors.length) { index = 0; }
    }
    function rndmColor() {
        const color = getRandomColor();
        const bgcolor = getRandomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = bgcolor;
        getcolorInfo(color, bgcolor);
    }
    function getRandomColor() {
        let r = randomColorPicker();
        let g = randomColorPicker();
        let b = randomColorPicker();
        return `rgb(${r},${g},${b})`;
    }
    function randomColorPicker() {
        return Math.floor(Math.random() * 256);
    }

    let red = 0;
    let green = 0;
    let blue = 0;
    let round = 0;

    function bkColor() {
        /*switch (round) {
            case 0:
                if (blue === 0) {
                    blue = 255;
                    round++;
                }
                else {
                    blue--;
                }
                break;
            case 1:
                if (green === 0) {
                    green = 255;
                    round++;
                }
                else {
                    green--;
                }
                break;
            case 2:
                if (red === 0) {
                    red = 255;
                    round = 0;
                }
                else {
                    red--;
                }
        }*/
        if (red++ === 256) {
            red = 0;
            if (green++ === 256) {
                green = 0;
                if (blue++ === 256) {
                    blue = 0;
                }
            }
        }
        page.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

}());