    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    var lastPage = "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"; // Halaman terakhir

    var currentPageIndex = 0; // Indeks halaman yang sedang diperbarui

    // Fungsi untuk memperbarui halaman berikutnya
    function autoRefresh() {
        // Ambil URL halaman berikutnya
        var nextPageUrl = urls[currentPageIndex];
        
        // Cek apakah ini adalah halaman terakhir yang ingin diperbarui
        if (nextPageUrl === lastPage) {
            clearInterval(refreshInterval); // Hentikan auto-refresh
        } else {
            // Redirect ke halaman berikutnya
            window.location.href = nextPageUrl;
            // Perbarui indeks halaman
            currentPageIndex++;
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
