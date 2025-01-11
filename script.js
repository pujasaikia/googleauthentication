function onSignIn(response) {
  try {
  
    const user = jwt_decode(response.credential);
    console.log('ID:', user.sub);
    console.log('Name:', user.name);
    console.log('Image URL:', user.picture);
    console.log('Email:', user.email);

    =
    document.getElementById("login-section").style.display = "none";
    document.querySelector(".chat-container").style.display = "block";

    
    const chatBody = document.querySelector(".chat-body");
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("message", "bot");
    welcomeMessage.innerHTML = `<p>Welcome, ${user.name}!</p>`;
    chatBody.appendChild(welcomeMessage);
  } catch (error) {
    console.error("Error during login processing:", error);
    alert("Login Failed. Please try again.");
  }
}


function onFailure(error) {
  alert("Login Failed. Please try again.");
  console.error("Login Error:", error);
}
