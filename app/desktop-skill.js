// 滚动动画
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(card);
    });
});

// 导航栏交互
window.addEventListener('scroll', () => {
    const header = document.querySelector('.desktop-header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
window.addEventListener('scroll', () => {
    const footer = document.querySelector('.desktop-footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    
    // 当滚动到底部时显示完整颜色
    if(scrollPosition >= pageHeight - 100) {
        footer.style.background = 'rgba(0, 114, 181, 0.98)';
    } else {
        footer.style.background = 'rgba(0, 114, 181, 0.85)';
    }
});