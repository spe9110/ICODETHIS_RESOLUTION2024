// Add JavaScript code

const links = document.querySelectorAll('a');
const mainContainer = document.querySelector('main');
const passwordInput = document.querySelector('#password-input');
const eyeBtn = document.querySelector(".eye-btn");
const resetBtn = document.querySelector(".reset-btn");
const form = document.querySelector("#password-form");
const welcomeOverlay = document.querySelector(".welcome-overlay");


// Override Anchor tags default behaviour
const overrideLinkBehaviour = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};



//Handles Show/Hide Password Functionality
const toggleSeePassword = () => {
    eyeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (eyeBtn.classList.contains('--password-active')) {
            eyeBtn.classList.toggle('--password-active');
            const innerButton = `<span class="sr-only">Show Password</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>`
            eyeBtn.innerHTML = innerButton;
            passwordInput.type = 'text';
        } else {
            eyeBtn.classList.toggle('--password-active');
            const innerButton = `<span class="sr-only">Hide Password</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>`
            eyeBtn.innerHTML = innerButton;
            passwordInput.type = 'password';
        }
    });
}

// Reset password
const resetPassword = () => {
    resetBtn.addEventListener('click', (e) => {
        passwordInput.value = '';
    })
}


// Form submit
const formSubmit = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        welcomeOverlay.classList.toggle('welcome--active');
        setTimeout(() => {
            form.reset();
            welcomeOverlay.classList.toggle('welcome--active');
        }, 2000);
    })
}

//The Marcin Malecki's way for thumbnail perfection
if (navigator.userAgent.includes("Headless")) {
    mainContainer.style.transitionDuration = '0s';
    mainContainer.classList.remove('-translate-y-100vh');
    mainContainer.classList.remove('opacity-0');
    mainContainer.classList.remove('pointer-events-none');

}

window.addEventListener('DOMContentLoaded', () => {
    overrideLinkBehaviour();
    toggleSeePassword();
    resetPassword();
    formSubmit();
    setTimeout(() => {
        mainContainer.classList.remove('-translate-y-100vh');
        mainContainer.classList.remove('opacity-0');
        mainContainer.classList.remove('pointer-events-none');
    }, 1000)
});