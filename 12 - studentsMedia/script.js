let students = [
  {
    name: "Karina",
    tastingNoteOne: 9.7,
    tastingNoteTwo: 7.5,
  },
  {
    name: "Virgínia",
    tastingNoteOne: 8.2,
    tastingNoteTwo: 9.3,
  },
  {
    name: "Juan",
    tastingNoteOne: 6.2,
    tastingNoteTwo: 5.8,
  }
]

function calculateMedia(tastingNoteOne, tastingNoteTwo){
  return ((tastingNoteOne + tastingNoteTwo) / 2).toFixed(2) 
}

function printMedia(students){
  return `
  The average student ${students.name} is: ${calculateMedia(students.tastingNoteOne, students.tastingNoteTwo)}
  `
}

function verifySucess(students){
  let media = (students.tastingNoteOne + students.tastingNoteTwo) / 2

  if(media >= 7){
    return `Congratulations ${students.name}, you passed the test!`
  }
  else {
    return `${students.name} u flunked! Try it next time!`
}
}

for(let student of students){
  let messageMedia = printMedia(student)
  let messageSucess = verifySucess(student)
  alert(`${messageMedia} \n ${messageSucess}`)
}








