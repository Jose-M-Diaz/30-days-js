'use strict';
//JAVASCRIPT FUNDAMENTALS PART 1
    //LECTURE: Variables and Values
//1. Declare variables called 'country','continent' and 'population' and assign their values according to your own country (population in millions)
//2. Log their values to the console
const country = 'United States of America';
const continent = 'North America';
var population = 331449281;
console.log(country);
console.log(continent);
console.log(population);

    //LECTURE: Data Types
//1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
//2. Log the types of 'isIsland','population','country' and 'language' to the console
var isIsland = true;
var language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

    //LECTURE: Let, Const, Var
//1. Set the value of 'language' to the language spoken where you live(some countries have multiple languages, but just choose one)
//2. Think about which variables should be const variables(which values will never change, and which might change?). Then, change these variables to const.
//3. Try to change one of the changed variables now,and observe what happens
language = "English";
//country = 'Mexico'; Can't be changed. variable that will stay the same
//const job;  needs an initial value or will error out

    //  LECTURE: Basic Operators
//1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
//2. Increase the population of your country by 1 and log the result to the console
//3. Finland has a population of 6million. Does your country have more people than Finland?
//4. The average population of a country is 33 million people. Does your country have less people than the average country?
//5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let halfPopulation = population / 2;
console.log(halfPopulation);
let addOne = population + 1;
console.log(addOne);
const finaland = 6000000;
let compare = population - finaland;
console.log(compare); //More people
const avgPop = 33000000;
let comparePop = population - avgPop;
console.log(comparePop); //More people
var description = country + ' is in ' + continent +', and its ' + population + ' people speak ' + language;
console.log(description);

    //LECTURE: Strings and Template Literals
//1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
`${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

    //LECTURE: Taking Decisions: if / else Statements
//1. If your country's population is greater than 33million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
//2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
//population = 130000000;
if(population > avgPop) {
    console.log(`${country}'s population is above average`);
}else {
    console.log(`${country}'s population is ${(avgPop-population)} below average`);
};

    //LECTURE: Type Conversion and Coercion
//1. Predict the result of these 5 operations without executing them:
//    '9' - '5';   =4
//    '19' - '13' + '17'; =23
//   '19' - '13' + 17; =23
//    '123' < 57; =false
//    5 + 6 + '4' + 9 - 4 - 2; =17
//2. Execute the operations to check if you were right
console.log('9' - '5'); //correct
console.log('19' - '13' + '17'); //wrong '+' will concatenate 17 to sum of 1st two
console.log('19' - '13' + 17); //correct
console.log('123' < 57); //correct
console.log(5 + 6 + '4' + 9 - 4 - 2); //wrong. again will concatenate 11 to 4 to 3





