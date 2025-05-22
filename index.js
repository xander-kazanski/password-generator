const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    lowercase: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    numbers: '0123456789'.split(''),
    symbols: '~`!@#$%^&*()_-+={}[]|:;<>,.?/'.split('')
};

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', renderPassword);

function getRandomCharacter(allowedSets) {
    const selectedSet = allowedSets[Math.floor(Math.random() * allowedSets.length)];
    return characters[selectedSet][Math.floor(Math.random() * characters[selectedSet].length)];
}

function generatePassword() {
    const length = parseInt(document.getElementById('length-input').value) || 12;
    const useUpperCase = document.getElementById('uppercase').checked;
    const useLowerCase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols')?.checked ?? false;
    
    // Ensure at least one option is selected
    const allowedSets = [];
    if (useUpperCase) allowedSets.push('uppercase');
    if (useLowerCase) allowedSets.push('lowercase');
    if (useNumbers) allowedSets.push('numbers');
    if (useSymbols) allowedSets.push('symbols');
    
    if (allowedSets.length === 0) {
        alert('Please select at least one character type');
        return '';
    }
      // Ensure valid length
    if (length < 1) {
        alert('Password length must be at least 1');
        return '';
    }
    if (length > 64) {
        alert('Password length cannot exceed 64 characters');
        return '';
    }
    
    let password = '';
    // Generate password with guaranteed characters from each selected type
    allowedSets.forEach(set => {
        password += characters[set][Math.floor(Math.random() * characters[set].length)];
    });
    
    // Fill the rest of the password
    while (password.length < length) {
        password += getRandomCharacter(allowedSets);
    }
    
    // Shuffle the password to make it more random
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    let alert = document.getElementById('copy-alert');
    if (alert) alert.style.display = 'none';
    
    return password;
}

// Modern clipboard API usage
async function copyPassword() {
    const password1El = document.getElementById('password1-el');
    const password = password1El.textContent;
    
    try {
        await navigator.clipboard.writeText(password);
        showCopyAlert();
    } catch (err) {
        console.error('Failed to copy password:', err);
    }
}

function showCopyAlert() {
    const alert = document.getElementById('copy-alert');
    if (!alert) return;
    
    alert.style.display = 'block';
    // Hide the alert after 2 seconds
    setTimeout(() => {
        alert.style.display = 'none';
    }, 2000);
}

function renderPassword() {
    const password1El = document.getElementById('password1-el');
    if (!password1El) return;
    
    const newPassword = generatePassword();
    if (newPassword) {
        password1El.textContent = newPassword;
    }
}

// Add click event listener for copying password
document.getElementById('password1-el').addEventListener('click', copyPassword);
