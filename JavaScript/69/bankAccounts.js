(function () {

    function performTransaction(amount) {
        this.balance += amount;
        console.log(this.name + ' Account Balance: ' + this.balance);
    }

    const checkingAccount = {
        name: 'Checking',
        balance: 0,
    };
    const savingsAccount = {
        name: 'Savings',
        balance: 0,
    };

    performTransaction.call(checkingAccount, 100);
    performTransaction.call(checkingAccount, -50);
    performTransaction.call(savingsAccount, 20);

    const depositFiftyInSavings = performTransaction.bind(savingsAccount, 50);
    depositFiftyInSavings();

}());