console.log("Gerard's Calculator");
console.log("What operation do you want to perform?");
console.log("Press '+' for addition, '-' for substraction, '*' for multiplication and '/' for division.");
var response = prompt();

if (response === "+") {
    operation("+");
} else if (response === "-") {
    operation("-");
} else if (response === "*") {
    operation("*");
} else {
    operation("/");
}

function operation(oper) {
    console.log("Enter the first number");
    var firstNumber = prompt("Enter first number");
    console.log("Enter the second number");
    var secondNumber = prompt("Enter second number");
    if (oper === "+") {
        var total = Number(firstNumber) + Number(secondNumber);
        console.log("The result of the addition is: " + total);
    }else if(oper === "-"){
        var total = Number(firstNumber) - Number(secondNumber);
        console.log("The result of the substraction is: " + total);
    }else if(oper === "*"){
        var total = Number(firstNumber) * Number(secondNumber);
        console.log("The result of the multiplication is: " + total);
    }else{
        var total = Number(firstNumber) * Number(secondNumber);
        console.log("The result of the division is: " + total);
    }
    console.log("If you want to use the program again RELOAD the page.");
  }

