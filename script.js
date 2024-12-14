
const silverSrc = './silvertab.png';
const goldSrc = './goldtab.png';

// Get the container div
const container = document.getElementById('game');
function moveImage(img) {
    console.log("working!")
    img.style.left = `${Math.random() * 92}%`;
    img.style.top = `${Math.random() * 86}%`;
}
// Ensure the container has relative positioning
container.style.position = 'relative'; // Set the container's position to 'relative'
// Function to create and append images to the container
function createSilver() {
    const img = document.createElement('img');
    img.src = silverSrc;
    img.alt = 'silver can tab';
    img.classList.add('tab');
    img.style.position = 'absolute';
    img.style.left = `${Math.random() * 92}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.addEventListener("click", function() {
        moveImage(img);
    })
    container.appendChild(img);
}
function createGold() {
    const img = document.createElement('img');
    img.src = goldSrc;
    img.alt = 'gold can tab';
    img.classList.add('tab');
    img.style.position = 'absolute';
    img.style.left = `${Math.random() * 92}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.addEventListener("click", function() {
        moveImage(img);
    })
    container.appendChild(img);
}
createImage();
createImage();
createImage();
createImage();
createImage();
createImage();
createImage();
createImage();
createImage();
createImage();


