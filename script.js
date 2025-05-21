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
    for(i=0;i<8;i++){
        letters[i].style.top = Math.sin(letterTimers[i])+1 + "rem"
        letterTimers[i] += 0.015
    }

    requestAnimationFrame(waveTitle)
}

waveTitle()