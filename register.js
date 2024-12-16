document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
  
    // Save user credentials (simulating user registration with localStorage)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  });
  