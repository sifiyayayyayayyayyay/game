// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-from-left').forEach(el => {
        observer.observe(el);
    });
});

// 导航栏交互
window.addEventListener('scroll', function() {
    const header = document.querySelector('.desktop-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.desktop-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // 向下滚动时
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('scrolled');
        } 
        // 向上滚动或回到顶部
        else {
            header.classList.remove('scrolled');
        }
        
        // 更新滚动位置记录
        lastScroll = currentScroll;
    });
});
// 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tip-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    observer.observe(card);
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