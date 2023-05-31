var angle = 0;

function carouselSpin(operator) {
    spinner = document.getElementById('spinner');
    if (!operator) {
        angle = angle -45;
    } else {
        angle = angle +45;
    }
    spinner.style.transform = 'rotateY(' + angle + 'deg)';
                        
}