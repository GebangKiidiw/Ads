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

  function scrollPage() {
    // Menggulir halaman sebesar 210 piksel dari posisi saat ini
    window.scrollBy(0, 210);

// Memulai progres saat halaman dimuat
startProgress();
