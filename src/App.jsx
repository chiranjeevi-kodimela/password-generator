import {  useState } from "react";
import { generatePassword } from "./utils/passwordGenerator";

import PasswordDisplay from "./components/PasswordDisplay";
import PasswordOptions from "./components/PasswordOptions";
import PasswordStrength from "./components/PasswordStrength";

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
  const [copied, setCopied] = useState(false);

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
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!password) {
      return;
    }

    try {
      await navigator.clipboard.writeText(password);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError("Unable to copy password.");
    }
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
          <PasswordDisplay
            password={password}
            copied={copied}
            onCopy={handleCopy}
            onGenerate={handleGenerate}
          />

          <PasswordStrength password={password} />

          {error && <p className="error-message">{error}</p>}

          <PasswordOptions
            length={length}
            options={options}
            onLengthChange={setLength}
            onOptionChange={handleOptionChange}
            onGenerate={handleGenerate}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
