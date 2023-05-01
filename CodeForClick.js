const btn = document.getElementById('btn');
const upgradeBtn = document.getElementById('upgradebtn')
const rebirthbtn =  document.getElementById('rebirthbtn')
const rebirthtxt = document.getElementById('rebirthtxt')
const allClicksCountTxt = document.getElementById('allClicksCountTxt')
let numberClicks = 0;
let clickMutlipleir = 1
let multipleirCost = 10
let rebirthCount = 0
let rebirthCost = 1000
let rebirthMultiplier = 1
let totalClicks = 0

btn.addEventListener('click', function handleClick() {
    numberClicks = numberClicks + clickMutlipleir * rebirthMultiplier
    totalClicks = totalClicks + clickMutlipleir * rebirthMultiplier
    btn.textContent = `Button Clicked ${numberClicks}`;
    allClicksCountTxt.textContent = `Total Clicks: ${totalClicks}`
  });

upgradeBtn.addEventListener('click', function handleClick() {
    if (numberClicks >= multipleirCost){
        numberClicks = numberClicks - multipleirCost
        clickMutlipleir = clickMutlipleir + 1 
        multipleirCost = multipleirCost * 1.5
        multipleirCost = Math.round(multipleirCost)
        btn.textContent = `Button Clicked ${numberClicks}`
        upgradeBtn.textContent = `Upgrade for : ${multipleirCost}`
    }

})

rebirthbtn.addEventListener('click', function handleClick(){
    if (numberClicks >= rebirthCost) {
        rebirthMultiplier = rebirthMultiplier + 1
        rebirthCost = rebirthCost * 2
        clickMutlipleir = 1
        numberClicks = 0
        multipleirCost = 10
        rebirthCount = rebirthCount + 1
        btn.textContent = `Button Clicked ${numberClicks}`
        upgradeBtn.textContent = `Upgrade for : ${multipleirCost}`
        rebirthbtn.textContent = `Rebirth for : ${rebirthCost}`
        rebirthtxt.textContent = `Current Rebirths: ${rebirthCount}`

    }

})