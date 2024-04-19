var refreshCount = 0;

function autoRefresh() {
    if (refreshCount < 3) {
        location.reload();
        refreshCount++;
    }
}

// Atur interval untuk melakukan refresh setiap 15 detik
setInterval(autoRefresh, 15000);
