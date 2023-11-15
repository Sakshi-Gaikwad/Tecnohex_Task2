document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can add further validation here

    alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email);
});