function PasswordStrength({ password }) {
  if (!password) {
    return null;
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  let label = "Weak";

  if (score >= 5) {
    label = "Very Strong";
  } else if (score >= 4) {
    label = "Strong";
  } else if (score >= 3) {
    label = "Fair";
  }

  return (
    <div
      className={`strength strength-${label.toLowerCase().replace(" ", "-")}`}
    >
      <div className="strength-header">
        <span>Password Strength</span>
        <strong>{label}</strong>
      </div>

      <div className="strength-bar">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={index < Math.ceil(score / 2) ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default PasswordStrength;
