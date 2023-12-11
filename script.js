    function generateRandomPassword(length) {
    // Define character sets for different types of characters
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    // Combine all character sets into a single string
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    // Generate the random password
    for (let i = 0; i < length; i++) {
      // Generate a random index to pick a character from the combined set
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
  
      // Append the randomly selected character to the password
      password += allCharacters.charAt(randomIndex);
    }
  
    // Return the generated password
    return password;
  }
    const generatedPassword = generateRandomPassword(8);
    console.log(`Your Password is: ${generatedPassword}`);