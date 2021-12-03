'use strict';

//coding challenge 1

// var johnMass = prompt("How many KGs does John weigh?");
// var johnHeight = prompt("How tall is John?");
// console.log('John weighs ' + johnMass + ' Kgs and is ' + johnHeight + ' m tall.');
// var markMass = prompt("How many KGs does Mark weigh?");
// var markHeight = prompt('How tall is Mark?');
// console.log('John weighs ' + markMass + ' Kgs and is ' + markHeight + ' m tall.');
//
// var johnBMI = johnMass / johnHeight ** 2;
// var jBMI = johnBMI.toFixed(2);
// var markBMI = johnMass / (markHeight * markHeight);
// var mBMI = markBMI.toFixed(2);
//
// var johnHigherBMI = johnBMI > markBMI;
// var markHigherBMI = markBMI > johnBMI;
// if (markHigherBMI) {
//     console.log('Mark\'s BMI of ' + mBMI + ' is higher than John\'s.');
// } else {
//     console.log('John\'s BMI of ' + jBMI + ' is higher than mark\'s.');
// };


//CODING CHALLENGE 2

//var dolphinsAvg = (96 + 108 + 89) / 3;
//var koalaAvg = (88 + 91 + 110) / 3;
var dolphinsAvg = (97 + 112 + 101) / 3;
var koalaAvg = (109 + 95 + 106) / 3;

if (dolphinsAvg > koalaAvg && dolphinsAvg >= 100) {
    console.log('The winner of the competition is.....team Dolphins!');
} else if (koalaAvg > dolphinsAvg && koalaAvg >= 100) {
    console.log('The winner of the competition is.....team Koala!');
} else if ((dolphinsAvg === koalaAvg && dolphinsAvg >= 100) || (koalaAvg === dolphinsAvg && koalaAvg >= 100)) {
    console.log('We have a draw!');
} else {
    console.log('No winner is declared');
};


//CODING CHALLENGE 3

var bill = 430;
var tip = bill >= 50 && bill <= 300
    ? tip = .15 * bill
    : tip = .20 * bill;
console.log('The bill was $' + bill +', the tip was $' + tip + ', and the total value was $' + (bill + tip));

//PART 2

var data1 = [17, 21,23];
var data2 = [12, 5, -5, 0, 4];
var printForecast = function(arr){
    var str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + (arr[i] + ' degrees C in ' + (i + 1) + ' days ...  ');
    }
    console.log(' ... ' + str);
};
printForecast(data1)