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

// Mengambil parameter 'reloading' dari URL
var reloading = getParameterByName('reloading');

// Jika pengunjung datang langsung (tanpa referrer) dan tidak ada parameter 'reloading' di URL,
// atau jika mereka datang dari https://movies2392.pages.dev dan tidak ada parameter 'noredirect' atau 'reloading' di URL,
// maka lakukan redirect ke https://movies2392.pages.dev
if ((!document.referrer && !reloading) || (document.referrer.includes("movies2392.pages.dev") && !noRedirect && !reloading)) {
    // Redirect ke https://movies2392.pages.dev dengan parameter 'noredirect'
    window.location.href = "https://movies2392.pages.dev?noredirect=true";
}

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
    window.location.href = 'https://crm.faridahdecoration.com/';
}

function reloadPage() {
    // Reload halaman dengan parameter 'reloading'
    window.location.href = window.location.href.split('?')[0] + "?reloading=true";
}
