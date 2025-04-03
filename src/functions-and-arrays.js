// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    
    if (number1 > number2) {
        return number1;

    } 
    else if (number2 > number1) {
        
        return number2;
    } 
    else {
        return number1;
    }

}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    

    let longestWord = ""; 

    if (words.length === 0) {
        return null; // do it OUTSIDE the loop.
    }

    for (let i = 0; i <words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i]; // every iteration it will update longest word if the iterated word is longer than the previous longest word    
        }
    }
    
   

    return longestWord; 
}
    


console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
 let sum= 0; // I will store sum of numbers here

 for (let i =0; i < numbers.length; i++) {
sum += numbers[i]; // I will add each number to the sum variable
 }

 return sum; // I will return the sum variable
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    let sum = 0; // I will store sum of numbers here

    if (numbers2.length === 0) {
        return 0; // do it OUTSIDE the loop. Write 0 and not NULL T_T
    }

 for (let i = 0; i < numbers2.length; i++) {
sum += numbers2[i]; //  add each number to the sum variable
 }

 average = sum / numbers2.length; // I will divide the sum by the length of the array to get the average



 return average 

}



// Iteration 5 | Find Elements
// const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordToCheck) {

  if (wordsArr.length === 0) {
    return null;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === wordToCheck) {
      return true;
    }
  }
  return false;
}


