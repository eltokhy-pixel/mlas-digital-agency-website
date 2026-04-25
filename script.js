// تفاعل النموذج
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكراً لك! سنتواصل معك قريباً');
        form.reset();
    });
});

// تأثير الأزرار
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

console.log('✨ MLAS Website Loaded Successfully!');
