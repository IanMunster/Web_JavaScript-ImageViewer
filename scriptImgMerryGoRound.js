// ForEachThumb Method
/// Go through a given Array
/// return the arrays Scope Index and Child in Array on Index
var forEachThumb = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

// Merry-Go-Round
var spinner = document.getElementById("Spinner"),
    angle = 0,
    startDegree = 0,
    images = document.querySelectorAll(".thumb"),
    imgDegree = 360 / images.length,
    imgCurrent = 0;

// Buttons
var nextBtn = document.getElementById('NxtBtn').addEventListener('click', function () { MerryGoRound(); }),
    prevBtn = document.getElementById('PrvBtn').addEventListener('click', function () { MerryGoRound('-'); });

// Set Starting Rotation of Each Thumb
forEachThumb(images, function (index, value) {
    // Rotate the image Y to StartDegree
    images[index].style.webkitTransform = 'rotateY(' + startDegree + 'deg)';
    images[index].style.transform = 'rotateY(' + startDegree + 'deg)';
    images[index].addEventListener('click', function () {
        // Click on Thumb Event
        console.log("Clicked on: " + images[index]);
    })
    // Add the Starting Degree with ImgDegree, so each Img gets a new Degree on Start
    startDegree = startDegree + imgDegree;
});

// Set current Front Image
function setCurrentFront (imgCurrent) {
    // 
    console.log ("Current Front Img: "+ imgCurrent);
}

function MerryGoRound(operator) {
    // Change rotation Direction based on Button Clicked
    if (!operator) {
        // Change Degree
        angle = angle + imgDegree;
        // clicked Next Btn
        imgCurrent++;
        // Reset to first IMG if Last IMG reached
        if (imgCurrent > images.length - 1) {
            imgCurrent = 0;
        }
    } else {
        // Change Degree
        angle = angle - imgDegree;
        //clicked Prev Btn
        imgCurrent--;
        // Reset to last Img if First IMG reached
        if (imgCurrent == 0) {
            imgCurrent = images.length - 1;
        }
    }
    // Rotate Y of Spinner
    spinner.style.transform = 'rotateY(' + angle + 'deg)';
    // Set Current Front Image
    setCurrentFront(imgCurrent);
}
