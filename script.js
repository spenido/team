var expectedPassword = "sproduction#23";
var storageKey = "passwordEnteredToday";

// Check if the password has been entered today
if (localStorage.getItem(storageKey)) {
    document.getElementById("mainSession").style.display = "block";
    document.getElementById("securitySession").style.display = "none";
} else {
    document.getElementById("mainSession").style.display = "none";
    document.getElementById("securitySession").style.display = "flex";
}

function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    if (enteredPassword === expectedPassword) {
        messageElement.innerHTML = "Password benar. Anda dapat melanjutkan.";
        messageElement.style.color = "green";
        
        // Set a flag in localStorage to indicate that the password has been entered today
        localStorage.setItem(storageKey, "true");

        // Hide the security session and show the main session
        document.getElementById("securitySession").style.display = "none";
        document.getElementById("mainSession").style.display = "block";
    } else {
        messageElement.innerHTML = "Password salah. Silakan coba lagi.";
        messageElement.style.color = "red";
    }
}
