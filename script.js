// JavaScript for interactions and extras (no sounds)
// EDIT: Change timings, messages, or behaviors here

document.addEventListener('DOMContentLoaded', function() {
    // Auto-open envelope after 3 seconds (shows title first, then proceeds)
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const buttons = document.getElementById('buttons');
    
    setTimeout(function() {
        if (envelope && letter && buttons) {
            // Animate envelope opening
            envelope.classList.add('open');
            letter.style.display = 'block';
            letter.style.animation = 'slide-out 1s ease-out';
            buttons.style.display = 'flex';
        }
    }, 3000); // EDIT: Change 3000 to a different delay in milliseconds (e.g., 5000 for 5 seconds)

    // YES button redirect
    const yesBtn = document.getElementById('yes-btn');
    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            // Redirect to YES page
            window.location.href = 'yes.html';
        });
    }

    // NO button redirect
    const noBtn = document.getElementById('no-btn');
    if (noBtn) {
        noBtn.addEventListener('click', function() {
            // Redirect to NO page
            window.location.href = 'no.html';
        });
    }

    // Heart burst on click (anywhere on page)
    document.addEventListener('click', function(e) {
        if (e.target !== envelope && !e.target.classList.contains('btn')) { // Avoid interfering with envelope/buttons
            const burst = document.createElement('div');
            burst.textContent = '💖';
            burst.className = 'heart-burst';
            burst.style.left = e.clientX + 'px';
            burst.style.top = e.clientY + 'px';
            document.body.appendChild(burst);
            setTimeout(() => burst.remove(), 1000);
        }
    });

    // Easter egg: Double-click envelope for sparkle shower
    if (envelope) {
        envelope.addEventListener('dblclick', function() {
            for (let i = 0; i < 10; i++) {
                const sparkle = document.createElement('div');
                sparkle.textContent = '✨';
                sparkle.className = 'heart-burst';
                sparkle.style.left = Math.random() * window.innerWidth + 'px';
                sparkle.style.top = Math.random() * window.innerHeight + 'px';
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 2000);
            }
        });
    }

    // Try again button on NO page
    const tryAgainBtn = document.getElementById('try-again-btn');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});