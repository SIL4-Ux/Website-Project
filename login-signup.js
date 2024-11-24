document.getElementById('myForm').addEventListener('submit', function(event) {
	event.preventDefault{};
	let errors = [];

	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	if (username.length < 3) {
		errors.push('Username must be 3 letters long.');
	}

	let emailPattern = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
	if (emailPattern.test(email)){
		errors.push('Please enter a valid email address.')
	}

	if (password.length < 6) {
		errors.push('Please password must be 6 characters long.');
	}

	if (errors.length > 0) {
		document.querySelector('error').innerHTML = errors.join('<br>');
	}
	else {
		document.querySelector('error').innerHTML = 'Form submitted successfully!';
	}
})

//Password Visibility
const passwordField = document.getElementById("password");
const togglePasswordIcon = document.querySelector(".password-toggle-icon ion-icon");

togglePasswordIcon.addEventListener("click", function () {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePasswordIcon.setAttribute("name", "lock-open-outline"); // Update icon
    } else {
        passwordField.type = "password";
        togglePasswordIcon.setAttribute("name", "lock-closed-outline"); // Update icon
    }
});