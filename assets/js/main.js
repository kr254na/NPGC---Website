/* ==========================================================
   CONSOLIDATED MASTER SCRIPT - NPGC College Website
   Version: 2.2 (Component Aware + Lightbox)
   ========================================================== */

function initGlobalUI() {
    /* ── 1. NAVBAR & MENU TOGGLE ── */
    const menuToggle = document.getElementById('menu-icon');
    const navMenu = document.querySelector('#navbar-placeholder .nav-menu'); // More specific
    
    if (menuToggle && navMenu) {
        menuToggle.onclick = null; 
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    /* ── 1.1 MOBILE SUB-MENU ACCORDION ── */
    const allMenuItems = document.querySelectorAll('#navbar-placeholder .nav-menu > li');
    allMenuItems.forEach(li => {
        const subMenu = li.querySelector('.sub-menu');
        const link = li.querySelector(':scope > a');
        if (subMenu && link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    li.classList.toggle('open');
                }
            });
        }
    });

    /* ── 2. NEWS SCROLLER ── */
    const newsPanel = document.getElementById("newsPanel");
    const newsBtn = document.getElementById("newsBtn");
    const scroller = document.querySelector("#newsPanel .news-body");
    const track = document.querySelector("#newsPanel .news-track");

    if (newsBtn && newsPanel) {
        newsBtn.onclick = null;
        newsBtn.addEventListener('click', () => newsPanel.classList.toggle("hidden"));
    }

    if (scroller && track) {
        let scrollSpeed = 0.5;
        let isDragging = false;
        let startY, startScroll;

        function autoScroll() {
            if (!isDragging && newsPanel && !newsPanel.classList.contains('hidden')) {
                scroller.scrollTop += scrollSpeed;
                if (scroller.scrollTop >= track.scrollHeight / 2) {
                    scroller.scrollTop = 0;
                }
            }
            requestAnimationFrame(autoScroll);
        }
        autoScroll();

        scroller.addEventListener("mousedown", e => {
            isDragging = true;
            scroller.style.cursor = "grabbing";
            startY = e.pageY;
            startScroll = scroller.scrollTop;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            scroller.style.cursor = "grab";
        });

        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            const dy = e.pageY - startY;
            scroller.scrollTop = startScroll - dy;
        });
    }

    /* ── 3. HERO SLIDER ── */
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    if (slider && slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000;
        let autoSlideInterval;

        function goToSlide(index) {
            currentSlide = index;
            const offset = -currentSlide * 100;
            slider.style.transform = `translateX(${offset}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        }

        function startSlideTimer() { 
            stopSlideTimer();
            autoSlideInterval = setInterval(nextSlide, slideInterval); 
        }
        function stopSlideTimer() { clearInterval(autoSlideInterval); }

        startSlideTimer();

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.slide);
                if (!isNaN(idx)) { goToSlide(idx); startSlideTimer(); }
            });
        });

        slider.addEventListener('mouseenter', stopSlideTimer);
        slider.addEventListener('mouseleave', startSlideTimer);
    }
}

/* ── 4. GLOBAL SCROLL REVEAL ── */
function initGlobalReveals() {
    const reveals = document.querySelectorAll('.reveal, .rv');
    if (reveals.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active', 'on');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    reveals.forEach(el => revealObserver.observe(el));
}

/* ── 5. GLOBAL COUNTER ANIMATION ── */
function initGlobalCounters() {
    const statNumbers = document.querySelectorAll('.stat-number, .stat-num, .counter');
    if (statNumbers.length === 0) return;

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const match = el.innerText.match(/(\d+)/);
                if (!match) return;
                const target = parseInt(match[1]);
                const suffix = el.innerHTML.replace(match[1], '');
                const duration = 1500;
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(progress * target);
                    el.innerHTML = current + suffix;
                    if (progress < 1) requestAnimationFrame(updateCount);
                }
                requestAnimationFrame(updateCount);
                countObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(s => countObserver.observe(s));
}

/* ── 6. GLOBAL IMAGE LIGHTBOX ── */
function initGlobalLightbox() {
    const items = document.querySelectorAll('.gallery-item');
    if (items.length === 0) return;

    /* Inject modal once */
    if (!document.getElementById('npgc-lightbox')) {
        document.body.insertAdjacentHTML('beforeend', `
        <div id="npgc-lightbox" style="
            display:none; position:fixed; inset:0; z-index:99999;
            background:rgba(0,0,0,0.92); align-items:center; justify-content:center;
            flex-direction:column; padding:20px;">
          <button id="npgc-lb-close" style="
              position:absolute; top:18px; right:22px;
              background:none; border:none; color:#fff; font-size:2rem;
              cursor:pointer; line-height:1; z-index:2;" aria-label="Close">&#x2715;</button>
          <button id="npgc-lb-prev" style="
              position:absolute; left:16px; top:50%; transform:translateY(-50%);
              background:rgba(255,255,255,0.12); border:none; color:#fff;
              font-size:1.8rem; width:50px; height:50px; border-radius:50%;
              cursor:pointer; z-index:2; display:flex; align-items:center; justify-content:center;">&#8249;</button>
          <button id="npgc-lb-next" style="
              position:absolute; right:16px; top:50%; transform:translateY(-50%);
              background:rgba(255,255,255,0.12); border:none; color:#fff;
              font-size:1.8rem; width:50px; height:50px; border-radius:50%;
              cursor:pointer; z-index:2; display:flex; align-items:center; justify-content:center;">&#8250;</button>
          <img id="npgc-lb-img" src="" alt="" style="
              max-width:92vw; max-height:88vh; object-fit:contain;
              border-radius:6px; box-shadow:0 10px 60px rgba(0,0,0,0.6);
              transition:opacity .25s ease;" />
          <p id="npgc-lb-caption" style="
              color:rgba(255,255,255,0.75); margin-top:14px;
              font-size:0.9rem; text-align:center;"></p>
        </div>`);
    }

    const lb       = document.getElementById('npgc-lightbox');
    const lbImg    = document.getElementById('npgc-lb-img');
    const lbCap    = document.getElementById('npgc-lb-caption');
    const lbClose  = document.getElementById('npgc-lb-close');
    const lbPrev   = document.getElementById('npgc-lb-prev');
    const lbNext   = document.getElementById('npgc-lb-next');

    /* Build ordered list from all gallery items on the page */
    const gallery  = Array.from(items);
    let current    = 0;

    function openLightbox(index) {
        current = ((index % gallery.length) + gallery.length) % gallery.length;
        const el  = gallery[current];
        // Use img.src directly (browser already resolves it to an absolute URL)
        // Fall back to data-hd, encoding spaces so filenames with spaces work
        let src = el.querySelector('img')?.src
                  || el.dataset.hd?.split('/').map(encodeURIComponent).join('/') || '';
        const alt = el.querySelector('img')?.alt || '';
        lbImg.style.opacity = '0';
        lbImg.src = src;
        lbImg.alt = alt;
        lbCap.textContent = alt;
        lbImg.onload = () => { lbImg.style.opacity = '1'; };
        lb.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lb.style.display = 'none';
        document.body.style.overflow = '';
        lbImg.src = '';
    }

    /* Wire gallery items */
    gallery.forEach((el, i) => {
        el.style.cursor = 'zoom-in';
        el.addEventListener('click', () => openLightbox(i));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(current - 1); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(current + 1); });

    /* Click outside image to close */
    lb.addEventListener('click', (e) => {
        if (e.target === lb) closeLightbox();
    });

    /* Keyboard support */
    document.addEventListener('keydown', (e) => {
        if (lb.style.display !== 'flex') return;
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft')  openLightbox(current - 1);
        if (e.key === 'ArrowRight') openLightbox(current + 1);
    });
}

/* ── COORDINATED INITIALIZATION ── */
function bootstrap() {
    initGlobalReveals();
    initGlobalCounters();
    initGlobalLightbox();
    
    if (window.componentsLoaded) {
        initGlobalUI();
    } else {
        document.addEventListener('components-loaded', initGlobalUI);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}