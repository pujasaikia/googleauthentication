function onSignIn(response) {
  try {
    const user = jwt_decode(response.credential);
    console.log('ID:', user.sub);
    console.log('Name:', user.name);
    console.log('Image URL:', user.picture);
    console.log('Email:', user.email);

    document.getElementById("login-section").style.display = "none";
    document.querySelector(".chat-container").style.display = "block";
  } catch (error) {
    console.error("Error during login processing:", error);
    alert("Login Failed. Please try again.");
  }
}
