// average.marks
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
// console.log(totalMarks / 5);
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
averageTwoDecimal = parseFloat(averageTwoDecimal);
console.log(averageTwoDecimal);
