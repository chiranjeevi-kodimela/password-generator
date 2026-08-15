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