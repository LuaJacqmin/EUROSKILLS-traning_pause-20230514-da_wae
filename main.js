const dawaeContainer = document.querySelector('.dawae-container')
let knucclesCounter = 0;

const newKnuccles = setInterval(() => {
    if(knucclesCounter <= 250){
        const newImg = document.createElement('img')

        newImg.src = 'dawae.jpeg'
        newImg.classList.add('absolute', "mix-blend-multiply")
        newImg.style.top = Math.floor(Math.random() * 120 - 10) + '%'
        newImg.style.left = Math.floor(Math.random() * 120 - 10) + '%'
    
        dawaeContainer.appendChild(newImg)
        knucclesCounter++
    } else {
        clearInterval(newKnuccles)
    }
}, 30);
