class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be positive.";
    this.#balance += amount;
    return `Deposited: $${amount}`;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "Transaction rejected: Insufficient funds (overdraft prevented).";
    }
    if (amount <= 0) return "Withdrawal amount must be positive.";
    this.#balance -= amount;
    return `Withdrew: $${amount}`;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(200));
console.log(myAccount.withdraw(30));
console.log(`Current Balance: $${myAccount.getBalance()}`);
