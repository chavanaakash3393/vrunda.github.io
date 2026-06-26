document.addEventListener("click", () => {
    const sound = new Audio("media/rclick.mp3"); // path तुमच्या project प्रमाणे बदला
    sound.volume = 0.4;
    sound.play().catch(() => {});
});