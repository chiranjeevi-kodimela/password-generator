const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!_@#_$^+";
const spaceChar = " ";

// Secure random index using crypto
function getSecureRandomIndex(length) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % length;
}

// Get one secure random character
function getRandomChar(chars) {
    return chars[getSecureRandomIndex(chars.length)];
}

// Shuffle string using Fisher-Yates
function shuffleString(str) {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = getSecureRandomIndex(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function generatePassword() {
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
    const spaceCheckbox = document.getElementById("spaces");
    const lengthInput = document.getElementById("length");

    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length < 4) {
        passwordInput.value = "Invalid length";
        return;
    }

    let allChars = "";
    let mandatoryChars = "";

    if (lowercaseCheckbox.checked) {
        allChars += lowercaseChars;
        mandatoryChars += getRandomChar(lowercaseChars);
    }
    if (uppercaseCheckbox.checked) {
        allChars += uppercaseChars;
        mandatoryChars += getRandomChar(uppercaseChars);
    }
    if (numbersCheckbox.checked) {
        allChars += numberChars;
        mandatoryChars += getRandomChar(numberChars);
    }
    if (symbolsCheckbox.checked) {
        allChars += symbolChars;
        mandatoryChars += getRandomChar(symbolChars);
    }
    if (spaceCheckbox.checked) {
        allChars += spaceChar;
        mandatoryChars += spaceChar;
    }

    if (allChars === "") {
        passwordInput.value = "No characters selected";
        return;
    }

    let password = mandatoryChars;
    let lastChar = password[password.length - 1] || "";

    while (password.length < length) {
        let char = getRandomChar(allChars);
        if (char === lastChar) continue; // no consecutive same chars
        if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;

        password += char;
        lastChar = char;
    }

    passwordInput.value = shuffleString(password);
}

function copyPassword() {
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false;
    passwordInput.select();
    document.execCommand('copy');
    passwordInput.disabled = true;

    copyButton.textContent = 'copied';
    setTimeout(() => {
        copyButton.textContent = 'copy';
    }, 2000);
}
