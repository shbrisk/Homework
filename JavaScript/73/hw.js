(function () {
    'use strict';
    const startButton = document.querySelector('#Start');
    const page = document.querySelector('body');

    let red = 255;
    let green = 255;
    let blue = 255;
    let round = 0;

    function bkColor() {
        switch (round) {
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
        }
        page.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    let interval;
    startButton.addEventListener('click', e => {
        if (e.target.innerText === 'Start') {
            interval = setInterval(bkColor, 10);
            e.target.innerText = 'Stop';
        } else {
            clearInterval(interval);
            interval = null;
            e.target.innerText = 'Start';
        }
    });
}());