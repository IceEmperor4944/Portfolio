var joke = document.querySelector('#joke')
var setup = document.querySelector('#setup')
var delivery = document.querySelector('#delivery')

fetch('https://v2.jokeapi.dev/joke/Programming').then(response => {
    response.json().then(data => {
        console.log(data)
        joke.textContent = data.joke
        setup.textContent = data.setup
        delivery.textContent = data.delivery
    })
})


/*
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
}, 1000);*/