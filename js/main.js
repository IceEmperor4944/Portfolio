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

var slide = document.querySelector('#slide')

var slideClasses = [
    "images/dnd.jpg",
    "images/guitar.jpg",
    "images/nature1.jpg",
    "images/musicInTheParks.jpg",
    "images/dndthing.jpg",
    "images/pillars.jpg",
    "images/nature2.jpg"
]
var i = 0;
setInterval(() => {
    slide.src = slideClasses[i];
    if(i != slideClasses.length - 1){
        i++;
    }else{
        i = 0;
    }
}, 7500);