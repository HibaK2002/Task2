//Arrays Functions
//Q6
function findLargest(arr) {
    if (arr.length === 0) {
        return console.log("THE ARRAY IS EMPTY!!!!"); // empty array case 
    }
    
    var largest = arr[0]; // Assume the first element is the largest initially

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest ;
}


// Event listener for the button click
document.getElementById('find').addEventListener('click', function() {
    // Get the input value from the textarea
    const userArray = document.getElementById('userArray').value;

    // Call the findLargest function with the input value
    const result = findLargest(userArray);

    // Display the result
    document.getElementById('result1').innerText = result;
});


//Q2

function removeDuplicates(arr) {
    var newArray = [];
    var existingElement = {};

    for (var i = 0; i < arr.length; i++) {
        if (!existingElement[arr[i]]) {
            newArray.push(arr[i]);
            existingElement[arr[i]] = true;
        }
    }

    return newArray;
}
// Event listener for the button click
document.getElementById('remove').addEventListener('click', function() {
    // Get the input value from the textarea
    const userArray2 = document.getElementById('userArray2').value;

    // Call the findLargest function with the input value
    const result = removeDuplicates(userArray2);

    // Display the result
    document.getElementById('result2').innerText = result;
});

//Q7
function mergeArrays(arr1, arr2) {
    //The new merged Array
    var merged = [];
    
    // Add elements from arr1
    for (var i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }
    
    // Add elements from arr2
    for (var j = 0; j < arr2.length; j++) {
        merged.push(arr2[j]);
    }
    
    // Sorting
    function sortArray(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            if (minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
    
    sortArray(merged); 

    return merged;
}
document.getElementById('merge').addEventListener('click', function() {
    var array1Input = document.getElementById('array1Input').value;
    var array2Input = document.getElementById('array2Input').value;
    var result3 = mergeArrays(array1Input,array2Input)
    document.getElementById('result3').innerText = result3;
});
