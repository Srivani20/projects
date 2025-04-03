// Get the toggle switch, forms, and label elements
const toggleSwitch = document.getElementById('toggleSwitch');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleLabel = document.getElementById('toggleLabel');

// Initially, display the Login form
loginForm.classList.add('active');

// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        // Switch to Sign Up
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        toggleLabel.textContent = 'Login';  // Change label to 'Login'
    } else {
        // Switch to Login
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        toggleLabel.textContent = 'Sign Up';  // Change label to 'Sign Up'
    }
});
