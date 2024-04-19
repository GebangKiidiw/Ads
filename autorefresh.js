    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    var currentPage = 0; // Indeks halaman yang sedang diperbarui

    // Fungsi untuk melakukan redirect ke URL yang sesuai
    function autoRefresh() {
        // Cek apakah masih ada halaman yang perlu diperbarui
        if (currentPage < urls.length) {
            // Ambil URL sesuai dengan indeks halaman
            var urlToRefresh = urls[currentPage];
            // Redirect ke URL yang sesuai
            window.location.href = urlToRefresh;
            // Tambah indeks halaman untuk memperbarui halaman berikutnya
            currentPage++;
        } else {
            // Hentikan auto refresh setelah mencapai halaman terakhir
            clearInterval(refreshInterval);
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
