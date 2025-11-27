// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 스크롤 시 헤더 그림자 효과
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
});

// 서브 네비게이션 섹션 전환
const subNavLinks = document.querySelectorAll('.sub-nav a');

subNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // 모든 링크에서 active 클래스 제거
        subNavLinks.forEach(l => l.classList.remove('active'));

        // 클릭된 링크에 active 클래스 추가
        link.classList.add('active');

        // 모든 섹션 콘텐츠 숨기기
        const allContents = document.querySelectorAll('.section-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        // 선택된 섹션 콘텐츠 보여주기
        const sectionName = link.getAttribute('data-section');
        const targetContent = document.getElementById(sectionName + '-content');
        if (targetContent) {
            targetContent.style.display = 'block';
        }

        // 서브 네비게이션 위치로 스크롤
        const subNav = document.querySelector('.sub-nav');
        if (subNav) {
            const subNavTop = subNav.offsetTop;
            window.scrollTo({
                top: subNavTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// 검색창 토글
const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.querySelector('.search-bar');

if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.querySelector('input').focus();
        }
    });
}

// 사이트맵 메뉴 토글
const menuToggle = document.querySelector('.menu-toggle');
const sitemapOverlay = document.querySelector('.sitemap-overlay');
const sitemapClose = document.querySelector('.sitemap-close');

if (menuToggle && sitemapOverlay) {
    menuToggle.addEventListener('click', () => {
        sitemapOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (sitemapClose) {
    sitemapClose.addEventListener('click', () => {
        sitemapOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// 오버레이 클릭 시 메뉴 닫기
if (sitemapOverlay) {
    sitemapOverlay.addEventListener('click', (e) => {
        if (e.target === sitemapOverlay) {
            sitemapOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// 다크 섹션 감지하여 헤더 스타일 변경
const header = document.querySelector('.main-header');
const darkSections = document.querySelectorAll('.dark-section');

function checkHeaderPosition() {
    const headerBottom = header.getBoundingClientRect().bottom;
    let isDark = false;

    darkSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // 헤더가 다크 섹션과 겹치는지 확인
        if (sectionTop <= headerBottom && sectionBottom >= 0) {
            isDark = true;
        }
    });

    if (isDark) {
        header.classList.add('dark');
    } else {
        header.classList.remove('dark');
    }
}

window.addEventListener('scroll', checkHeaderPosition);
window.addEventListener('load', checkHeaderPosition);

// 제품 카드 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// 상담 신청 버튼 클릭
const inquiryBtn = document.querySelector('.btn-primary');
if (inquiryBtn) {
    inquiryBtn.addEventListener('click', () => {
        alert('상담 신청 기능은 준비 중입니다.');
    });
}

console.log('LX Hausys LONCHEL Website Loaded');
