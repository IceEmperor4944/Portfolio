const my_button = document.getElementById('my_button');
var randNum = Math.floor( Math.random() * 100 ) + 1;
console.log(randNum)
var count = 0;

document.getElementById('my_input').value = ""

var quote = document.querySelector('#quote')
var author = document.querySelector('#author')

fetch('https://stoic.tekloon.net/stoic-quote').then(response => {
    response.json().then(data => {
        console.log(data)
        quote.textContent = data.quote
        author.textContent = data.author
    })
})

var bombImage = document.querySelector('#bomb-image')

var bombPositionClasses = [
    "left1",
    "left2",
    "left3",
    "left4",
    "left5"
]

console.log(bombPositionClasses.length)

for(var i = 0; i < bombPositionClasses; i++){
    
    bombImage.classList.add(bombPositionClasses[i])
}

var i = 0;
var goingleft = false;
var totalDurationInSeconds = 0;
setInterval(() => {
    if(totalDurationInSeconds >= 5){
        explode();   
    }
    bombImage.classList = [];
    bombImage.classList.add(bombPositionClasses[i])
    if(goingleft){
        i--;
    }else{
        i++;
    }
    if(i == bombPositionClasses.length-1){
        goingleft = true;
    }else if(i == 0){
        goingleft = false;
    }
}, 1000);