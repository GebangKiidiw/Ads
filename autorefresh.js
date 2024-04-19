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
            if (!localStorage.getItem(urls[i])) {
                return false;
            }
        }
        return true;
    }

    // Fungsi untuk melakukan redirect ke URL secara acak setiap 15 detik
    function autoRefresh() {
        // Cek apakah semua halaman telah diperbarui
        if (!allPagesRefreshed()) {
            // Ambil URL secara acak
            var randomUrl = getRandomUrl();
            // Redirect ke URL yang dipilih secara acak
            window.location.href = randomUrl;
            // Tandai halaman yang telah diperbarui di localStorage
            localStorage.setItem(randomUrl, true);
        } else {
            // Hentikan auto refresh jika semua halaman telah diperbarui
            clearInterval(refreshInterval);
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
