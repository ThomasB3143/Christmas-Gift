const silverSrc = './silvertab.png';
const goldSrc = './goldtab.png';
var money = 0
var tabs = 1
var chance = 0.001
var chanceCount = 0
var price = 1
// Get the container div
const container = document.getElementById('game');
const newTab = document.getElementById('newTabUpgrade');
const newTabLevel = document.getElementById('newTabStatus');
const tabPrice = document.getElementById('tabPriceUpgrade');
const tabPriceLevel = document.getElementById('tabPriceStatus');
const goldRate = document.getElementById('goldRateUpgrade');
const goldRateLevel = document.getElementById('goldRateStatus');
function moveImage(img) {
    img.style.left = `${Math.random() * 84}%`;
    img.style.top = `${Math.random() * 84}%`;
    img.style.transform = `rotate(${Math.random()*360}deg)`;
}
const moneyText = document.getElementById('counter');
function updateMoney(change) {
    money += change;
    moneyText.innerHTML = `Money<br>${money}`;
    if (money >= Math.floor(15*Math.pow(1.3,tabs-1))) {
        newTab.style.color = "#30F030";
    } else {
        newTab.style.color = "#F03030";
    }
    if (money >= Math.floor(50*Math.pow(2.2,Math.log2(price)))) {
        tabPrice.style.color = "#30F030";
    } else {
        tabPrice.style.color = "#F03030";
    }
    if (money >= Math.floor(10*Math.pow(1.2,chanceCount))) {
        goldRate.style.color = "#30F030";
    } else {
        goldRate.style.color = "#F03030";
    }
}
function silverClicked(img) {
    updateMoney(price);
    if (Math.random() * 100 < chance) {
        img.remove();
        createGold();
    } else {
        moveImage(img);
    }
}
function goldClicked(img) {
    updateMoney(price*100);
    if (Math.random() * 100 < chance) {
        moveImage(img);
    } else {
        img.remove();
        createSilver();
    }
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
newTab.addEventListener("click", function() {
    if (money >= Math.floor(15*Math.pow(1.3,tabs-1)))  {
        updateMoney(-Math.floor(15*Math.pow(1.3,tabs-1)))
        tabs ++;
        newTabLevel.innerHTML = `Tabs<br>${tabs}`;
        newTab.innerHTML = `Upgrade<br>${Math.floor(15*Math.pow(1.3,tabs-1))}`;
        createSilver();
        updateMoney(0);

    }
})
tabPrice.addEventListener("click", function() {
    if (money >= Math.floor(50*Math.pow(2.2,Math.log2(price))))  {
        updateMoney(-Math.floor(50*Math.pow(2.2,Math.log2(price))))
        price *= 2;
        tabPriceLevel.innerHTML = `Price Per Tab<br>${price}`;
        tabPrice.innerHTML = `Upgrade<br>${Math.floor(50*Math.pow(2.2,Math.log2(price)))}`;
        updateMoney(0);
    }
})
goldRate.addEventListener("click", function() {
    if (money >= Math.floor(10*Math.pow(1.2,chanceCount)))  {
        updateMoney(-Math.floor(10*Math.pow(1.2,chanceCount)))
        chanceCount += 1
        console.log(chance)
        chance = (((0.999 / (1 + Math.exp(-0.35 * (chanceCount)))) + 0.001));
        console.log(chance)
        goldRateLevel.innerHTML = `Gold Chance<br>${Math.floor(chance*10000)/100}%`;
        goldRate.innerHTML = `Upgrade<br>${Math.floor(10*Math.pow(1.2,chanceCount))}`;
        updateMoney(0);
    }
})
createGold();


