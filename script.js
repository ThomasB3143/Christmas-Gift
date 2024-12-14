const silverSrc = './silvertab.png';
const goldSrc = './goldtab.png';
var money = 0
var tabs = 1
var chance = 0.1
var price = 1
// Get the container div
const container = document.getElementById('game');
function moveImage(img) {
    img.style.left = `${Math.random() * 84}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.style.transform = `rotate(${Math.random()*360}deg)`;
}
const moneyText = document.getElementById('counter');
function updateMoney(change) {
    money += change;
    moneyText.innerHTML = `Money<br>${money}`;
}
function silverClicked(img) {
    moveImage(img);
    updateMoney(price);
}
function goldClicked(img) {
    createSilver();
    img.remove();
    updateMoney(price*100);
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
    img.style.left = `${Math.random() * 84}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.style.transform = `rotate(${Math.random()*360}deg)`;
    img.addEventListener("click", function() {
        silverClicked(img);
    })
    container.appendChild(img);
}
function createGold() {
    const img = document.createElement('img');
    img.src = goldSrc;
    img.alt = 'gold can tab';
    img.classList.add('tab');
    img.style.position = 'absolute';
    img.style.left = `${Math.random() * 84}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.style.transform = `rotate(${Math.random()*360}deg)`;
    img.addEventListener("click", function() {
        goldClicked(img);
    })
    container.appendChild(img);
}
const newTab = document.getElementById('newTabUpgrade');
newTab.addEventListener("click", function() {
    createSilver();
})
const tabPrice = document.getElementById('tabPriceUpgrade');
tabPrice.addEventListener("click", function() {
    createSilver();
})
const goldRate = document.getElementById('goldRateUpgrade');
goldRate.addEventListener("click", function() {
    createSilver();
})
createGold();


