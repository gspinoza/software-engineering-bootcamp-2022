
// Part A: Temperature Converter
// C to F
let celsiusTemp = 50;
let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
let output = `${celsiusTemp}°C is  ${fahrenheitTemp}°F`;
console.log(output);
// F to C
celsiusTemp = (fahrenheitTemp - 32) * 5/9;
output =  `${fahrenheitTemp}°F is  ${celsiusTemp}°C`;
console.log(output);

// Part B: BMI
let lucasMass = 80;
let lucasHeight = 1.78;

let johnMass = 90; // kg
let johnHeight = 1.88; // m

let lucasBMI = (lucasMass / (lucasHeight ** 2)).toFixed(2);
let johnBMI = (johnMass / (johnHeight ** 2)).toFixed(2);

if (lucasBMI > johnBMI) {
    console.log("Lucas' BMI is higher than John's!");
    console.log(`Lucas's BMI (${lucasBMI}) is higher than John's BMI (${johnBMI})`);
} else if (lucasBMI < johnBMI) {
    console.log("John's BMI is higher than Lucas'!");
    console.log(`John's BMI (${johnBMI}) is higher than Lucas's BMI (${lucasBMI})`);
} else {
    console.log("John and Lucas have the same BMI!");
    console.log(`John's BMI (${johnBMI}) is the same as Lucas's BMI (${lucasBMI})`);
}


// Part C: User Prompt()
let userInput = prompt('Please enter a number');

// console.log(typeof userInput);

if (userInput == "" || isNaN(userInput)) {
    console.log("Please enter a number!");
} else if (userInput == 10) {
    console.log("You win 10 points");
} else if (userInput == 8) {
    console.log("You win 8 points");
} else {
    console.log("NOT MATCHED!!");
}
