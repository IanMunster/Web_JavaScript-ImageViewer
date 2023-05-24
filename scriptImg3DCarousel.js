var angle = 0;

function carouselSpin(operator) {
    spinner = document.getElementById('spinner');
    if (!operator) {
        angle = angle -45;
    } else {
        angle = angle +45;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY("+angle+"deg); -moz-transform: rotateY("+angle+"deg); -transform: rotateY("+angle+"deg);");
                        
}