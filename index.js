const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let length = 15

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    password = "";
    
    for (let i = 0; i < length; i++) {
        password += getRandomCharacter()
    }
    return password;
}


function generatePasswords() {
    let password1El = document.getElementById("password1-el");
    let password2El = document.getElementById("password2-el");
    
    password1El.textContent = generatePassword();
    password2El.textContent = generatePassword();
}
