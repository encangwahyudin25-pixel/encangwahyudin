// Experience Data
const experiences = {
    1: {
        company: 'PT Isuzu Astra Motor Indonesia',
        role: 'Safety Officer',
        period: '2016',
        location: 'Karawang, Indonesia',
        description: 'Bertanggung jawab dalam penerapan dan pengawasan prosedur keselamatan dan kesehatan kerja (K3) di lingkungan operasional. Terbiasa bekerja dengan standar, dokumentasi, serta identifikasi dan mitigasi risiko untuk memastikan proses kerja berjalan aman dan sesuai regulasi',
        responsibilities: [
            'Melakukan pemeriksaan dan verifikasi dokumen pelatihan K3.',
            'Mengelola penyediaan dan kelayakan Alat Pelindung Diri (APD).'
        ],
        tech: ['Ms. Word', 'Ms. Exel', 'Ms. Power Point']
    },
    2: {
        company: 'PT Mitsui Kinzoku Act Indonesia',
        role: 'Production Control',
        period: '2017 - 2022',
        location: 'Karawang, Indonesia',
        description: 'Bekerja dalam pengelolaan dan pengendalian proses produksi untuk memastikan alur kerja berjalan sesuai perencanaan. Terbiasa memantau data produksi, menjaga ketepatan waktu, serta berkoordinasi dengan tim terkait untuk menjaga stabilitas proses.',
        responsibilities: [
            'Memeriksa ketersediaan box packing di setiap line produksi.',
            'Memastikan box sesuai standar kualitas dan jumlah produksi.',
            'Menginput data part Finished Goods ke sistem SAP secara akurat dan tepat waktu.',
            'Mengelola ketersediaan stock dan menyiapkan part untuk delivery sesuai jadwal.',
            'Melaksanakan Stock Opname guna memastikan kesesuaian data sistem dan kondisi fisik.',
            'Menerapkan Kaizen untuk meningkatkan efisiensi dan kualitas kerja.'
        ],
        tech: ['Ms. Exel', 'Handheld Mobile Computer', 'Hand Lift', 'SAP']
    },
    3: {
        company: 'PT Andhana Kirana Yasa',
        role: 'Installer Otomotif',
        period: '2023 - 2025',
        location: 'Karawang, Indonesia',
        description: 'Melakukan instalasi Aksesoris Otomotif dengan fokus pada kualitas, fungsi, dan standar kerja. Terbiasa menyelesaikan masalah teknis di lapangan serta memastikan hasil instalasi berjalan dengan baik dan aman.',
        responsibilities: [
            'Melakukan Instalasi aksesoris mobil Toyota tipe konvensional dan hybrid (alarm, shock sensor, PVM/Camera 360°, back camera, body kit, dan aksesoris lainnya).',
            'Melakukan pengecekan fungsi dan kualitas setiap part yang terpasang sesuai standar.',
            'Menerapkan prinsip Quality Control dan memastikan tidak menerima, membuat, dan meneruskan defect. ',
            'Aktif mengikuti kegiatan QCC/GKM serta menerapkan Kaizen untuk produktivitas.'
        ],
        tech: ['Mobile', 'Daily Routine Worksheet,', 'Cordelles Bor', 'Impact Bor']
    }
};
// Scroll Progress Bar
function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercentage + '%';
}
// Intersection Observer for Fade-in Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });
}
// Skills Progress Animation
function animateSkills() {
    const skillsSection = document.querySelector('.skills');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillProgressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}
// Modal Functions
function openModal(experienceId) {
    const modal = document.getElementById('experienceModal');
    const modalBody = document.getElementById('modalBody');
    const experience = experiences[experienceId];
    if (!experience) return;
    // Build modal content
    const modalContent = `
        <h3 class="modal-title">${experience.role}</h3>
        <div class="modal-company">${experience.company}</div>
        
        <div class="modal-meta">
            <div class="modal-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                ${experience.period}
            </div>
            <div class="modal-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                ${experience.location}
            </div>
        </div>
        <div class="modal-section">
            <h4 class="modal-section-title">Tentang Peran</h4>
            <p class="modal-description">${experience.description}</p>
        </div>
        <div class="modal-section">
            <h4 class="modal-section-title">Tanggung Jawab Utama</h4>
            <ul class="modal-list">
                ${experience.responsibilities.map(resp => `<li class="modal-list-item">${resp}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h4 class="modal-section-title">Tools</h4>
            <div class="modal-tech">
                ${experience.tech.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    const modal = document.getElementById('experienceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
// Set Current Year in Footer
function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}
// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    // Setup scroll progress bar
    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();
    // Setup scroll animations
    setupScrollAnimations();
    // Animate skills on scroll
    animateSkills();
    // Setup smooth scroll
    setupSmoothScroll();
    // Set current year
    setCurrentYear();
    // Setup work experience cards
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => {
            const experienceId = card.getAttribute('data-experience');
            openModal(experienceId);
        });
    });
    // Setup modal close button
    document.getElementById('modalClose').addEventListener('click', closeModal);
    // Close modal when clicking backdrop
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});