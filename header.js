// Cookie handling functions from https://www.quirksmode.org/js/cookies.html
function createCookie(name,value) {
    const days = 60
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    var expires = "; expires="+date.toGMTString()

	document.cookie = name+"="+value+expires+"; path=/"
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

// Initialize cookies if they don't exist
if(readCookie('doRainbow') == null){
    createCookie('doRainbow', 'false')
}
if(readCookie('hue') == null){
    createCookie('hue', '0')
}
if(readCookie('baseHue') == null){
    createCookie('baseHue', '0')
}
if(readCookie('letterTimers') == null){
    createCookie('letterTimers', JSON.stringify([7,6,5,4,3,2,1,0]))
}

// Injects header and nav into HTML
const header = document.createElement('header')

const button = document.createElement('button')
button.textContent = '🌈'
button.setAttribute('onclick', 'toggleRainbow()')
button.id = 'rainbow-toggle'

const slider = document.createElement('input')
let baseHue = readCookie('baseHue')
slider.type = 'range'
slider.min = 0
slider.max = 360
slider.value = baseHue
slider.id = 'color-slider'
slider.addEventListener('input', function(){
    baseHue = this.value
    createCookie('baseHue', `${this.value}`)
})

const div = document.createElement('div')
div.id = 'title'

const nav = document.createElement('nav')
const links = []
for(i=0;i<6;i++){
    switch(i){
        case 0:
            if(window.location.pathname.split('/').pop() == 'index.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'index.html'
            }
            links[i].textContent = 'Home'
            break

        case 1:
            if(window.location.pathname.split('/').pop() == 'about.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'about.html'
            }
            links[i].textContent = 'About'
            break

        case 2:
            if(window.location.pathname.split('/').pop() == 'blog.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'blog.html'
            }
            links[i].textContent = 'Blog'
            break
        
        case 3:
            if(window.location.pathname.split('/').pop() == 'projects.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'projects.html'
            }
            links[i].textContent = 'Projects'
            break

        case 4:
            if(window.location.pathname.split('/').pop() == 'photos.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'photos.html'
            }
            links[i].textContent = 'Photos'
            break

        case 5:
            if(window.location.pathname.split('/').pop() == 'links.html'){
                links.push(document.createElement('span'))
            }else{
                links.push(document.createElement('a'))
                links[i].href = 'links.html'
            }
            links[i].textContent = 'Links'
            break
    }
}

const h1s = []
for(i=0;i<8;i++){
    h1s.push(document.createElement('h1'))
    h1s[i].textContent = 'a'
    h1s[i].id = `th-${i+1}`
    h1s[i].setAttribute('class', 'title-header')
}
h1s[5].textContent = 'm'
h1s[6].textContent = 'e'
h1s[7].textContent = 'd'

const spans = []
for(i=0;i<8;i++){
    spans.push(document.createElement('span'))
    spans[i].textContent = ' '
}

document.body.prepend(header)
header.append(div)
for(i=0;i<8;i++){
    div.append(h1s[i])
    div.append(spans[i])
}
header.append(nav)
for(i=0;i<6;i++) nav.append(links[i])
nav.append(button)
nav.append(slider)

// Handles waving the title around
let letterTimers = JSON.parse(readCookie('letterTimers'))
function waveTitle(deltaTime){
    const speed = 0.0025
    const height = 0.25

    for(i=0;i<8;i++){
        h1s[i].style.top = (Math.sin(letterTimers[i])+1) * height + "rem"
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
        document.documentElement.style.filter = "hue-rotate("+baseHue+"deg)"
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

// Continuously runs other functions and calculates deltaTime
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