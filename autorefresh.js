    // Daftar URL yang ingin Anda gunakan
    var urls = [
        "https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html",
        "https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html",
        "https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html"
    ];

    var currentIndex = 0; // Indeks halaman yang sedang ditampilkan

    // Fungsi untuk memperbarui halaman berikutnya
    function autoRefresh() {
        // Periksa apakah sudah mencapai halaman terakhir
        if (currentIndex === urls.length) {
            console.log("Telah mencapai halaman terakhir. Berhenti auto-refresh.");
            clearInterval(refreshInterval); // Hentikan auto-refresh
        } else {
            // Ambil URL halaman berikutnya
            var nextPageUrl = urls[currentIndex];
            // Redirect ke halaman berikutnya
            window.location.href = nextPageUrl;
            // Perbarui indeks halaman untuk mengarahkan ke halaman berikutnya
            currentIndex++;
        }
    }

    // Panggil fungsi autoRefresh setiap 15 detik
    var refreshInterval = setInterval(autoRefresh, 15000);
