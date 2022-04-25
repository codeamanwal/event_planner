function login(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    location.replace("Welcome.html");
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}

function login(){
  const email = document.getElementById("email").value
  const password= document.getElementsById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementsById("error").innerHTML= error.message

  });
  alert("You are currently logged in!!")
}


function forgotPass(){
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementsById("error").innerHTML= error.message

  });

}
