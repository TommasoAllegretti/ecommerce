## 🚀 Project Overview

This project is a **Vue 3** application built with **TypeScript**, using **Firebase Authentication** and **Firestore** as backend services. Styling is powered by **Tailwind CSS**. State management is handled with **Pinia**, and routing is managed by **Vue Router**.

The project includes:

**Composable utilities** (e.g., useAuth) for handling authentication and screen detection.

**Reusable UI components** such as ItemCard, TagBadge, BaseModal, and SignOutButton.

**Protected routes** using navigation guards.

**Unit tests** with **Vitest** + **Vue Test Utils**.

## 🛠️ Technologies Used

**Vue 3** + **TypeScript** – Frontend framework

**Pinia** – State management

**Vue Router** – Client-side routing with guards

**Tailwind CSS** – Utility-first styling

**Firebase (Auth + Firestore)** – Authentication and database

**Vitest** + **Vue Test Utils** – Unit testing

## ⚙️ Project Setup

1. Install dependencies

```bash
npm install
```

2. Environment variables

Create a .env file in the project root with your Firebase config:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_MESSAGE_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

3. Run the development server

```
npm run dev
```

App will be available at http://localhost:5173/ (or the port shown in your terminal).

## ✅ Running Tests

**Unit tests (Vitest)**

```
npm run test:unit
```

Runs the unit tests located in src/components/**tests**/ (e.g. Modal.spec.ts).

## 📦 Build for Production

```
npm run build
```
