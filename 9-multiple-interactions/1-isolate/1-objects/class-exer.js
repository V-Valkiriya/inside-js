//You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//Your task is to return the number of JavaScript developers coming from Europe.
//For example, given the following list:

// eslint-disable-next-line strict

const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

//your function should return number 1.

/* const europeanStudents = list1.slice(0, 1);
console.log(europeanStudents);
*/

const europeanStudents = list1.filter(developer =>
    developer.continent === 'Europe' && developer.language === 'JavaScript',
).length;
console.log(europeanStudents);

 
/*
const findThe Count = () => {
  const filteredList = list1.filter(
    (developer) => 
    developer.continent === 'Europe' && developer.language === 'JavaScript'
    );
    return filteredList.length;

console.log(findTheCount());



const findThe Count = (continent, language) => {
  const filteredList = list1.filter(
    (developer) => 
    developer.continent === continent && developer.language === language
    );
    return filteredList.length;

console.log(findTheCount('Europe', 'JavaScript'));


*/