# Password Generator

A secure and customizable password generator built with React and JavaScript.

The project was originally created using HTML, CSS, and JavaScript and was later rebuilt with React to provide a cleaner component-based architecture and a better user experience.

## Live Demo

Coming soon.

## Features

- Secure random password generation using the Web Crypto API
- Password length from 4 to 64 characters
- Lowercase characters
- Uppercase characters
- Numbers
- Symbols
- Optional spaces
- Exclude duplicate characters
- Prevent consecutive duplicate characters
- Fisher-Yates password shuffling
- Password strength indicator
- Copy password to clipboard
- Show/hide generated password
- Regenerate password
- Responsive design
- Input validation and error handling

## Tech Stack

- React
- JavaScript
- Vite
- CSS
- Web Crypto API

## Project Structure

```text
src/
├── components/
│   ├── PasswordDisplay.jsx
│   ├── PasswordOptions.jsx
│   └── PasswordStrength.jsx
│
├── utils/
│   ├── passwordGenerator.js
│   └── passwordStrength.js
│
├── App.jsx
├── App.css
└── main.jsx


## How It Works

The application uses the browser's Web Crypto API to generate cryptographically stronger random values for selecting password characters.

The password generation process:

1. Selects the enabled character sets.
2. Generates mandatory characters from each selected category.
3. Fills the remaining password length with random characters.
4. Prevents consecutive duplicate characters.
5. Optionally prevents duplicate characters entirely.
6. Shuffles the resulting password using the Fisher-Yates algorithm.

## Password Strength

The application estimates password strength using:

- Password length
- Lowercase characters
- Uppercase characters
- Numbers
- Symbols
- Spaces
- Character uniqueness

The strength indicator classifies passwords as:

- Weak
- Fair
- Strong
- Very Strong

> The strength indicator is a heuristic and should not be treated as a cryptographic security guarantee.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/chiranjeevi-kodimela/password-generator.git
```

Move into the project:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Development

The React version was developed on a separate branch:

```text
react-upgrade
```

The original implementation was preserved on the `Main` branch during development.

## Future Improvements

- Entropy-based strength estimation
- Password history
- Dark/light theme
- Accessibility improvements
- Password generation presets
- Deployment and CI/CD
