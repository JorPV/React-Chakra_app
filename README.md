# Drinks Explorer

A React application for browsing and selecting drinks, built with Chakra UI for a polished, responsive interface.

## Features

- Browse a collection of drinks with images
- Search drinks by name
- View drink details in a modal
- Select and manage drink choices
- Responsive card-based layout

## Tech Stack

![React](https://img.shields.io/badge/-React_18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Chakra UI](https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

- **React 18** for the UI
- **Chakra UI** for component styling
- **Framer Motion** for animations
- **Vite** for fast development and bundling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── App.jsx
├── components/
│   ├── DrinkChoice.jsx
│   ├── DrinkItem.jsx
│   ├── DrinkList.jsx
│   ├── DrinkSearch.jsx
│   ├── DrinkSelectModal.jsx
│   └── UI/
│       ├── Button.jsx
│       └── TextInput.jsx
└── utils/
    ├── data.js           # Drink dataset
    └── images/           # Drink photos
```
