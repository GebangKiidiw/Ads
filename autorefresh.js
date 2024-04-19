    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    var urlsRefreshed = {}; // Objek untuk melacak apakah halaman telah diperbarui
    var allPagesRefreshed = false; // Variabel untuk menandakan apakah semua halaman telah diperbarui

    // Fungsi untuk memeriksa apakah semua halaman telah diperbarui
    function checkAllPagesRefreshed() {
        for (var i = 0; i < urls.length; i++) {
            if (!urlsRefreshed[urls[i]]) {
                return false;
            }
        }
        return true;
    }

    // Fungsi untuk memilih URL secara acak dari daftar yang belum diperbarui
    function getRandomUrl() {
        var unrefreshedUrls = urls.filter(url => !urlsRefreshed[url]);
        if (unrefreshedUrls.length === 0) {
            allPagesRefreshed = true;
            return null;
        }
        return unrefreshedUrls[Math.floor(Math.random() * unrefreshedUrls.length)];
    }

    // Fungsi untuk melakukan redirect ke URL secara acak setiap 15 detik
    function autoRefresh() {
        // Cek apakah semua halaman telah diperbarui
        if (!allPagesRefreshed) {
            // Ambil URL yang belum diperbarui secara acak
            var randomUrl = getRandomUrl();
            if (randomUrl !== null) {
                // Redirect ke URL yang dipilih secara acak
                window.location.href = randomUrl;
                // Tandai URL yang telah diperbarui
                urlsRefreshed[randomUrl] = true;
            } else {
                // Hentikan auto refresh setelah semua halaman telah diperbarui
                clearInterval(refreshInterval);
            }
        } else {
            // Hentikan auto refresh setelah semua halaman telah diperbarui
            clearInterval(refreshInterval);
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
