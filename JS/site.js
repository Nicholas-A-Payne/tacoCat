
//Collecting the Users Input------------------------------------------------------------------------------------------------
function getText(){

    let userString = document.getElementById("userInput").value;
    let isPalindrome = checkPalindrome(userString);


    //Cekcing for Palindrome
    checkPalindrome(userString);

     //calling display data
     displayData(isPalindrome);

}

//Check Palindrome function----------------------------------------------------------------------------------------------------------
function checkPalindrome(userString){

    userString = userString.toLowerCase();

    let regex = /[^a-z0-9]/gi;

    userString = userString.replace(regex, "");

    let reverseString = ""
    for (let index = userString.length -1; index >= 0; index--) { 
        reverseString += userString[index];
    }

    if (reverseString == userString) {
        return true;
    }
    else{
        return false;
    }
    
}

//Display Data Function---------------------------------------------------------------------------------------------------------------
function displayData(isPalindrome) {
    if(isPalindrome == true){
         Swal.fire('Neat! Your Phrase is a Palindrome');
    }
    else{ 
        Swal.fire('OOPS! Your Phrase is not a Palindrome');
    }

}



