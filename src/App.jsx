import { useState } from "react";
import { generatePassword } from "./utils/passwordGenerator";

function App() {
  const [length, setLength] = useState(12);

  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    excludeDuplicates: true,
    spaces: false,
  });

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleOptionChange = (option) => {
    setOptions((previous) => ({
      ...previous,
      [option]: !previous[option],
    }));
  };

  const handleGenerate = () => {
    const result = generatePassword(length, options);

    if (result.error) {
      setPassword("");
      setError(result.error);
      return;
    }

    setPassword(result.password);
    setError("");
  };

  return (
    <main className="app">
      <div className="container">
        <header className="header">
          <p className="eyebrow">SECURE TOOL</p>

          <h1>Password Generator</h1>

          <p className="subtitle">
            Create strong, customizable passwords in seconds.
          </p>
        </header>

        <section className="generator-card">
          <div className="password-box">
            <input
              type="text"
              value={password}
              placeholder="Your password will appear here"
              readOnly
            />

            <button type="button">Copy</button>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="settings">
            <div className="section-heading">
              <h2>Password Settings</h2>

              <span>{length} characters</span>
            </div>

            <div className="length-control">
              <div className="length-label">
                <label htmlFor="length">Password Length</label>

                <strong>{length}</strong>
              </div>

              <input
                id="length"
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(event) => setLength(Number(event.target.value))}
              />
            </div>

            <div className="options">
              <label className="option">
                <input
                  type="checkbox"
                  checked={options.lowercase}
                  onChange={() => handleOptionChange("lowercase")}
                />

                <span>Lowercase</span>

                <small>a-z</small>
              </label>

              <label className="option">
                <input
                  type="checkbox"
                  checked={options.uppercase}
                  onChange={() => handleOptionChange("uppercase")}
                />

                <span>Uppercase</span>

                <small>A-Z</small>
              </label>

              <label className="option">
                <input
                  type="checkbox"
                  checked={options.numbers}
                  onChange={() => handleOptionChange("numbers")}
                />

                <span>Numbers</span>

                <small>0-9</small>
              </label>

              <label className="option">
                <input
                  type="checkbox"
                  checked={options.symbols}
                  onChange={() => handleOptionChange("symbols")}
                />

                <span>Symbols</span>

                <small>!@#$</small>
              </label>

              <label className="option">
                <input
                  type="checkbox"
                  checked={options.excludeDuplicates}
                  onChange={() => handleOptionChange("excludeDuplicates")}
                />

                <span>Exclude Duplicates</span>

                <small>Safer</small>
              </label>

              <label className="option">
                <input
                  type="checkbox"
                  checked={options.spaces}
                  onChange={() => handleOptionChange("spaces")}
                />

                <span>Include Spaces</span>

                <small>Optional</small>
              </label>
            </div>

            <button
              className="generate-button"
              type="button"
              onClick={handleGenerate}
            >
              Generate Password
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
