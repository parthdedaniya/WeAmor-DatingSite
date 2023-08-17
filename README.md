# WeAmor - Dating Site Demo

Welcome to the Dating Site Demo! This repository contains a simple dating site showcasing some basic features. The site allows users to explore registered members, search by name, view personal profiles, and mark members as favorites.

## Features

- View Registered Members: Users can see a list of all registered members on the app.
- Search by Name: Users can search for specific members by their names.
- Personal Profile Pages: Clicking on a member card leads to their personal profile page, where users can learn more about them.
- Favorite Members: Users can mark members as favorites or unfavorite them by clicking the favorite button.

## Demo

This is a demo site, so only a limited set of features has been implemented. It's intended to showcase the basic functionality of a dating site.

## Technologies Used

- Vue.js 3: Frontend framework for building user interfaces.
- Firebase Firestore: Cloud-based NoSQL database for storing user data.

## Environment Variables and Firebase Configuration

To securely manage sensitive configuration details, such as your Firebase setup, this project uses environment variables provided by Vite. The `.env` file at the root of the project stores these variables. The variables are accessed using `import.meta.env.VITE_VARIABLE_NAME` in your Vue components.

To configure Firebase, make sure to set the following environment variables in your `.env` file:

```plaintext
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
