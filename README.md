# Secure Password Generator

A modern, secure, and accessible password generator built with vanilla JavaScript. Generate strong passwords with customizable options for length and character types.

## Features

- Generate secure random passwords
- Customize password length (1-64 characters)
- Include/exclude character types:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special symbols
- One-click copy to clipboard
- Visual feedback for actions
- Fully keyboard accessible
- Mobile responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/password-generator.git
cd password-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Security

This password generator uses the browser's cryptographically secure random number generator and includes several security features:

- Guarantees at least one character from each selected type
- Shuffles the generated password for additional randomness
- Implements secure clipboard operations
- Provides visual feedback for user actions

## Accessibility

The application is built with accessibility in mind:

- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Clear visual feedback
- Screen reader friendly

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!