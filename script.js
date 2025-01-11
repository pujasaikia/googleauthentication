function onSignIn(response) {
  try {
    
    const userData = jwt_decode(response.credential);

    
    if (userData && userData.email) {
      console.log("User ID:", userData.sub);
      console.log("Full Name:", userData.name);
      console.log("Email:", userData.email);
      console.log("Profile Picture:", userData.picture);

      
      document.getElementById("login-section").style.display = "none";
      document.querySelector(".chat-container").style.display = "block";

      
      const chatHeader = document.querySelector(".chat-title");
      chatHeader.innerText = `Chat with us, ${userData.name}!`;
    } else {
      
      alert("Authentication failed. Please try again.");
      console.error("Error: Missing user data", userData);
    }
  } catch (error) {
    
    alert("An error occurred during authentication.");
    console.error("Error details:", error);
  }
}

/
function onFailure(error) {
  alert("Login Failed. Please try again.");
  console.error("Sign-in error details:", error);
}
