// Inisialisasi ketika DOM telah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk toggle tema (mode gelap/terang)
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    
    // Cek preferensi tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Listener untuk tombol toggle tema
    themeSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Menyimpan preferensi tema ke localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Fungsi untuk tombol Unduh CV
    const downloadCVBtn = document.getElementById('downloadCV');
    downloadCVBtn.addEventListener('click', function() {
        // Simulasi unduh CV
        alert('Fitur unduh CV akan mengarahkan ke file PDF CV Anda.');
        // Jika Anda memiliki file CV, tambahkan kode berikut:
        // window.open('path/to/your/cv.pdf', '_blank');
    });
    
    // Fungsi untuk tombol Hubungi Saya
    const contactMeBtn = document.getElementById('contactMe');
    contactMeBtn.addEventListener('click', function() {
        // Buka email dengan alamat dan subjek yang telah ditentukan
        window.location.href = 'mailto:disyaauliashafa@gmail.com?subject=Terkait Resume Online Anda';
    });
    
    // Animasi untuk elemen skill dan achievement saat scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    const animateOnScroll = function() {
        // Animasi untuk skills
        skillItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, index * 50); // Staggered animation
            }
        });
        
        // Animasi untuk achievements
        achievementItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, index * 100); // Staggered animation
            }
        });
    };
    
    // Atur opasitas awal untuk animasi
    skillItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    achievementItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease';
    });
    
    // Listener untuk scroll event untuk animasi
    window.addEventListener('scroll', animateOnScroll);
    
    // Panggil animasi saat halaman dimuat untuk elemen yang sudah terlihat
    animateOnScroll();
    
    // Tambahkan efek hover untuk timeline item
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Tambahan: Efek typing untuk judul
    function setupTypewriter() {
        const titleElement = document.querySelector('.title');
        if (!titleElement) return;
        
        const text = titleElement.textContent;
        titleElement.textContent = '';
        
        let i = 0;
        const typeSpeed = 70; // ms per karakter
        
        function type() {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, typeSpeed);
            }
        }
        
        // Mulai efek typing setelah sedikit delay
        setTimeout(type, 800);
    }
    
    // Jalankan efek typing
    setupTypewriter();
});