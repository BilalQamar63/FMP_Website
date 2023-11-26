// =====APPLY NOW INDEX WORK
var  firebaseConfig = {
    apiKey: "AIzaSyBl6qK02qP4wiiUcXRsBAYunpVoQJYyqVM",
    authDomain: "fmpwebsite786.firebaseapp.com",
    databaseURL: "https://fmpwebsite786-default-rtdb.firebaseio.com",
    projectId: "fmpwebsite786",
    storageBucket: "fmpwebsite786.appspot.com",
    messagingSenderId: "860992226581",
    appId: "1:860992226581:web:00ef52618602e4876ad51c"
  };


// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

console.log(app)


function submit() {
    var email = document.getElementById("email");
    var password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            Swal.fire({
                title: "<i>CONGRATULATIONS</i>", 
                html: "YOUR REGISTRAION IS: <b>COMPLETED</b>",  
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });


    var section = document.getElementById("section");
    var name = document.getElementById("name");
    
    var userDetails = {
        name: name.value,
        email: email.value,
        section: section.value,
    };
    
    
    
    var key = Math.random() * 32462353245;
    
    
    firebase
    .database()
    .ref("users/" + Math.round(key))
    .set(userDetails)
}


function login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    Swal.fire({
        title: "<i>WELCOME</i>", 
        html: "YOUR ARE  : <b>LOGGED IN</b>",  
    });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}