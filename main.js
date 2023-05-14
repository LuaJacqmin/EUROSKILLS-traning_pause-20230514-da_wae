const dawaeContainer = document.querySelector('.dawae-container')
let allKuccles = [];
let knucclesCounter = 0;
const imgNumber = 250;
const popDelay = 30;
let hueRotateValue = 0;
let newTopPosition, newLeftPosition;

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
                // new top position calc
                if(Math.floor(Math.random() * 2) == 1){
                    newTopPosition = parseInt(knuccles.style.top.replace('%', '')) - 10 > -10 ? parseInt(knuccles.style.top.replace('%', '')) - 10 : -10;
                } else {
                    newTopPosition = parseInt(knuccles.style.top.replace('%', '')) + 10 < 110 ? parseInt(knuccles.style.top.replace('%', '')) + 10 : 110;
                }

                if(Math.floor(Math.random() * 2) == 1){
                    newLeftPosition = parseInt(knuccles.style.left.replace('%', '')) - 10 > -10 ? parseInt(knuccles.style.left.replace('%', '')) - 10 : -10;
                } else {
                    newLeftPosition = parseInt(knuccles.style.left.replace('%', '')) + 10 < 110 ? parseInt(knuccles.style.left.replace('%', '')) + 10 : 110;
                }

                knuccles.style.top = newTopPosition + '%'
                knuccles.style.left = newLeftPosition + '%'
                knuccles.style.filter = `hue-rotate(${hueRotateValue}deg)`
                hueRotateValue += 5;
            })      
        })
    }
}, popDelay);
