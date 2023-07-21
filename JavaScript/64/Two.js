"use strict ";
/*global myName email */

console.log("name:", myName, "email:", email);

var q = prompt("Please Enter Your Name");

alert("Welcome " + q + "!");

var myButton = document.getElementById("clicker");
myButton.addEventListener("click", () => confirm("Are You Sure??"));
