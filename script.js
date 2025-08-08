let letterTimers = [7,6,5,4,3,2,1,0]
let letters = [
    document.getElementById("title-header-1"),
    document.getElementById("title-header-2"),
    document.getElementById("title-header-3"),
    document.getElementById("title-header-4"),
    document.getElementById("title-header-5"),
    document.getElementById("title-header-6"),
    document.getElementById("title-header-7"),
    document.getElementById("title-header-8")
]

function waveTitle(){
    const speed = 0.015
    const height = 0.5

    for(i=0;i<8;i++){
        letters[i].style.top = (Math.sin(letterTimers[i])+1) * height + "rem"
        letterTimers[i] += speed
    }

    requestAnimationFrame(waveTitle)
}

let hue = 0
function rainbow(){
    document.documentElement.style.filter = "hue-rotate("+hue+"deg)"
    hue += 3

    requestAnimationFrame(rainbow)
}

waveTitle()
// rainbow()