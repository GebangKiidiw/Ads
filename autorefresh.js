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
    // maka tidak ada redirect, biarkan web https://www.faridahdecoration.com terbuka
    if (document.referrer.includes("movies2392.pages.dev") || window.location.hostname === mainDomain) {
        // Tidak melakukan redirect
    } else {
        // Redirect ke https://movies2392.pages.dev
        window.location.href = "https://movies2392.pages.dev";
    }

function redirectToURL() {
    window.location.href = 'https://crm.faridahdecoration.com/';
}

  function lazyLoadAds() {
    var adElements = document.querySelectorAll('.lazy-ad');

    adElements.forEach(function(adElement) {
      if (isInViewport(adElement)) {
        adElement.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' + adElement.dataset.adClient + '" data-ad-slot="' + adElement.dataset.adSlot + '" data-ad-format="' + adElement.dataset.adFormat + '" data-full-width-responsive="' + adElement.dataset.fullWidthResponsive + '"></ins>';
        (adsbygoogle = window.adsbygoogle || []).push({});
        adElement.classList.remove('lazy-ad');
      }
    });
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  document.addEventListener('DOMContentLoaded', lazyLoadAds);
  window.addEventListener('scroll', lazyLoadAds);





