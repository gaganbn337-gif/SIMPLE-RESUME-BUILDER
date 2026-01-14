document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // VERY IMPORTANT

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // STATIC LOGIN (as you requested)
  if (email === "user@test.com" && password === "user123") {
    alert("Login Successful");
    window.location.href = "builder.html";
  } else {
    alert("Invalid Email or Password");
  }
});
