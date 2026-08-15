import { useState } from "react";

function PasswordDisplay({ password, copied, onCopy, onGenerate }) {
  const [visible, setVisible] = useState(true);

  const displayPassword = visible ? password : "•".repeat(password.length);

  return (
    <div className="password-box">
      <input
        type="text"
        value={displayPassword}
        placeholder="Your password will appear here"
        readOnly
        aria-label="Generated password"
      />

      <div className="password-actions">
        <button
          type="button"
          className="icon-button"
          onClick={() => setVisible((previous) => !previous)}
          disabled={!password}
          aria-label={visible ? "Hide password" : "Show password"}
          title={visible ? "Hide password" : "Show password"}
        >
          {visible ? "Hide" : "Show"}
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={onGenerate}
          aria-label="Generate another password"
          title="Generate another password"
        >
          ↻
        </button>

        <button
          type="button"
          className="copy-button"
          onClick={onCopy}
          disabled={!password}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default PasswordDisplay;
