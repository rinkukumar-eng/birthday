/* =========================================
   BIRTHDAY WEBSITE - DHAKAN 18
========================================= */


/* =========================================
   FLOATING PARTICLES
========================================= */

const particleContainer = document.querySelector(".particles");

const particleEmojis = [
    "💗",
    "💕",
    "💖",
    "✨",
    "⭐",
    "🌸",
    "🦋",
    "🎀",
    "💫",
    "❤️"
];

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerText =
        particleEmojis[
            Math.floor(Math.random() * particleEmojis.length)
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        Math.random() * 20 + 15 + "px";

    particle.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 300);


/* =========================================
   START CELEBRATION
========================================= */

function startCelebration() {

    launchConfetti(100);

    createHeartExplosion();

    document.querySelector(".age-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   CANDLE
========================================= */

function blowCandles() {

    const cake = document.querySelector(".cake");

    cake.classList.add("candles-out");

    const message =
        document.getElementById("wishMessage");

    message.innerHTML =
        "✨ WISH GRANTED! ✨<br>May all your dreams come true, Dhakan! 💗";

    launchConfetti(80);

}


/* =========================================
   GIFT
========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    gift.classList.toggle("open");

    const message =
        document.getElementById("giftMessage");

    if (gift.classList.contains("open")) {

        message.innerHTML =
            "🎉 SURPRISE!!! You unlocked the birthday magic! 💗✨";

        launchConfetti(60);

        setTimeout(() => {

            document.getElementById("popup")
                .classList.add("show");

        }, 700);

    } else {

        message.innerHTML =
            "Click the gift! 👆";

    }

}


/* =========================================
   CLOSE POPUP
========================================= */

function closePopup() {

    document.getElementById("popup")
        .classList.remove("show");

}


/* =========================================
   CRAZY MODE
========================================= */

function crazyMode() {

    document.body.classList.toggle("crazy-mode");

    launchConfetti(250);

    createHeartExplosion();

    createEmojiExplosion();

    const button =
        document.querySelector(".crazy-content button");

    button.innerHTML =
        "🔥 CRAZY MODE ACTIVATED 🔥";

}


/* =========================================
   CONFETTI
========================================= */

function launchConfetti(amount = 100) {

    const container =
        document.getElementById("confetti-container");

    const symbols = [
        "💗",
        "💖",
        "✨",
        "🎉",
        "🎀",
        "⭐",
        "💕",
        "🌸",
        "🦋"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerText =
            symbols[
                Math.floor(Math.random() * symbols.length)
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            Math.random() * 15 + 10 + "px";

        confetti.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }

}


/* =========================================
   HEART EXPLOSION
========================================= */

function createHeartExplosion() {

    const hearts = [
        "💗",
        "💖",
        "💕",
        "❤️",
        "💞"
    ];

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.innerText =
            hearts[
                Math.floor(Math.random() * hearts.length)
            ];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            Math.random() * 30 + 20 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 400 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(.17,.67,.83,.67)"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1600);

    }

}


/* =========================================
   EMOJI EXPLOSION
========================================= */

function createEmojiExplosion() {

    const emojis = [
        "🎉",
        "🎂",
        "🎁",
        "🎀",
        "🦋",
        "🌸",
        "💗",
        "✨",
        "🥳",
        "💫"
    ];

    for (let i = 0; i < 50; i++) {

        const emoji =
            document.createElement("div");

        emoji.innerText =
            emojis[
                Math.floor(Math.random() * emojis.length)
            ];

        emoji.style.position = "fixed";

        emoji.style.left = "50%";
        emoji.style.top = "50%";

        emoji.style.fontSize =
            Math.random() * 30 + 20 + "px";

        emoji.style.zIndex = "9999";

        emoji.style.pointerEvents = "none";

        document.body.appendChild(emoji);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 600 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        emoji.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) rotate(720deg) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 2000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            emoji.remove();
        }, 2100);

    }

}


/* =========================================
   FINAL SURPRISE
========================================= */

function finalExplosion() {

    launchConfetti(500);

    createHeartExplosion();

    createEmojiExplosion();

    setTimeout(() => {

        document.body.style.transform =
            "scale(1.03)";

        setTimeout(() => {

            document.body.style.transform =
                "scale(1)";

        }, 300);

    }, 500);

}


/* =========================================
   CLICK ANYWHERE = LITTLE HEART
========================================= */

document.addEventListener("click", function(event) {

    const heart =
        document.createElement("div");

    heart.innerText = "💗";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.fontSize = "25px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(0)",
                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -120px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


/* =========================================
   KEYBOARD MAGIC
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        launchConfetti(50);

    }

    if (event.key.toLowerCase() === "d") {

        createHeartExplosion();

    }

});


/* =========================================
   AUTO CELEBRATION
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        launchConfetti(30);

    }, 1000);

});