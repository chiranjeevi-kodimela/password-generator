function PasswordDisplay({ password, copied, onCopy }) {
  return (
    <div className="password-box">
      <input
        type="text"
        value={password}
        placeholder="Your password will appear here"
        readOnly
      />

      <button
        type="button"
        onClick={onCopy}
        disabled={!password}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default PasswordDisplay;