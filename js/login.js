  document.querySelector("#login").addEventListener("click", function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Checking username length
  if (username.length < 9) {
    document.querySelector("#username-error").innerHTML = "invalid username";
  }

  if (password.length != 5 || password[0] != 1) {
    document.querySelector("#password-error").innerHTML = "invalid password";
  }
});
