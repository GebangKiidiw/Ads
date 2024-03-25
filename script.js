// Jumlah uang yang akan jatuh
const numMoney = 40;

// Container untuk uang
const moneyContainer = document.querySelector('.money-rain-container');

// Fungsi untuk membuat uang jatuh secara acak
function createMoney() {
  const money = document.createElement('img');
  money.src = 'https://static.vecteezy.com/system/resources/previews/028/766/359/original/dana-payment-icon-symbol-free-png.png'; // Ganti dengan path gambar uang Anda
  money.alt = 'Money';
  money.className = 'money';
  money.style.left = `${Math.random() * window.innerWidth}px`; // Menentukan posisi horizontal secara acak
  money.style.animationDuration = `${Math.random() * 5 + 3}s`; // Menentukan kecepatan jatuh secara acak (antara 3 dan 8 detik)
  moneyContainer.appendChild(money);

  // Menambahkan event listener untuk deteksi saat elemen uang mencapai bagian bawah
  money.addEventListener('animationend', function() {
    money.remove(); // Menghapus elemen uang dari DOM setelah animasi selesai
  });
}

// Membuat uang jatuh
for (let i = 0; i < numMoney; i++) {
  createMoney();
}
