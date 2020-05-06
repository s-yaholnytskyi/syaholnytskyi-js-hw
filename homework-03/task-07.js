/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (this.transactions.length > 0) {
      return { id: this.transactions.slice(-1)[0].id + 1, amount, type };
    }
    return { id: 0, amount, type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const result = this.createTransaction(amount, 'deposit');
    this.transactions.push(result);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log('You have no such amount of money.');
      return;
    }
    const transaction = this.createTransaction(amount, 'withdraw');
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions[id];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions.reduce(
      (a, b) => (b.type === type ? b.amount + a : a),
      0,
    );
  },
};

account.deposit(100);
console.log(account);
account.withdraw(150);
console.log(account);
account.withdraw(50);
console.log(account);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('deposit'));
console.log(account);
account.deposit(300);
console.log(account.getBalance());
console.log(account.getTransactionTotal('deposit'));
