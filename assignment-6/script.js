// PART A

// calculates the average score
function avgScore (score1, score2, score3) {
    return (score1 + score2 + score3)/ 3;
}

function winner() {
    // nets
    var netsScore1 = Number(document.getElementById('netsScore1').value);
    var netsScore2 = Number(document.getElementById('netsScore2').value);
    var netsScore3 = Number(document.getElementById('netsScore3').value);
    // nicks
    var nicksScore1 = Number(document.getElementById('nicksScore1').value);
    var nicksScore2 = Number(document.getElementById('nicksScore2').value);
    var nicksScore3 = Number(document.getElementById('nicksScore3').value);

    // note .toFixed(2) returns a string!!!!
    let avgNetsScore = avgScore(netsScore1, netsScore2, netsScore3);
    let avgNicksScore = avgScore(nicksScore1, nicksScore2, nicksScore3);

    if (avgNetsScore > avgNicksScore && avgNetsScore >= 100) {
        document.getElementById('partA').innerHTML = `Nets are the winners! their avg score is ${avgNetsScore.toFixed(2)} and Nicks avg score was ${avgNicksScore.toFixed(2)}`;
    } else if (avgNetsScore < avgNicksScore && avgNicksScore >= 100){
        document.getElementById('partA').innerHTML = `Nicks are the winners! their avg score is ${avgNicksScore.toFixed(2)} and Nets avg score was ${avgNetsScore.toFixed(2)}`;
    } else if (avgNetsScore == avgNicksScore && avgNetsScore >= 100){
        document.getElementById('partA').innerHTML = `There was a draw both teams have the same avg score! the avg score of both teams is ${avgNetsScore.toFixed(2)}`;
    } else {
        document.getElementById('partA').innerHTML = `No one won (no trophy), Nets avg score is ${avgNetsScore.toFixed(2)} and Nicks avg score is ${avgNicksScore.toFixed(2)}`;
    }

}

// adding action listener to a html element
$('body').on('click', '#partA-button', () => {
    winner();
});

// PART B

// adding action listener to a html element
$('body').on('click', '#partB-button', () => {
    // bill
    let bill = Number(document.getElementById('bill').value);
    // tip
    tip = (bill > 30 && bill < 100) ? (15 / 100) * bill : (20 / 100) * bill;
    // total
    let total = bill + tip;
    
    document.getElementById('partB').innerHTML = `The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total value $${total.toFixed(2)}`;
});



// PART C

// C to F
let CovertCelsiusToFahrenheit = (celsius) => (celsius * 1.8) + 32;

// F to C
let CovertFahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;


// adding action listener to a html element
$('body').on('click', '#partC1-button', () => {
    // celsius
    let celsius = Number(document.getElementById('celsius').value);
    let fahrenheitTemp = CovertCelsiusToFahrenheit(celsius);
    
    if (celsius != 0) {
        document.getElementById('partC1').innerHTML = `${celsius}°C  &rarr;  ${fahrenheitTemp.toFixed(2)}°F`;
    }
});

// adding action listener to a html element
$('body').on('click', '#partC2-button', () => {
    // fahrenheit
    let fahrenheit = Number(document.getElementById('fahrenheit').value);
    let celsiusTemp = CovertFahrenheitToCelsius(fahrenheit);

    if (fahrenheit != 0){
        document.getElementById('partC2').innerHTML = `${fahrenheit}°F  &rarr;  ${celsiusTemp.toFixed(2)}°C`;
    }
});

