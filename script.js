// Smooth Scroll untuk navigasi
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Jika link diawali dengan '#' (scroll internal)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Jika link adalah mailto: atau file PDF, jangan di-prevent! 
        // Biarkan browser menjalankan fungsi aslinya.
    });
});
// Pesan sambutan di Console
console.log("Portfolio Mustofa-Eng siap digunakan!");
function openModal(title, company, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalCompany').innerText = company;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('jobModal').style.display = "block";
}

function closeModal() {
    document.getElementById('jobModal').style.display = "none";
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    let modal = document.getElementById('jobModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function requestFullCV() {
    alert("Demi keamanan data pribadi, permintaan file CV lengkap harap hubungi saya langsung melalui email: engineer@mustofa-eng.my.id");
}

// Fungsi untuk membuka modal download
function openDownloadModal() {
    document.getElementById('downloadModal').style.display = 'block';
}

// Fungsi untuk menutup modal download
function closeDownloadModal() {
    document.getElementById('downloadModal').style.display = 'none';
}

// Menutup modal jika klik di luar area kotak (Update fungsi window.onclick)
window.onclick = function(event) {
    let jobModal = document.getElementById('jobModal');
    let dlModal = document.getElementById('downloadModal');
    
    if (event.target == jobModal) {
        jobModal.style.display = 'none';
    }
    if (event.target == dlModal) {
        dlModal.style.display = 'none';
    }
}