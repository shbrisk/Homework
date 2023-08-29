const interestCalc = (function () {
    'use strict';

    let intRate;
    let years;
    function setRate(rate) {
        intRate = rate;
    }
    function setYears(term) {
        years = term;
    }
    function calculateInterest(principal) {
        console.log(`Principal: ${principal}, Interest: ${intRate}, Years: ${years}. Total Interest = $${principal * intRate * years}`)
    }
    return {
        setRate,
        setYears,
        calculateInterest
    };
}());

interestCalc.setRate(0.05);
interestCalc.setYears(10);
interestCalc.calculateInterest(100000);
