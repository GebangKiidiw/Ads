    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    var pagesRefreshed = 0; // Jumlah halaman yang telah diperbarui
    var totalPages = urls.length; // Total jumlah halaman

    // Fungsi untuk memilih URL secara acak dari daftar
    function getRandomUrl() {
        return urls[Math.floor(Math.random() * urls.length)];
    }

    // Fungsi untuk melakukan redirect ke URL secara acak setiap 15 detik
    function autoRefresh() {
        // Cek apakah masih ada halaman yang perlu diperbarui
        if (pagesRefreshed < totalPages) {
            // Ambil URL secara acak
            var randomUrl = getRandomUrl();
            // Redirect ke URL yang dipilih secara acak
            window.location.href = randomUrl;
            // Tambah jumlah halaman yang telah diperbarui
            pagesRefreshed++;
        } else {
            // Hentikan auto refresh jika semua halaman telah diperbarui
            clearInterval(refreshInterval);
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
