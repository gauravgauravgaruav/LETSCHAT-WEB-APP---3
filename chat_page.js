//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBzpVhEA_30nFeHkt90Rux2In6lvq-QGVY",
    authDomain: "kwitter-ed319.firebaseapp.com",
    databaseURL: "https://kwitter-ed319-default-rtdb.firebaseio.com",
    projectId: "kwitter-ed319",
    storageBucket: "kwitter-ed319.appspot.com",
    messagingSenderId: "556999001006",
    appId: "1:556999001006:web:2d2618ce2d42f3d076fe3f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}





function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
}



