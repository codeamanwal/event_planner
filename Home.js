
var firebaseConfig = {
    apiKey: "AIzaSyABxKoaMeyjWnobZ4603V1bPceC8MPnJ08",
    authDomain: "eventp-c8d20.firebaseapp.com",
    databaseURL: "https://eventp-c8d20-default-rtdb.firebaseio.com",
    projectId: "eventp-c8d20",
    storageBucket: "eventp-c8d20.appspot.com",
    messagingSenderId: "237275657082",
    appId: "1:237275657082:web:b7e72a64cf53434b4e5cc3",
    measurementId: "G-RSETVW95HT"
  };

  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);


  var auth =  firebase.auth();
  var database= firebase.database()


function signUp(){
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   var first_name = document.getElementById("Fname");
   var last_name = document.getElementById("Lname");
   var phone = document.getElementById("PhNo");
 }

if(validate_email(email) == false || validate_password(password)==false){
  alert("Email or password is invalid!!")
  return
}

auth.createUserWithEmailAndPassword(email,password)
.then(function(){

  var user = auth.currentUser

  var database_ref = database.ref()

  varuser_data = {
    email: email,
    Fname: Fname,
    Lname: Lname,
    PhNo: PhNo,
    last_login: Date.now()
  }

  database_ref.child('users/' + user.uid).set(user_data)
  alert("User Created Successfully!!")
})
.catch(function(error){
  var error_code = error.code
  var error_message = error.message
  alert(error_message)
})

function login(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var first_name = document.getElementById("Fname");
  var last_name = document.getElementById("Lname");
  var phone = document.getElementById("PhNo");

}

  if(validate_email(email) == false || validate_password(password)==false){
    alert("Email or password is invalid!!")
    return
  }

  auth.signInWithEmailAndPassword(email,password)
  .then(function(){
    var user = auth.currentUser

    var database_ref = database.ref()

    varuser_data = {
      last_login: Date.now();
    }

    database_ref.child('users/' + user.uid).update(user_data)
    alert("User Logged In!!")
  })
  .catch(function(error){
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
  })
}


 function validate_email(email){
   expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if(expression.test(email)==true){
     return true
   }else {
     return false
   }
 }

function validate_password(password){
  if(password < 6){
    return false
  }else{
    return true
  }
}
