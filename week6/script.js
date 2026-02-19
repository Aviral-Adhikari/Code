// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

// Realtime Database
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7yztUCpeKvcBpq0skEvrJ91k4deJ2EGc",
  authDomain: "localify-a282f.firebaseapp.com",
  databaseURL: "https://localify-a282f-default-rtdb.firebaseio.com",
  projectId: "localify-a282f",
  storageBucket: "localify-a282f.firebasestorage.app",
  messagingSenderId: "1011787806253",
  appId: "1:1011787806253:web:efc7741d0008442f79eaa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Database Connected", db);

/* ---------------- CREATE ---------------- */
function writeUserData(userId, name, email) {
  if (!userId || !name || !email) return;

  set(ref(db, "users/" + userId), { name, email })
    .then(() => console.log("User added:", userId))
    .catch(console.error);
}
window.writeUserData = writeUserData;


/* ---------------- CREATE ---------------- */
function writeEmpInfo(empId, name, email, birthday, phone, gender) {
  if (!empId || !name || !email || !birthday || !phone || !gender) return;

  set(ref(db, "empinformation/" + empId), {
    name,
    email,
    birthday,
    phone,
    gender,
  })
    .then(() => console.log("Employee information added:", empId))
    .catch(console.error);
}
window.writeEmpInfo = writeEmpInfo;

/* ---------------- READ ---------------- */
function readEmpInfo() {
  get(ref(db, "empinformation"))
    .then((snapshot) => {
      if (!snapshot.exists()) {
        console.log("No employee information found");
        return;
      }
      snapshot.forEach((child) => {
        console.log(child.key, child.val());
      });
    })
    .catch(console.error);
}
window.readEmpInfo = readEmpInfo;

/* ---------------- UPDATE ---------------- */
function updateUserData(userId, updatedData) {
  if (!userId) return;

  update(ref(db, "users/" + userId), updatedData)
    .then(() => console.log("User updated:", userId))
    .catch(console.error);
}
window.updateUserData = updateUserData;

function updateEmpInfo(empId, updatedData) {
  if (!empId) return;
``
  update(ref(db, "empinformation/" + empId), updatedData)
    .then(() => console.log("Employee information updated:", empId))
    .catch(console.error);
}
window.updateEmpInfo = updateEmpInfo;

/* ---------------- DELETE ---------------- */
function deleteUserData(userId) {
  if (!userId) return;

  remove(ref(db, "users/" + userId))
    .then(() => console.log("User deleted:", userId))
    .catch(console.error);
}
window.deleteUserData = deleteUserData;

function deleteEmpInfo(empId) {
  if (!empId) return;

  remove(ref(db, "empinformation/" + empId))
    .then(() => console.log("Employee information deleted:", empId))
    .catch(console.error);
}
window.deleteEmpInfo = deleteEmpInfo;
