document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effects
    const welcomeMessage = document.getElementById("welcomeMessage");
    const hashtag = document.getElementById("hashtag");
    const buttonContainer = document.getElementById("buttonContainer");

    setTimeout(() => {
        welcomeMessage.style.opacity = "1";
        welcomeMessage.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        hashtag.style.opacity = "1";
        hashtag.style.transform = "translateY(0)";
    }, 1000);

    setTimeout(() => {
        buttonContainer.style.opacity = "1";
        buttonContainer.style.transform = "translateY(0)";
    }, 1500);

    // Text glow effect when hovering over the title
    const title = document.getElementById("title");
    title.addEventListener("mouseenter", function() {
        title.style.textShadow = "0px 0px 20px rgba(255, 255, 255, 0.8)";
    });
    title.addEventListener("mouseleave", function() {
        title.style.textShadow = "none";
    });
});

