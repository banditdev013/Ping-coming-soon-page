const formInput = document.getElementById('form-input-email')
const inputEmail = document.getElementById('input-email')
const emailValue = document.getElementById('email')

formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateEmail(emailValue.value.trim())) {
        inputEmail.classList.remove('success')
        inputEmail.classList.add('error')
    } else {
        inputEmail.classList.add('success')
    }
})

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}