const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const jackSize = 40;
const jack = {
    x: canvas.width / 2 - jackSize / 2,
    y: canvas.height - jackSize,
    speed: 5
};

let isJumping = false;
let jumpHeight = 0;

function drawJack() {
    ctx.fillStyle = 'red';
    ctx.fillRect(jack.x, jack.y, jackSize, jackSize);
}

function jump() {
    if (isJumping) {
        jack.y -= jack.speed;
        jumpHeight += jack.speed;
        if (jumpHeight >= 120) {
            isJumping = false;
        }
    } else {
        if (jumpHeight > 0) {
            jack.y += jack.speed;
            jumpHeight -= jack.speed;
        }
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jump();
    drawJack();
    requestAnimationFrame(update);
}

update();

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && jumpHeight === 0) {
        isJumping = true;
    }
});