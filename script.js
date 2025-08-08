// Cookie handling functions from https://www.quirksmode.org/js/cookies.html
function createCookie(name,value) {
	document.cookie = name+"="+value+"; path=/";
}
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// Initialize cookies if the don't exist
if(readCookie('doRainbow') == null){
    createCookie('doRainbow', 'false')
}
if(readCookie('hue') == null){
    createCookie('hue', '0')
}
if(readCookie('letterTimers') == null){
    createCookie('letterTimers', JSON.stringify([7,6,5,4,3,2,1,0]))
}

// Handles waving the title around
let letterTimers = JSON.parse(readCookie('letterTimers'))
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

function waveTitle(deltaTime){
    const speed = 0.0025
    const height = 0.5

    for(i=0;i<8;i++){
        letters[i].style.top = (Math.sin(letterTimers[i])+1) * height + "rem"
        letterTimers[i] += speed*deltaTime
    }

    createCookie('letterTimers', JSON.stringify(letterTimers))
}

// Handles the togglable rainbow effect
let hue = Number(readCookie('hue'))
let doRainbow = readCookie('doRainbow') === 'true'
function rainbow(deltaTime){
    const speed = 0.2
    if(doRainbow){
        document.documentElement.style.filter = "hue-rotate("+hue+"deg)"
        hue += speed*deltaTime

        createCookie('hue', `${hue}`)
    }else{
        document.documentElement.style.filter = "hue-rotate(0deg)"
    }
}

function toggleRainbow(){
    if(doRainbow){
        createCookie('doRainbow', 'false')
        doRainbow = false
    }else{
        createCookie('doRainbow', 'true')
        doRainbow = true
    }
}

let lastTime = performance.now()
function update(){
    const currentTime = performance.now()
    const deltaTime = currentTime - lastTime
    lastTime = currentTime
    
    waveTitle(deltaTime)
    rainbow(deltaTime)

    requestAnimationFrame(update)
}
update()