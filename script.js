const silverSrc = './silvertab.png';
const goldSrc = './goldtab.png';
var money = 0
var tabs = 1
var chance = 0.001
var chanceCount = 0
var price = 1
var factCount = 100
var factIndex = -1
var newFactIndex
// Get the container div
const container = document.getElementById('game');
const newTab = document.getElementById('newTabUpgrade');
const newTabLevel = document.getElementById('newTabStatus');
const tabPrice = document.getElementById('tabPriceUpgrade');
const tabPriceLevel = document.getElementById('tabPriceStatus');
const goldRate = document.getElementById('goldRateUpgrade');
const goldRateLevel = document.getElementById('goldRateStatus');
const factList = [
    "The world's largest crocheted blanket is 17,188.57 metres squared in area! That's like more than three football fields or the area that would be covered if you spread out about 8600 coelacanth across the ground (but why would you do that?)",
    "Apparently a coin flip actually has a 51% chance of landing on the same side it was tossed from. Because it has a \"wobble\" that changes its rotational axis in a way that keeps it facing that way for longer during airtime!",
    "In Minecraft, if you mine obsidian with fists (250s) underwater (multiplied by 5) with mining fatigue III (multiplied by 27) it will take you about 9 hours and 20 minutes to break it. Not sure either of us could firm that :[",
    "An octopus can fit through any hole the size of their beak, but they'd have to squash their eyes a bit which really hurts them (I watched a video of one doing it and it made me really sad)",
    "A shark's teeth are coated in a layer of fluoride to stop them from getting cavities! That is the one and ONLY reason you've never seen one with a toothbrush or seen one waiting at the dentist :]",
    "In Hungarian folklore, the solution for preventing vampires rising from the dead was literally just to bury them upside down. So they would just dig further down instead of up (but how would they not be able to feel gravity and know?)",
    "The ocean sunfish (more commonly known as an afront to god and nature, defying the laws of what should be alive with a cruel, tortured existence) is actually seen as a sign of prosperity in the Carribean! Probably because they feel lucky they aren't one.",
    "Native Americans used the agave plant for both the needle and thread when sewing! The leaf was soaked for a while which left fibres and a long needle between them that they could do all kinds of stuff with!",
    "Deep learning (the computer science thing you use to make AI like ChatGPT) was actually pondered and planned in the 1940s, but they didn't have the technology or data to train and run an artifical intelligence.",
    "Cats lick themselves partly to cool down. They actually don't need to do that but its a vestigial (I just learnt that word it means a now-obselete evolutionary trait) thing they choose to do a little too much.",
    "The first computer to be held in the North East was FERDINAND (its an acronym). It was made in 1957 in Newcastle University and you'd prepare your program on a paper tape and just give it to the machine!",
    "Apparently the largest candle was 39 metres tall, made for the General Art and Industrial Exhibition of Stockholm in 1897. How would you even light that? I mean of course I could because I'm 7ft tall and could climb it because I'm so strong.",
    `I'm running out of fun fact ideas so I'm really sorry about that, here is a cool documentary I found about coelacanth for you <a href="https://www.youtube.com/watch?v=gPoiv0sZ4s4" target="_blank">this website</a>`
]
const factCounter = document.getElementById('factCounter');
const factText = document.getElementById('fact');
function moveImage(img) {
    img.style.left = `${(Math.random()+0.03) * 90/1.03}%`;
    img.style.top = `${Math.random() * 81}%`;
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
    if (money >= Math.floor(10*Math.pow(1.7,chanceCount))) {
        goldRate.style.color = "#30F030";
    } else {
        goldRate.style.color = "#F03030";
    }
}
function newFact() {
    newFactIndex = Math.floor(Math.random() * 13)
    while (newFactIndex == factIndex) {
        newFactIndex = Math.floor(Math.random() * 13)
    }
    factText.innerHTML = factList[newFactIndex];
    factIndex = newFactIndex
}
function checkFact() {
    factCount -= 1;
    if (factCount == 0) {
        factCount = 100
        newFact();
    }
    factCounter.innerHTML = `Click ${factCount} tabs to get a new fun fact!`;

}
function silverClicked(img) {
    updateMoney(price);
    if (Math.random() < chance) {
        img.remove();
        createGold();
    } else {
        moveImage(img);
    }
    checkFact();
}
function goldClicked(img) {
    updateMoney(price*75);
    if (Math.random() * 100 < chance) {
        moveImage(img);
    } else {
        img.remove();
        createSilver();
    }
    checkFact();
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
    img.style.left = `${(Math.random()+0.03) * 90/1.03}%`;
    img.style.top = `${Math.random() * 81}%`;
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
    img.style.left = `${(Math.random()+0.03) * 90/1.03}%`;
    img.style.top = `${Math.random() * 81}%`;;
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
        tabPriceLevel.innerHTML = `Price/Tab<br>${price}`;
        tabPrice.innerHTML = `Upgrade<br>${Math.floor(50*Math.pow(2.2,Math.log2(price)))}`;
        updateMoney(0);
    }
})
goldRate.addEventListener("click", function() {
    if (money >= Math.floor(10*Math.pow(1.7,chanceCount)))  {
        updateMoney(-Math.floor(10*Math.pow(1.7,chanceCount)))
        chanceCount += 1
        console.log(chance)
        chance = (1-0.999*Math.pow(999/994,-chanceCount));
        console.log(chance)
        goldRateLevel.innerHTML = `Gold Chance<br>${Math.round(chance*10000)/100}%`;
        goldRate.innerHTML = `Upgrade<br>${Math.floor(10*Math.pow(1.7,chanceCount))}`;
        updateMoney(0);
    }
})
createSilver();


