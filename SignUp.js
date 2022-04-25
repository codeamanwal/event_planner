function signup(){
  const email = document.getElementById("email").value
  const password= document.getElementsById("password").value
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      location.replace("SignIn.html")
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementsById("error").innerHTML= error.message;
      // ..
    });
}
