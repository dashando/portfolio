// Бургер-меню для мобильных
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Валидация email
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('input', () => {
    if (emailInput.value && !isValidEmail(emailInput.value)) {
        emailError.classList.add('show');
    } else {
        emailError.classList.remove('show');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isValidEmail(emailInput.value)) {
        emailError.classList.add('show');
        return;
    }
    alert('Спасибо! Ваше сообщение отправлено. Я отвечу в течение 24 часов.');
    form.reset();
    emailError.classList.remove('show');
});