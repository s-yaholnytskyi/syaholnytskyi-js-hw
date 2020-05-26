import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.filter(item => item.gender === gender);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
