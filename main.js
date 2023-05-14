const dawaeContainer = document.querySelector('.dawae-container')
let allKuccles = [];
let knucclesCounter = 0;

const newKnuccles = setInterval(() => {
    if(knucclesCounter <= 100){
        const newImg = document.createElement('img')

        newImg.src = 'dawae.jpeg'
        newImg.classList.add('absolute', "mix-blend-multiply", "dawae-img")
        newImg.style.top = Math.floor(Math.random() * 120 - 10) + '%'
        newImg.style.left = Math.floor(Math.random() * 120 - 10) + '%'
        newImg.draggable = true;
    
        dawaeContainer.appendChild(newImg)
        knucclesCounter++

        allKuccles = document.querySelectorAll('.dawae-img')
    } else {
        clearInterval(newKnuccles)

        // allKuccles.forEach(knuccles => {
        //    knuccles.addEve
        // })
    }
}, 30);


