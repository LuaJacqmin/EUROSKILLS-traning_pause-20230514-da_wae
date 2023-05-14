const dawaeContainer = document.querySelector('.dawae-container')
let allKuccles = [];
let knucclesCounter = 0;
const imgNumber = 250;
const popDelay = 30;
let hueRotateValue = 0;

document.body.style.cursor = "not-allowed"
const newKnuccles = setInterval(() => {
    if(knucclesCounter <= imgNumber){
        const newImg = document.createElement('img')

        newImg.src = 'dawae.png'
        newImg.classList.add('absolute', "dawae-img", "transition-all", "duration-200", "ease-out")
        newImg.style.top = Math.floor(Math.random() * 120 - 10) + '%'
        newImg.style.left = Math.floor(Math.random() * 120 - 10) + '%'
        // newImg.draggable = true;
    
        dawaeContainer.appendChild(newImg)
        knucclesCounter++
    } else {
        clearInterval(newKnuccles)
        document.body.style.cursor = "initial"
        
        allKuccles = document.querySelectorAll('.dawae-img')

        allKuccles.forEach(knuccles => {
            knuccles.addEventListener('mouseover', e => {
                knuccles.style.top = Math.floor(Math.random() * 120 - 10) + '%'
                knuccles.style.left = Math.floor(Math.random() * 120 - 10) + '%'
                knuccles.style.filter = `hue-rotate(${hueRotateValue}deg)`
                hueRotateValue += 5;
            })      
        })
    }
}, popDelay);
