document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if user is registered (simulated with localStorage)
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      window.location.href = "subjects.html";
    } else {
      alert("Invalid username or password!");
    }
  });
  