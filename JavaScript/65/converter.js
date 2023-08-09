'use strict';

const C_to_F = document.getElementById("C_to_F");
C_to_F.addEventListener("click", function () {
    aleter("c");
});

const F_to_C = document.getElementById("F_to_C");
F_to_C.addEventListener("click", function () {
    aleter("f");
});

function aleter(scale) {
    const num = prompt("Enter Value to Convert");
    if (num !== null)
        convert(parseFloat(num), scale);
}

function convert(num, scale) {
    if (scale === "c")
        alert(`${num} Celsius = ${(num / 5) * 9 + 32} Farenheit`);
    else if (scale === "f")
        alert(`${num} Farenheit = ${(num - 32) * 5 / 9} Celsius`);
    else
        alert("Error!");
}