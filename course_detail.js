function unlockLecture() {
    const code = document.getElementById("course-code").value;
    const validCode = "ABC123"; // Example of a valid code
    const mmcode = "1111"
    if (code === validCode,mmcode) {
      document.getElementById("lecture-content").style.display = "block";
    } else {
      alert("Invalid code! Please try again.");
    }
  }
  