
//Collecting the Users Input------------------------------------------------------------------------------------------------
function getText(){

    let userString = document.getElementById("userInput").value;
    let returnObj = checkPalindrome(userString);

     //calling display data
     displayData(returnObj);

}

//Check Palindrome function----------------------------------------------------------------------------------------------------------
function checkPalindrome(userString){

    userString = userString.toLowerCase();
    let isPalindrome = false;
    let returnObj = {};
    

    let regex = /[^a-z0-9]/gi;

    userString = userString.replace(regex, "");

    let reverseString = ""
    for (let index = userString.length -1; index >= 0; index--) { 
        reverseString += userString[index];
    }

    if (reverseString == userString) {
        isPalindrome = true;
    }
    else{
        isPalindrome = false;
    }

    returnObj["IsPalindrome"] = isPalindrome;
    returnObj["revString"] = reverseString;

    return returnObj;
    
}

//Display Data Function---------------------------------------------------------------------------------------------------------------
function displayData(returnObj) {
    if(returnObj["IsPalindrome"] == true){
        document.getElementById("results").innerHTML = `Your phrase reversed is: ${returnObj["revString"]}`
         Swal.fire('Neat! Your Phrase is a Palindrome');
    }
    else{ 
        document.getElementById("results").innerHTML = `Your phrase reversed is: ${returnObj["revString"]}`
        Swal.fire('OOPS! Your Phrase is not a Palindrome');
    }

}



