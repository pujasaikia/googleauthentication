function onSignIn(response) {
  const userCredential = jwt_decode(response.credential);
  console.log('ID:', userCredential.sub);
  console.log('Name:', userCredential.name);
  console.log('Image URL:', userCredential.picture);
  console.log('Email:', userCredential.email);

  document.getElementById("login-section").style.display = "none";
  document.querySelector(".chat-container").style.display = "block";
}

function onFailure(error) {
  alert("Login Failed. Please try again.");
  console.error("Error details:", error);
}
