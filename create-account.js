function createAccount(pin, amount) {
    let balance = amount;

    return {
        
        checkBalance(enteredPin) {
            if(enteredPin === pin) {
                return balance;
            } else {
                return 'Invalid PIN.'
            }
        },

        deposit(enteredPin, depAmount) {
            let bal = checkBalance(enteredPin);
            if(bal === balance) {
                balance += depAmount;
            } else {
                return 'Invalid PIN.'
            }
        },

        withdraw(enteredPin, withdrawalAmount) {
            let bal = checkBalance(enteredPin);
            if(bal === balance) {
                balance -= withdrawalAmount;
            } else {
                return 'Invalid PIN.'
            }
        },

        changePin(enteredPin, newPin) {
            if(enteredPin !== pin) {
                return 'Invalid PIN.'
            } else {
                pin = newPin;
            }
        }

    }
}

module.exports = { createAccount };
