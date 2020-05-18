import users from './users.js';

const getSortedUniqueSkills = users => {
  const result = [...users];
  return result
    .reduce((a, b) => a.concat(b.skills.filter(item => !a.includes(item))), [])
    .sort((a, b) => a.localeCompare(b));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
