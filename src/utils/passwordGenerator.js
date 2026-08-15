const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!_@#_$^+";
const spaceChar = " ";

function getSecureRandomIndex(length) {
  const array = new Uint32Array(1);

  window.crypto.getRandomValues(array);

  return array[0] % length;
}

function getRandomChar(chars) {
  return chars[getSecureRandomIndex(chars.length)];
}

function shuffleString(str) {
  const array = str.split("");

  for (let i = array.length - 1; i > 0; i--) {
    const j = getSecureRandomIndex(i + 1);

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.join("");
}

export function generatePassword(length, options) {
  if (length < 4 || length > 64) {
    return {
      password: "",
      error: "Password length must be between 4 and 64.",
    };
  }

  let allChars = "";
  let mandatoryChars = "";

  if (options.lowercase) {
    allChars += lowercaseChars;
    mandatoryChars += getRandomChar(lowercaseChars);
  }

  if (options.uppercase) {
    allChars += uppercaseChars;
    mandatoryChars += getRandomChar(uppercaseChars);
  }

  if (options.numbers) {
    allChars += numberChars;
    mandatoryChars += getRandomChar(numberChars);
  }

  if (options.symbols) {
    allChars += symbolChars;
    mandatoryChars += getRandomChar(symbolChars);
  }

  if (options.spaces) {
    allChars += spaceChar;
    mandatoryChars += spaceChar;
  }

  if (allChars === "") {
    return {
      password: "",
      error: "Select at least one character type.",
    };
  }

  /*
   * If duplicate characters are excluded, make sure
   * the requested length is actually possible.
   */
  if (options.excludeDuplicates && new Set(allChars).size < length) {
    return {
      password: "",
      error: "Not enough unique characters for this length.",
    };
  }

  let password = mandatoryChars;
  let lastChar = password[password.length - 1] || "";

  let attempts = 0;
  const maxAttempts = length * 100;

  while (password.length < length && attempts < maxAttempts) {
    attempts++;

    const char = getRandomChar(allChars);

    // Prevent consecutive identical characters
    if (char === lastChar) {
      continue;
    }

    // Prevent duplicate characters when enabled
    if (options.excludeDuplicates && password.includes(char)) {
      continue;
    }

    password += char;
    lastChar = char;
  }

  if (password.length < length) {
    return {
      password: "",
      error:
        "Unable to generate a password with these settings. Try changing the options.",
    };
  }

  return {
    password: shuffleString(password),
    error: "",
  };
}
