function checkPassword() {
    const correctPassword = "mypassword";  // Set your password here
    const userInput = document.getElementById('passwordInput').value;

    if (userInput === correctPassword) {
        document.getElementById('hiddenContent').style.display = 'block';
    } else {
        alert("Incorrect password. Please try again.");
    }
}
