import { calculatePasswordStrength } from "../utils/passwordStrength";

function PasswordStrength({ password }) {
  const strength = calculatePasswordStrength(password);

  if (!password) {
    return null;
  }

  const activeBars = Math.ceil(strength.score / 3);

  return (
    <div
      className={`strength strength-${strength.label
        .toLowerCase()
        .replace(" ", "-")}`}
    >
      <div className="strength-header">
        <span>Password Strength</span>

        <strong>{strength.label}</strong>
      </div>

      <div className="strength-bar">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className={index < activeBars ? "active" : ""} />
        ))}
      </div>

      <div className="strength-details">
        <span>{strength.percentage}% strength</span>
      </div>
    </div>
  );
}

export default PasswordStrength;
