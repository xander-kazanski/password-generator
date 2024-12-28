const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener('click', renderPassword)



function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    const length = document.getElementById("length-input").value;
    const useUpperCase = document.getElementById("uppercase").checked;
    const useLowerCase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    let password = "";
    
    for (let i = 0; i < length; i++) {
        let character = getRandomCharacter()
        if (useUpperCase && character.match(/[A-Z]/)) {
            password += character;
        } else if (useLowerCase && character.match(/[a-z]/)) {
            password += character;
        } else if (useNumbers && character.match(/[0-9]/)) {
            password += character;
        } else if (length === 1) {
          // TODO: fix bug random generation misses.
        }
    }
    let alert = document.getElementById("copy-alert");
    alert.style.display = "none";
    return password;
}


document.getElementById("password1-el").addEventListener('click', copyPassword);
function copyPassword() {
    let password1El = document.getElementById("password1-el");
    let password = password1El.textContent;
    let input = document.createElement('input');
    input.setAttribute('value', password);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

// put alert over input saying click to copy
document.getElementById("password1-el").addEventListener('click', showCopyAlert);

function showCopyAlert() {
    let alert = document.getElementById("copy-alert");
    alert.style.display = "block";
}

function renderPassword() {
    let password1El = document.getElementById("password1-el");
    
    password1El.textContent = generatePassword();
}
