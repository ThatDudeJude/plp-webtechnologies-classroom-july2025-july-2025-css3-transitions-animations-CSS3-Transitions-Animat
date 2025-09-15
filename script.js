// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Returns a function that raises its argument to the power of y
function toPower(y) {
    return (x) => x ** y;
}
// squared: function to square a number
const squared = toPower(2);

// cubed: function to cube a number
const cubed =  toPower(3);

// quadrupled: function to raise a number to the 4th power
const quadrupled = (z) => {
    return squared(z) * squared(z);
}

// Example outputs for squared, cubed, and quadrupled
console.log(`8 squared: ${squared(8)}`);
console.log(`4 cubed: ${cubed(4)}`);
console.log(`2 quadrupled: ${quadrupled(2)}`);

// Select the sliding card element for animation
const slidingCard = document.querySelector('.sliding-card');
let angle = Math.PI *2;

// Animates the sliding card horizontally using cosine function
function slidingAnimation(time, lastTime) {
    if (lastTime != null) {        
        // Update angle based on elapsed time
        angle += (time - lastTime) * 0.001;
        // Move card left/right in a smooth circular motion
        slidingCard.style.left = (Math.cos(angle) * 500) + 200 + "px";
    }
    // Request next animation frame
    requestAnimationFrame(newTime => slidingAnimation(newTime, time));
}

// Start the sliding animation
requestAnimationFrame(slidingAnimation);

// Part 3: Combining CSS Animations with JavaScript

// Get the spin button and card inner elements
const spinButton = document.getElementById('spin-btn');
const spinningCardInner = document.querySelector('.spinning-card-inner');

let flipAngle = 0; // Current rotation angle
let targetFlipAngle = 0; // Target rotation angle

// Animates the card flip with smooth easing
function animateFlip() {
    // Gradually approach the target angle
    flipAngle += (targetFlipAngle - flipAngle) * 0.1; // smooth easing
    // Apply rotation transform
    spinningCardInner.style.transform = `rotateY(${flipAngle}deg)`;
    // Continue animation until close to target
    if (Math.abs(targetFlipAngle - flipAngle) > 0.5) {
        requestAnimationFrame(animateFlip);
    }
}

// On button click, set new target angle and start animation
spinButton.addEventListener('click', () => {
    targetFlipAngle = (targetFlipAngle + 180) % 360;
    requestAnimationFrame(animateFlip)
})