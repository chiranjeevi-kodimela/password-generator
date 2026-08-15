function PasswordOptions({
  length,
  options,
  onLengthChange,
  onOptionChange,
  onGenerate,
}) {
  return (
    <div className="settings">
      <div className="section-heading">
        <h2>Password Settings</h2>

        <span>{length} characters</span>
      </div>

      <div className="length-control">
        <div className="length-label">
          <label htmlFor="length">
            Password Length
          </label>

          <strong>{length}</strong>
        </div>

        <input
          id="length"
          type="range"
          min="4"
          max="64"
          value={length}
          onChange={(event) =>
            onLengthChange(Number(event.target.value))
          }
        />
      </div>

      <div className="options">
        <label className="option">
          <input
            type="checkbox"
            checked={options.lowercase}
            onChange={() =>
              onOptionChange("lowercase")
            }
          />

          <span>Lowercase</span>
          <small>a-z</small>
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={options.uppercase}
            onChange={() =>
              onOptionChange("uppercase")
            }
          />

          <span>Uppercase</span>
          <small>A-Z</small>
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={options.numbers}
            onChange={() =>
              onOptionChange("numbers")
            }
          />

          <span>Numbers</span>
          <small>0-9</small>
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={options.symbols}
            onChange={() =>
              onOptionChange("symbols")
            }
          />

          <span>Symbols</span>
          <small>!@#$</small>
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={options.excludeDuplicates}
            onChange={() =>
              onOptionChange("excludeDuplicates")
            }
          />

          <span>Exclude Duplicates</span>
          <small>Safer</small>
        </label>

        <label className="option">
          <input
            type="checkbox"
            checked={options.spaces}
            onChange={() =>
              onOptionChange("spaces")
            }
          />

          <span>Include Spaces</span>
          <small>Optional</small>
        </label>
      </div>

      <button
        className="generate-button"
        type="button"
        onClick={onGenerate}
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordOptions;