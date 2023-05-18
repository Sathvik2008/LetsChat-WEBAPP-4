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
document.getElementById("user_name").innerHTML="Hello " +user_name +"!!!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirectToRoomName(){
localStorage.setItem("room_name", room_name);
window.location("kwitter_page.html");
}
function logout(){
window.location="index.html";
}