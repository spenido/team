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
    var contmessage = document.getElementById("mescenter");

    if (enteredPassword === expectedPassword) {
        messageElement.innerHTML = "Mohon tunggu <i class='fa-solid fa-spinner fa-spin-pulse'></i>";
        contmessage.style.display = "block";
        
        setTimeout(function () {
            messageElement.innerHTML = "Berhasil memasuki halaman <i class='fa-solid fa-spinner fa-spin-pulse'></i>";
        }, 2400);

        // Set a flag in localStorage to indicate that the password has been entered today
        localStorage.setItem(storageKey, "true");

        // Hide the security session and show the main session
        setTimeout(function () {
            document.getElementById("securitySession").style.display = "none";
            document.getElementById("mainSession").style.display = "block";
        }, 4800);
    } else {
        messageElement.innerHTML = "Password salah. Silahkan coba lagi!";
        contmessage.style.display = "block";
        setTimeout(function () {
            contmessage.style.display = "none";
        }, 3000);
    }
}
 
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.getElementById("toggleButton");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerHTML = "<i class='far fa-eye-slash'></i>";
    } else {
        passwordInput.type = "password";
        toggleButton.innerHTML = "<i class='far fa-eye'></i>";
    }
}

function toggleDarkTheme() {
    // Toggle dark theme class on the body
    document.body.classList.toggle('dark-theme');

    // Detect and update styles for other elements
    const elementsToStyle = ['section', 'div', 'p', 'h1', 'h2', 'h3', 'span', 'button'];
    elementsToStyle.forEach(elementType => {
        const elements = document.getElementsByTagName(elementType);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('dark-theme');
        }
    });
}

function disLoad () {
    setTimeout(function () {
        document.getElementById("areaLoading").style.display = "none";
        document.getElementById("inter-section").style.display = "block";
    }, 4000);
}
