function setZoom(){
    if(window.innerWidth >= 2500){
        document.body.style.zoom = 2.6
    }else if(window.innerWidth <= 700){
        document.body.style.zoom = window.innerWidth / 700 * 1.5
    }else{
        document.body.style.zoom = 1.5
    }
}
setZoom()

window.addEventListener('resize', function(event){
    setZoom()
})