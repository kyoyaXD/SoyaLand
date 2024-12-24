const VALID_USERNAME = "Ponyo";
const VALID_PASSWORD = "19032005";

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error-message").style.display = "block";
  }
});
