const launchDate = new Date(2025, 5, 1, 0, 0, 0); // 1 травня 2025, 00:00

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<span>Ми вже тут!</span>';
        clearInterval(timerInterval);
        return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent    = String(days).padStart(2,'0');
    document.getElementById('hours').textContent   = String(hours).padStart(2,'0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
