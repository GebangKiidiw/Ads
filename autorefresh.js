    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    // Fungsi untuk memilih URL secara acak dari daftar
    function getRandomUrl() {
        return urls[Math.floor(Math.random() * urls.length)];
    }

    // Fungsi untuk mengecek apakah semua halaman telah diperbarui
    function allPagesRefreshed() {
        for (var i = 0; i < urls.length; i++) {
            if (!getCookie(urls[i])) {
                return false;
            }
        }
        return true;
    }

    // Fungsi untuk mendapatkan nilai cookie
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    // Fungsi untuk mengatur nilai cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Fungsi untuk melakukan redirect ke URL secara acak setiap 15 detik
    function autoRefresh() {
        // Cek apakah semua halaman telah diperbarui
        if (!allPagesRefreshed()) {
            // Ambil URL secara acak
            var randomUrl = getRandomUrl();
            // Redirect ke URL yang dipilih secara acak
            window.location.href = randomUrl;
            // Setel cookie untuk menandai bahwa halaman telah diperbarui
            setCookie(randomUrl, true, 1);
        } else {
            // Hentikan auto refresh jika semua halaman telah diperbarui
            clearInterval(refreshInterval);
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
