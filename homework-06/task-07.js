import users from './users.js';

const calculateTotalBalance = users => {
  return users.reduce((a, b) => a + b.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
