// Allows user to log in
const loginFormHandler = async (event) => {
    event.preventDefault();
    // Uses value from text in textboxes
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Value of textboxes is loaded into body
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username, password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Redirects to home if successful
        if (response.ok) {
            console.log('success');

            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// Creates new user
const signupFormHandler = async (event) => {
    event.preventDefault()
    // Uses value form text in textboxes
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // Value of textboxes are loaded into body
    if (username && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username, email, password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Redirects to home if successful
        if (response.ok) {
            console.log('success');

            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

