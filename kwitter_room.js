

const firebaseConfig = {
      apiKey: "AIzaSyDn6FZHEP1u20dHWAPay2_H-23HpiAHTN4",
      authDomain: "kwitter-17499.firebaseapp.com",
      databaseURL: "https://kwitter-17499-default-rtdb.firebaseio.com",
      projectId: "kwitter-17499",
      storageBucket: "kwitter-17499.appspot.com",
      messagingSenderId: "59976504191",
      appId: "1:59976504191:web:05e35a83f588c08c75804a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot)
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) 
             {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
