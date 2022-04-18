
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    var uid = user.uid;
    location.replace("SignIn.html")
    // ...
  } else {
    document.getElementById("user").innerHTML="Hello", email

    // User is signed out
}
});

function logout(){

  firebase.auth().signOut()

  }
function Newgroup(){
  name=prompt("ENTER THE NAME OF NEW GROUP");
}
firebase.database().ref("user").set({
  nameofnewgroup:name
})


function Joingroup(){
  namej=prompt("ENTER NAME OF GROUP")
}
if namej in nameofnewgroup{
  post=<input type = "textbox" placeholder="typehere">
}
else{
  alert("No such Group!!")
}
firebase.database().ref("user").set({
  nameofgroup:namej
})
let uid = 734682
firebase.database().ref("user").set({
  username:document.getElementById("email").value
})
const post = {
  author: uid,
  title: "START YOUR DISCUSSION!!",
  body : "MAKE EVENTS PLANNED!!"

}
let updates = {}
updates["posts/"newKey]=post
updates["userposts/"+uid"/"+newKey]=post
let newKey=firebase.database().ref("posts").push().key
firebase.database().ref().update{
  "posts/unique-key": post,
  "userposts/uid/unique-key" :post
}
firebase.database().ref().update(updates)
