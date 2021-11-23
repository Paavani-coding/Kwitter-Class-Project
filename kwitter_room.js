var firebaseConfig = {
      apiKey: "AIzaSyAkTSGD7THOgE326uhFlbQyi_qbSPQViD8",
      authDomain: "kwitter-9d029.firebaseapp.com",
      databaseURL: "https://kwitter-9d029-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d029",
      storageBucket: "kwitter-9d029.appspot.com",
      messagingSenderId: "84630460421",
      appId: "1:84630460421:web:5d81bf03a2598213cde46c",
      measurementId: "G-14N4QPBB5J"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+ user_name + " !";

function add_room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room name: "+ Room_names);
            row= '<div class="room_name" id= ' + Room_names + ' onclick="redirectToRoomName(this.id)" >#' +Room_names +'</div><hr>';
            document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}


