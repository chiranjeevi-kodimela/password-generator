export function calculatePasswordStrength(password) {
  if (!password) {
    return {
      score: 0,
      label: "None",
      percentage: 0,
    };
  }

  let score = 0;

  const length = password.length;

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9\s]/.test(password);
  const hasSpaces = /\s/.test(password);

  // Length
  if (length >= 8) score += 1;
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;
  if (length >= 20) score += 1;

  // Character diversity
  if (hasLowercase) score += 1;
  if (hasUppercase) score += 1;
  if (hasNumbers) score += 1;
  if (hasSymbols) score += 1;
  if (hasSpaces) score += 1;

  // Unique character ratio
  const uniqueCharacters = new Set(password).size;
  const uniquenessRatio = uniqueCharacters / length;

  if (uniquenessRatio >= 0.7) score += 1;
  if (uniquenessRatio >= 0.9) score += 1;

  let label = "Weak";
  let percentage = 25;

  if (score >= 9) {
    label = "Very Strong";
    percentage = 100;
  } else if (score >= 7) {
    label = "Strong";
    percentage = 75;
  } else if (score >= 5) {
    label = "Fair";
    percentage = 50;
  }

  return {
    score,
    label,
    percentage,
  };
}
