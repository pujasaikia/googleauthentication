function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); 

  document.getElementById("login-section").style.display = "none";
  document.querySelector(".chat-container").style.display = "block";
}

function onFailure(error) {
  alert("Login Failed. Please try again.");
  console.error("Error details:", error);
}
