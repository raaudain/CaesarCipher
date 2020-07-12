function caesarCipher(str, num){
  num = num % 26; // Deals with negative numbers lower than -26

  const lowerCaseString = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  let newString = "";

  for (let i = 0; i < lowerCaseString.length; i++){
    let currentLetter = lowerCaseString[i];

    if(currentLetter === " "){
      newString += currentLetter;
      continue; // Move to next iteration
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;

    if (newIndex > 25){
      newIndex = newIndex - 26; // Start at the beginning of alphabet
    }

    if (newIndex < 0){
      newIndex = newIndex + 26;
    }

    if (str[i] === str[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    }
    else{
      newString += alphabet[newIndex];
    }
    
  }

  return newString;
}


caesarCipher("Zoo Keeper", 2);
caesarCipher("Big Car", -16);
caesarCipher("JavaScript", -900);