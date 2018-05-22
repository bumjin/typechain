interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "steve",
  age: 22,
  gender: "male"
}

const sayHi = (person:Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

//sayHi(name, age, gender);
console.log(sayHi(person));

export {};

