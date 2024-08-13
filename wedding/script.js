const toggleBtn = document.getElementById('toggleBtn');
    let currentLang = 'en';

    toggleBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'vie' : 'en';
        toggleLanguage(currentLang);
        toggleBtn.textContent = currentLang === 'en' ? 'VIE' : 'ENG';
    });

    function toggleLanguage(lang) {
        const elements = document.querySelectorAll('[data-en]');

        elements.forEach(function(el) {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }

    // Add event listener for the RSVP button
    document.getElementById("rsvpBtn").addEventListener("click", function() {
        document.getElementById("rsvpPopup").style.display = "flex";
    });

    // Add event listener for the close button in the popup
    document.querySelector(".close-btn").addEventListener("click", function() {
        document.getElementById("rsvpPopup").style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == document.getElementById("rsvpPopup")) {
            document.getElementById("rsvpPopup").style.display = "none";
        }
    };
window.onload = function () {
    const params = new URLSearchParams(window.location.search);

    // Get the specific parameter (e.g., "guest")
    const guestBase64 = params.get('guest');

    const musicBtn = document.getElementById('musicBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');

    document.getElementById('musicPopup').style.display = 'flex';
    
    document.getElementById('allowMusicBtn').addEventListener('click', function() {
        backgroundMusic.play();
        document.getElementById('musicPopup').style.display = 'none';
        musicBtn.style.display = 'inline-block'; // Show the play/pause button after allowing music
        musicBtn.textContent = 'Pause Music';
    });

    document.getElementById('denyMusicBtn').addEventListener('click', function() {
        document.getElementById('musicPopup').style.display = 'none';
        musicBtn.style.display = 'inline-block'; // Show the play/pause button even if music is denied
        musicBtn.textContent = 'Play Music';
    });

    // backgroundMusic.play();


    musicBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicBtn.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            musicBtn.textContent = 'Play Music';
        }
    });

    const guestName = decodeURIComponent(escape(window.atob(guestBase64)));
    console.log(guestName)
    // Check if the parameter exists and use it
    if (guestName) {
        const welcomeMessage = `Dear ${guestName}, You're Invited!`;
        document.querySelector('.header h1').innerText = welcomeMessage;
    }
    // Add event listener for the RSVP button
    document.getElementById("rsvpBtn").addEventListener("click", function () {
        document.getElementById("rsvpPopup").style.display = "flex";
    });

    // Add event listener for the close button in the popup
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.getElementById("rsvpPopup").style.display = "none";
    });

    // Close the popup when clicking outside of it
    window.onclick = function (event) {
        if (event.target == document.getElementById("rsvpPopup")) {
            document.getElementById("rsvpPopup").style.display = "none";
        }
    };
};