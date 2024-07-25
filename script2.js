// String Questions
//Q1
function isPalindrome(str) {
    // Variable to store the new string with only alphanumeric characters
    var filteredString = '';

    // Laccses all string chars
    for (var i = 0; i < str.length; i++) {
        // Convert the character to lowercase
        var char = str[i].toLowerCase();
        // Check if the character is an alphabet or a number
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            // If it is, add it to the filtered string
            filteredString += char;
        }
    }

    var left = 0;
    var right = filteredString.length - 1;

    // Loop until the pointers meet in the center
    while (left < right) {
        // If characters at the pointers don't match, it's not a palindrome
        if (filteredString[left] !== filteredString[right]) {
            return "This is NOT A PALINDROME STRING";
        }
        // center
        left++;
        right--;
    }

    // If  matched, it is a palindrome
    return "This is A PALINDROME STRING";
}
// Event listener for the button click
document.getElementById('processButton').addEventListener('click', function() {
    // Get the input value from the textarea
    const userInput = document.getElementById('userInput').value;

    // Call the isPalindrome function with the input value
    const result = isPalindrome(userInput);

    // Display the result
    document.getElementById('result').innerText = result;
});
//Q5

function upperLetterOfEachWord(str) {
    var result = '';
    var next = true;

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (char === ' ') { //IF THERE IS A SPACE
            result += char;
            next = true;
        } else if (next) {
            result += char.toUpperCase(); // REPLACE IT WITH UPPER
            next = false;
        } else {
            result += char;
        }
    }
    return result;
}


document.getElementById('upperButton').addEventListener('click', function() {
    // Get the input value from the textarea
    const userInput = document.getElementById('userInput').value;

    // Call the isPalindrome function with the input value
    const result = upperLetterOfEachWord(userInput);

    // Display the result
    document.getElementById('result').innerText = result;
});
//Q8
function reversing(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) //BACKWARDS ACCES TO ALL STRIGN CHARS
     {
        reversed += str[i];
    }
    return reversed;
}


document.getElementById('reversButton').addEventListener('click', function() {
    // Get the input value from the textarea
    const userInput = document.getElementById('userInput').value;

    // Call the isPalindrome function with the input value
    const result = reversing(userInput);

    // Display the result
    document.getElementById('result').innerText = result;
});




// Number Functions
//Q3
function factorial(x) {
    if (x < 0) {
        return "PLEASE ENTER 0 OR A POSITIVE NUMBER";
    }
    if (x === 0 || x === 1) {
        return 1;
    }
    return x * factorial(x - 1);
}
document.getElementById('factButton').addEventListener('click', function() {
    // Get the input value from the textarea
    const userNum = document.getElementById('userNum').value;

    // Call the isPalindrome function with the input value
    const result2 = factorial(userNum);

    // Display the result
    document.getElementById('result2').innerText = result2;
});

//Q9

function isPrime(number) {
    if (number<=1 ) return "This is NOT a PRIME Number";
    for ( let i=2;i<number;i++) {
        if(number%i===0) { return "This is NOT a PRIME Number"; 
    } 
}
return "This is A PRIME Number"; }
document.getElementById('primeButton').addEventListener('click', function() {
    // Get the input value from the textarea
    const userNum = document.getElementById('userNum').value;

    // Call the isPalindrome function with the input value
    const result2 = isPrime(userNum);

    // Display the result
    document.getElementById('result2').innerText = result2;
})
