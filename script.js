// CONFIGURATION & MEMORIES ARRAY
const PASSWORD = "2907";

// Define 25 memories (matching fruit slots)
// You can edit the text description for each slot below!
const memories = [
    { id: 1, x: 400, y: 130, color: '#ff6b8b', desc: "Happy Birthday, Amma! You are the most precious person in our lives. 🌸" },
    { id: 2, x: 380, y: 200, color: '#e84393', desc: "Your smile is the sunshine that lights up our entire home. ☀️" },
    { id: 3, x: 420, y: 200, color: '#fd79a8', desc: "The warmth of your hugs is a feeling no words can ever describe. 🥰" },
    { id: 4, x: 340, y: 250, color: '#a29bfe', desc: "Every meal you cooked with love is a memory etched in my heart forever. 🍲" },
    { id: 5, x: 460, y: 250, color: '#a29bfe', desc: "The way you hum softly while going about your day — it’s the most peaceful melody. 🎵" },
    { id: 6, x: 300, y: 280, color: '#ff7675', desc: "I am who I am today because of your endless patience and love. 🌟" },
    { id: 7, x: 500, y: 280, color: '#ff7675', desc: "On every hard day, you were there to remind me I was never alone. 🤝" },
    { id: 8, x: 260, y: 330, color: '#fd79a8', desc: "You sacrificed so much without ever asking for anything in return. Thank you, Amma. 🙏" },
    { id: 9, x: 540, y: 330, color: '#e84393', desc: "Your laughter is contagious and I will always chase it. 😄" },
    { id: 10, x: 400, y: 310, color: '#ffd32a', desc: "You have the most beautiful soul — inside and out. There’s nobody like you. ✨" },
    { id: 11, x: 350, y: 360, color: '#fd79a8', desc: "I am forever grateful for every little and big thing you’ve done for us. 💝" },
    { id: 12, x: 450, y: 360, color: '#ff7675', desc: "A picture that captures Amma in her most radiant, glowing element. 📸" },
    { id: 13, x: 200, y: 380, color: '#e84393', desc: "Every photo of you tells a story of elegance, grace, and quiet strength. 👑" },
    { id: 14, x: 600, y: 380, color: '#fd79a8', desc: "Wishing you infinite happiness today and every single day, Amma. 🎉" },
    { id: 15, x: 300, y: 420, color: '#a29bfe', desc: "The bond between us only grows more beautiful with every passing year. 🔗" },
    { id: 16, x: 500, y: 420, color: '#a29bfe', desc: "This is you radiating pure, effortless joy — my favourite version of you! 🌟" },
    { id: 17, x: 150, y: 430, color: '#ff7675', desc: "Your strength and resilience inspire me more than you will ever know. 💪" },
    { id: 18, x: 650, y: 430, color: '#ff6b8b', desc: "May you always be showered with the love you so endlessly give to all of us. 💫" },
    { id: 19, x: 250, y: 480, color: '#ffd32a', desc: "A memory that makes me smile every time I think of it. 💕" },
    { id: 20, x: 550, y: 480, color: '#e84393', desc: "Amma, you look absolutely stunning in this one! Age only makes you more beautiful. 😍" },
    { id: 21, x: 380, y: 460, color: '#fd79a8', desc: "Two worlds, one heart — yours and mine, always intertwined. 💖" },
    { id: 22, x: 420, y: 460, color: '#ff7675', desc: "Here’s to many more years of celebrating the wonderful woman that you are! 🥂" },
    { id: 23, x: 180, y: 500, color: '#a29bfe', desc: "Home will always be wherever you are, Amma. 🏠" },
    { id: 24, x: 620, y: 500, color: '#ffd32a', desc: "A snapshot of a precious day I’ll hold in my heart for a lifetime. 🍭" },
    { id: 25, x: 310, y: 520, color: '#ff6b8b', desc: "Here’s to you, Amma Usha. Always and forever loved, cherished, and celebrated! ❤️" }
];

// Current active photo modal index
let currentMemoryIndex = 0;

// PASSWORD GATE
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordMessage = document.getElementById("password-message");
passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (passwordInput.value === PASSWORD) {
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("countdown-screen").classList.remove("hidden");
        passwordInput.value = "";
        return;
    }
    passwordMessage.textContent = "That key is not quite right - try again.";
    passwordInput.value = "";
    passwordInput.classList.remove("password-error");
    void passwordInput.offsetWidth;
    passwordInput.classList.add("password-error");
    passwordInput.focus();
});
passwordInput.addEventListener("input", () => {
    passwordInput.value = passwordInput.value.replace(/\D/g, "");
    passwordMessage.textContent = "";
    passwordInput.classList.remove("password-error");
});
// --- COUNTDOWN (set to: 29 July, 2026) ---
const BIRTH_DATE = new Date("2026-07-29T00:00:00");

const timerDays = document.getElementById("timer-days");
const timerHours = document.getElementById("timer-hours");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");

function pad2(n) {
    return String(n).padStart(2, "0");
}

const revealBtn = document.getElementById("reveal-btn");

function setRevealEnabled(enabled) {
    if (enabled) {
        revealBtn.classList.remove("locked");
        revealBtn.disabled = false;
    } else {
        revealBtn.classList.add("locked");
        revealBtn.disabled = true;
    }
}

function updateCountdown() {
    const now = new Date();
    let diff = BIRTH_DATE.getTime() - now.getTime();

    if (diff <= 0) {
        diff = 0;
        timerDays.textContent = "00";
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        setRevealEnabled(true);
        return;
    }

    setRevealEnabled(true); // PREVIEW MODE: always unlocked

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    timerDays.textContent = String(days).padStart(2, "0");
    timerHours.textContent = pad2(hours);
    timerMinutes.textContent = pad2(minutes);
    timerSeconds.textContent = pad2(seconds);
}

setRevealEnabled(false);
updateCountdown();
setInterval(updateCountdown, 1000);

// Click surprise button
document.getElementById("reveal-btn").addEventListener("click", function() {
    // Unlock and transition
    document.getElementById("countdown-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");

    // Auto-start music if possible
    playMusic();
});

// AUDIO MANAGER
const audioBtn = document.getElementById("audio-control-btn");
const bgMusic = document.getElementById("bg-music");

function playMusic() {
    bgMusic.play().then(() => {
        audioBtn.classList.add("playing");
    }).catch(() => {
        audioBtn.classList.remove("playing");
    });
}

audioBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        playMusic();
    } else {
        bgMusic.pause();
        audioBtn.classList.remove("playing");
    }
});
// NAVIGATION LOGIC
const navBtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content-section");

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        navBtns.forEach(b => b.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active-section"));

        btn.classList.add("active");
        const targetSection = document.getElementById(btn.getAttribute("data-target"));
        targetSection.classList.add("active-section");
    });
});

// ENVELOPE / LETTER OPEN LOGIC
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

// MEMORY TREE DYNAMIC POPULATION
const fruitsContainer = document.getElementById("fruits-container");

function initMemoryTree() {
    memories.forEach((mem, index) => {
        const fruitNode = document.createElement("div");
        fruitNode.className = "fruit-node";

        // Map 800x800 coordinate system to percentages for responsiveness
        fruitNode.style.left = `${(mem.x / 800) * 100}%`;
        fruitNode.style.top = `${(mem.y / 800) * 100}%`;
        fruitNode.style.setProperty('--glow-color', mem.color);
        // Dynamic sway animation delay for an organic floating look
        fruitNode.style.animationDelay = `${Math.random() * 4}s`;
        fruitNode.title = `Memory #${mem.id}`;

        // --- Try image first, fall back to mp4 video ---
        const img = document.createElement("img");
        img.src = `images/${mem.id}.jpg`;
        img.alt = `Memory ${mem.id}`;

        img.onload = function() {
            memoryTypes[mem.id] = 'image';
        };

        img.onerror = function() {
            img.style.display = "none";

            // Try mp4
            const vid = document.createElement("video");
            vid.src = `images/${mem.id}.mp4`;
            vid.preload = "metadata";
            vid.muted = true;
            vid.playsInline = true;
            vid.style.cssText = "width:100%;height:100%;object-fit:cover;border-radius:50%;";

            vid.onloadedmetadata = function() {
                memoryTypes[mem.id] = 'video';
                // Seek to first frame for thumbnail
                vid.currentTime = 0.01;
                fruitNode.appendChild(vid);
                // Add ▶ play overlay badge
                const badge = document.createElement("span");
                badge.className = "video-play-badge";
                badge.textContent = "▶";
                fruitNode.appendChild(badge);
            };

            vid.onerror = function() {
                memoryTypes[mem.id] = 'none';
            };
        };

        fruitNode.appendChild(img);

        // Click handler to open lightbox
        fruitNode.addEventListener("click", () => {
            openMemoryModal(index);
        });

        fruitsContainer.appendChild(fruitNode);
    });
}

// LIGHTBOX / MODAL CONTROLS
const modal = document.getElementById("memory-modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const imageFallback = document.getElementById("image-fallback");
const fallbackNum = document.getElementById("fallback-num");
const modalDesc = document.getElementById("modal-desc");
const modalBadge = document.getElementById("modal-badge");
const closeModal = document.getElementById("close-modal");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Track detected media types per memory id: 'image' | 'video' | 'none'
const memoryTypes = {};

function openMemoryModal(index) {
    currentMemoryIndex = index;
    const mem = memories[index];

    modalBadge.innerText = `Memory ${mem.id}/25`;
    modalDesc.innerText = mem.desc;

    // Reset all states — clear stale onerror first so it doesn't fire on src reset
    modalImg.onerror = null;
    modalImg.style.display = "none";
    modalImg.src = "";
    modalVideo.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
    imageFallback.classList.add("hidden");

    const type = memoryTypes[mem.id];

    if (type === 'video') {
        // Show video player
        modalVideo.src = `images/${mem.id}.mp4`;
        modalVideo.style.display = "block";
    } else {
        // Show image (or try loading even if type is unknown yet)
        modalImg.src = `images/${mem.id}.jpg`;
        modalImg.style.display = "block";

        modalImg.onerror = function() {
            // Type wasn't detected yet — try video
            modalImg.style.display = "none";
            const testVid = document.createElement("video");
            testVid.src = `images/${mem.id}.mp4`;
            testVid.onloadedmetadata = function() {
                memoryTypes[mem.id] = 'video';
                modalVideo.src = `images/${mem.id}.mp4`;
                modalVideo.style.display = "block";
            };
            testVid.onerror = function() {
                memoryTypes[mem.id] = 'none';
                imageFallback.classList.remove("hidden");
                fallbackNum.innerText = mem.id;
            };
        };
    }

    modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
});

// Close modal when clicking outside contents
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";
    }
});

prevBtn.addEventListener("click", () => {
    currentMemoryIndex = (currentMemoryIndex - 1 + memories.length) % memories.length;
    openMemoryModal(currentMemoryIndex);
});

nextBtn.addEventListener("click", () => {
    currentMemoryIndex = (currentMemoryIndex + 1) % memories.length;
    openMemoryModal(currentMemoryIndex);
});

// KEYBOARD NAVIGATION FOR LIGHTBOX
document.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") prevBtn.click();
        else if (e.key === "ArrowRight") nextBtn.click();
        else if (e.key === "Escape") closeModal.click();
    }
});


// MOBILE-FRIENDLY SPARKLE TRAIL
const sparkleLayer = document.getElementById("cursor-sparkles");
let lastSparkleTime = 0;

function createMoveSparkle(x, y, isTouch = false) {
    const now = Date.now();
    if (now - lastSparkleTime < (isTouch ? 45 : 28)) return;
    lastSparkleTime = now;

    const sparkle = document.createElement("span");
    sparkle.className = "move-sparkle";
    sparkle.textContent = Math.random() > 0.35 ? "✦" : "✧";
    sparkle.style.left = `${x + (Math.random() - 0.5) * 22}px`;
    sparkle.style.top = `${y + (Math.random() - 0.5) * 22}px`;
    sparkle.style.setProperty("--sparkle-size", `${Math.random() * 12 + 10}px`);
    sparkle.style.setProperty("--sparkle-color", Math.random() > 0.5 ? "#ffd66b" : "#f5a0d0");
    sparkleLayer.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
}

document.addEventListener("pointermove", (event) => {
    createMoveSparkle(event.clientX, event.clientY, event.pointerType === "touch");
}, { passive: true });

document.addEventListener("pointerdown", (event) => {
    for (let index = 0; index < 4; index++) {
        window.setTimeout(() => createMoveSparkle(event.clientX, event.clientY, true), index * 35);
    }
}, { passive: true });

// CANVAS PARTICLE SYSTEM
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height + canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = -(Math.random() * 1.5 + 0.5);
        this.speedX = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.4 ? 'rgba(191, 85, 236, ' : 'rgba(224, 130, 130, ';
        this.isHeart = Math.random() > 0.85; // 15% are heart shapes
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // fade out near the top
        if (this.y < 50) {
            this.opacity -= 0.01;
        }

        if (this.opacity <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color + this.opacity + ')';
        
        if (this.isHeart) {
            // Draw a cute tiny heart shape
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.size);
            ctx.bezierCurveTo(this.x - this.size, this.y - this.size, this.x - this.size * 2, this.y + this.size / 3, this.x, this.y + this.size * 2);
            ctx.bezierCurveTo(this.x + this.size * 2, this.y + this.size / 3, this.x + this.size, this.y - this.size, this.x, this.y + this.size);
            ctx.fill();
        } else {
            // Draw a glowing circular particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color + '0.8)';
            ctx.fill();
        }
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 100);
    for (let i = 0; i < count; i++) {
        const p = new Particle();
        // pre-populate across the screen height
        p.y = Math.random() * canvas.height;
        particles.push(p);
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// INITIALIZE APP
initMemoryTree();
initParticles();
animateParticles();
