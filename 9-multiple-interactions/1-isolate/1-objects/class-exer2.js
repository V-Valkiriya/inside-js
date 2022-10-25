//Write a funtion to find out the succesful students.
//Being succesful means that
//average of the lessons should be bigger than 50 (or equal)
// there should be no lesson score lower than 50
const students = [
  {
    id: 1,
    name: 'A',
    lessons: {
      math: 50,
      sience: 75,
      english: 10,
    },
  },
  {
    id: 2,
    name: 'B',
    lessons: {
      math: 90,
      sience: 45,
      english: 80,
    },
  },
  {
    id: 3,
    name: 'C',
    lessons: {
      math: 20,
      sience: 85,
      english: 100,
    },
  },
  {
    id: 4,
    name: 'C',
    lessons: {
      math: 60,
      sience: 65,
      english: 80,
    },
  },
];

function findSuccessfull(listOfStudents) {
  const successfulStudents = [];
  for (const student of listOfStudents) {
    const total =
      student.lessons.math + student.lessons.english + student.lessons.sience;
    const average = total / 3;
    if (
      average >= 50 &&
      student.lessons.math > 50 &&
      student.lessons.english > 50 &&
      student.lessons.sience > 50
    ) {
      successfulStudents.push(student);
    }
  }
  return successfulStudents;
}
console.log(findSuccessfull(students));










const studentMarks = {
  math: 10,
  english: 7,
  chemistry: 6
}

const studentInfo = {
  name: 'John',
  lastname: 'Doe',
  age: 15
}

const studentData = {...studentInfo, ...studentMarks}
console.log(studentData);



/* const duplicatedItems = copiedArray.filter(item, index) => arr.indexOf(item) !== index
);
const duplicatedArray = [];
const nonDuplicatedArray = [];
arr.map ((item) => 
    duplicatedItems.includes(item)
    ? duplicatedArray.push(item)
    : nonDuplicatedArray.push(item)
);
duplicatedArray.sort((a, b) => a - b);
const result = [...nonDuplicatedArray, ...duplicatedArray];
return result;
*/