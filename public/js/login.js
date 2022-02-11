const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
}


const signupFormHandler = async (event) => {
    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#password-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
}