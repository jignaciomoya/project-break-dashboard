const generatePassword = (source, length) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * source.length);
        password += source.charAt(random);
    }
    return password;
}

const generate = () => {
    let length = parseInt(document.getElementById('passwordLength').value);
    const source = 'abcdefghijklmnñoprstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    if (length >= 12 && length <= 50) {
        let generatedPassword = document.getElementById('generatedPassword');
        generatedPassword.innerText = generatePassword(source, length);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let buttonGenerate = document.getElementById('btnGeneratePassword');
    buttonGenerate.addEventListener('click', () => {
        generate();
    });
});