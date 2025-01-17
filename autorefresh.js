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
        // Array dari URL
        var urls = [
            'https://business.faridahdecoration.com/2023/07/crm-for-home-builder-options.html?reloading=true',
            'https://business.faridahdecoration.com/2023/07/crm-marketing-service-recovery-winning.html?reloading=true',
            'https://business.faridahdecoration.com/2023/07/the-best-guide-to-finding-old-maximizer.html?reloading=true',
            'https://business.faridahdecoration.com/2023/07/understanding-power-of-email-marketing.html?reloading=true',
            'https://business.faridahdecoration.com/2023/07/maximizing-sales-and-efficiency-power.html?reloading=true',
            'https://business.faridahdecoration.com/2024/04/crm-solutions.html?reloading=true'
        ];

        // Pilih URL secara acak dari array
        var randomUrl = urls[Math.floor(Math.random() * urls.length)];

        // Arahkan ke URL acak
        window.location.href = randomUrl;
    }

    function reloadPage() {
        // Reload halaman dengan parameter 'reloading'
        window.location.href = window.location.href.split('?')[0] + "?reloading=true";
    }

    // Fungsi untuk mengatur cookie untuk banyak domain
    function setCookieForDomains(cname, cvalue, exdays, domains) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        domains.forEach(function(domain) {
            var cookieString = cname + "=" + cvalue + ";" + expires + ";path=/";
            if (domain) {
                cookieString += ";domain=" + domain;
            }
            document.cookie = cookieString;
        });
    }

    // Fungsi utama
    function main() {
        var keywords = [
            "crm for medium sized business",
            "best crm for very small business 2",
            "mobile crm for small business",
            "business software crm",
            "crm reviews small business",
            "crm in sap business one",
            "crm for computer repair business",
            "hosted crm for small business",
            "business crm definition",
            "google crm software for small business",
            "best affordable crm for small business",
            "google business apps crm",
            "crm in software business",
            "business central crm integration",
            "best low cost crm for small business 2",
            "crm for subscription business 2",
            "crm solution for small business",
            "crm for rental business",
            "microsoft dynamics crm small business",
            "crm software cost for small business",
            "free easy crm for small business",
            "how can crm benefit a business",
            "data enrichment enterprise business crm",
            "crm systems small business",
            "best small business sales crm",
            "small business crm software free",
            "service business crm software",
            "best crm for small business mac",
            "sap business one crm demo",
            "sap crm business agreement",
            "integrate whatsapp business with crm",
            "affordable best crm for nonprofits",
            "small business crm for mac",
            "data cleaning enterprise business crm",
            "crm mobile for on premise install"
        ]; // Array kata kunci

        var domains = [
            ".salesforce.com",
            ".xero.com",
            ".zoho.com",
            "monday.com",
            ".symphonyai.com",
            ".odoo.com"
        ]; // Ganti dengan daftar domain yang diinginkan

        // Pilih kata kunci secara acak
        var randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

        // Atur cookie dengan kata kunci yang dipilih secara acak untuk setiap domain
        setCookieForDomains("search_keyword", randomKeyword, 30, domains); // 30 hari

        console.log("Cookie telah diatur dengan kata kunci: " + randomKeyword);
    }

    // Panggil fungsi utama
    main();
