var refreshCount = 0;

function autoRefresh() {
    if (refreshCount < 3) {
        setTimeout(function() {
            location.reload();
            refreshCount++;
        }, 15000); // 15 detik
    }
}

// Panggil fungsi autoRefresh saat halaman dimuat
window.onload = autoRefresh;
