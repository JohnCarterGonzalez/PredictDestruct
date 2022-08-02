const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Outcome:
// error, the variables of randomCar and otherRandomCar are undefined as methods to call the index methods randomly
//

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//Outcome:
// for the first 'console.log(name) is undefined relative to the object whereas the second console.log(otherName is destructered and defined as the name to the employee


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//this will throw no errors as since the hashedPassword is destructered correctly so as to not have name conflicts with the already const variabl of password 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//Outcome:
//the outcomes are boolean statements with no errors, the first is false and the second is true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Outcome:
//the outcome are a series of statements the key will print out the value and the secondKey will print out the entire array, whereas the secondKey[0] will print out 1 
// the willThisWork becomes a placeholder for the index[1] which then prints out 5 
