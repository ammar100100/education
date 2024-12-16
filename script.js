// Mock database
const users = [
    { email: "ammar@example.com", password: "1234", name: "Ammar Yasser", balance: 0 },
  ];
  
  // Handle Login
  function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = users.find((u) => u.email === email && u.password === password);
  
    if (user) {
      alert("Login successful!");
      showProfile(user);
    } else {
      alert("Invalid email or password.");
    }
  }
  
  // Display Profile
  function showProfile(user) {
    document.getElementById("login-form").classList.add("d-none");
    document.getElementById("profile").classList.remove("d-none");
  
    document.getElementById("user-name").textContent = `Name: ${user.name}`;
    document.getElementById("user-email").textContent = `Email: ${user.email}`;
    document.getElementById("user-balance").textContent = `Balance: $${user.balance}`;
  }
  
  // Simulate Charging Balance
  function chargeBalance() {
    alert("Charging $10 to your account...");
    const userEmail = document.getElementById("user-email").textContent.split(": ")[1];
    const user = users.find((u) => u.email === userEmail);
    user.balance += 10;
  
    document.getElementById("user-balance").textContent = `Balance: $${user.balance}`;
  }
  // Theme Toggle Script
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Switch Icon
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
