const firebaseConfig = {
  apiKey: "AIzaSyADR5O8Raf3LxKanVTci3x62Ax6mDKPzFE",
  authDomain: "letschat-web-app-6df27.firebaseapp.com",
  databaseURL: "https://letschat-web-app-6df27-default-rtdb.firebaseio.com",
  projectId: "letschat-web-app-6df27",
  storageBucket: "letschat-web-app-6df27.appspot.com",
  messagingSenderId: "1042349757261",
  appId: "1:1042349757261:web:ce12012d9d5c7473599d04"
};
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

 function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like: 0
    });
document.getElementById("msg").value="";
  }