import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* 🔒 Replace with your Firebase config */
const firebaseConfig = {
  apiKey: "AIzaSyBkVxFEcxHsyzweX6rvcxvLKhJq-0TsCSY",
  authDomain: "snook-2026-47995.firebaseapp.com",
  projectId: "snook-2026-47995",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const feed = document.querySelector(".feed");

// Query posts collection, newest first
const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

// Real-time updates
onSnapshot(q, (snapshot) => {
  feed.innerHTML = "";
  snapshot.forEach(doc => {
    const post = doc.data();
    const el = document.createElement("article");
    el.className = "post";
    el.innerHTML = `
      <p class="quote">${post.content}</p>
      <span class="time">quietly shared</span>
    `;
    feed.appendChild(el);
  });
});
