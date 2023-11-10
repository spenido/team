document.getElementById('submit-button').addEventListener('click', function () {
    const inputPassword = document.getElementById('password').value;
    const fixedPassword = 'sproduction#23'; // Replace with your fixed password

    if (inputPassword === fixedPassword) {
        document.getElementById('login-message').textContent = 'Login successful!';
        document.getElementById('loginSect').style.display = 'none';
    } else {
        document.getElementById('login-message').textContent = 'Login failed. Incorrect password!';
    }
});

document.getElementById('login-form').addEventListener('input', function() {
    document.getElementById('label').style.display = "none";
  });
  