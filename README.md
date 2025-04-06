# 🎥 Cameos – A YouTube Clone  

> **Built with:** React.js ⚛️ | Redux 🧠 | Firebase Auth 🔐 | YouTube Data API 🎞️  

Cameos is a responsive YouTube clone that lets users log in via Google using Firebase Authentication and enjoy a fully-featured, dynamic video browsing experience. Videos and metadata are fetched in real-time using **Redux** and **YouTube Data API v3**.

---

## 🌐 Live Demo

👉 [**Try Cameos Now**](https://cameos-arnavsharma2711.netlify.app)

> ⚠️ If video data doesn’t appear, the YouTube API quota might have been exhausted for the day.

---

## ⚙️ Prerequisites

Before running the app locally, make sure you have:

- 🟢 **Node.js** installed
- 🔑 A `.env` file in the project root with your YouTube API key:
  
```bash
REACT_APP_YT_API_KEY="your-api-key"
```

> To get your API key: head to [Google Cloud Console](https://console.cloud.google.com/), enable **YouTube Data API v3**, and generate a key.

- 📦 Install the dependencies:

```bash
npm i
```

---

## 🚀 Getting Started

To run the app locally:

```bash
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser. 🔁 The page will auto-reload on code changes and show any linting errors in the console.

---

## 📖 Project Overview

### 🔐 Authentication Flow
- On launch, the app checks for an **access token**. If not found, it redirects to the **Login screen**.
- The login uses **Firebase Auth** with Google Sign-In and stores the user’s name & profile picture.

### 🏠 Home Screen
- Consists of:
  - Header (with search)
  - Sidebar (popular categories, liked videos, subscriptions)
  - Categories bar (dummy array)
  - Video feed (popular videos in India fetched via API)
- Clicking on a video navigates to the **Video Playback Screen**.

### 🎬 Video Playback
- Embedded YouTube video via `iframe`
- Video metadata (title, views, publish date)
- Related video suggestions
- Comment section input

### 🔎 Search Screen
- Shows video results for the user’s search query.

### ❤️ Liked Videos
- Displays a list of user-liked videos (up to 15)

### 👤 Subscriptions
- Displays subscribed channels (based on dummy logic)

---

## 📸 Screenshots

| Feature | Preview |
|--------|---------|
| 🔐 Login Screen | ![Login Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/1.%20Login%20Screen.png?raw=true) |
| ☁️ Firebase Auth | ![Firebase Auth](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/2.%20Firebase%20Auth.png?raw=true) |
| 🏠 Home Screen | ![Home Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/3.%20Home%20Screen.png?raw=true) |
| 🗂️ Category Select | ![Category Select](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/4.%20Category%20Select.png?raw=true) |
| 🔍 Search Screen | ![Search Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/5.%20Search%20Screen.png?raw=true) |
| 🎞️ Video Playback | ![Video Playback](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/5.%20Video%20Playback%20Screen.png?raw=true) |
| ❤️ Liked Videos | ![Liked Videos](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/6.%20Liked%20Screen.png?raw=true) |
| 📺 Subscriptions | ![Subscriber Screen](https://github.com/arnavsharma2711/Cameos/blob/main/Screenshot/7.%20Subscriber%20Screen.png?raw=true) |

---

## 🔮 Future Scope

Here’s what’s planned next:

1. ✅ Enable actual **subscription functionality** for channels  
2. 👥 Add a **dummy user** for easy guest access  
3. 🔐 Expand authentication methods (e.g., GitHub, Email/Password)

---

## 📚 References & Libraries

- **React.js** → [reactjs.org](https://reactjs.org/docs/getting-started.html)  
- **Redux** → [redux.js.org](https://redux.js.org/introduction/getting-started)  
- **Firebase** → [firebase.google.com](https://firebase.google.com/docs/web/setup)  
- **YouTube Data API v3** → [developers.google.com/youtube/v3](https://developers.google.com/youtube/v3/getting-started)  
- **React Router DOM** → [reactrouter.com](https://reactrouter.com/docs/en/v6)

### 🛠️ Other Tools & Libraries:

- [Axios](https://www.npmjs.com/package/axios)  
- [Bootstrap](https://www.npmjs.com/package/bootstrap)  
- [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)  
- [React Content Loader](https://www.npmjs.com/package/react-content-loader)  
- [React Lazy Load Image](https://www.npmjs.com/package/react-lazy-load-image-component)  
- [React Helmet](https://www.npmjs.com/package/react-helmet)  
- [Numeral.js](https://www.npmjs.com/package/numeral)  
- [Moment.js](https://www.npmjs.com/package/moment)
