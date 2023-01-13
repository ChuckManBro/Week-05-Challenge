// Modify this simple example to add additional properties to the Person class, and then use those properties within the Teacher class.

class Person {
  constructor (newName, newPetSpecies, newPetName) {
    this.name = newName;
    this.petSpecies = newPetSpecies;
    this.petName = newPetName;
  }
  introduce() {
    return `My name is ${this.name}.`;
  }
}

class Teacher extends Person {
  constructor (entryOne, entryTwo, entryThree, newCourseName) {
    super(entryOne, entryTwo, entryThree);
    this.courseName = newCourseName;
  }
  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be teaching your ${this.courseName} class. I have a ${this.petSpecies} named ${this.petName}.`);
  }
}

let teacher = new Teacher('Ms. Angle', 'cat', 'Georgie', 'Trigonometry');

console.log(teacher.introduce());

teacher.introduceSelf();