var output = [];
var x = 1;

function fizzBuzz() {
    if (x % 3 === 0 && x % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (x % 3 === 0) {
        output.push("Fizz");
    }
    else if (x % 5 === 0) {
        output.push("Buzz")
    }
    else {
        output.push(x);
    }
    x++;
    console.log(output);
}
//Just call function 'fizzBuzz();' in console
