/*callback functie*/
window.addEventListener('load', load);

// Screens Width
var tabletY = 960,
	mobileY = 720;

// Folder structure
var folderXL = "../img/1920x1080/",
	folderL = "../img/1280x720/",
	folderM = "../img/854x480/",
	folderS = "../img/640x360/",
	folderXS = "../img/426x240/";

// Set Default Images to Smallest Folder
var imgL = folderS,
	imgS = folderXS;

// Images
var images = [],
	imgIndex = 0,
	display,
	album;

// Controls
var prvBtn,
	nxtBtn,
	slider,
	output;
// Caption and Output
var caption = "",
	imgCount = 0;

function load() {
	// Load Screen Size
	loadScreenSize();
	// Get Elements
	loadElements();
	// Fill Array and Display Defaults
	initializePage ();
	/* On Screen Resize after Load */
	window.addEventListener("resize", resizeFunc);
}

function loadScreenSize () {
		/* Screensize on Load */
		if (window.innerWidth < mobileY) {
			// Mobile-Screen
			imgL = folderS;
			imgS = folderXS;
		} else if (window.innerWidth < tabletY) {
			// Tablet-Screen
			imgL = folderL;
			imgS = folderM;
		} else {
			// Desktop-Screen
			imgL = folderXL;
			imgS = folderL;
		}
}

function loadElements () {
	/* Main Display, Thumb Album and Output*/
	display = document.getElementById('displayImg');
	album = document.getElementById('album');
	caption = document.getElementById('caption');
	imgCount = document.getElementById('imgCounter');
	/* Buttons and Controls */
	prvBtn = document.getElementById('prvBtn').addEventListener('click', goToPrev);
	nxtBtn = document.getElementById('nxtBtn').addEventListener('click', goToNext);
	slider = document.getElementById('slider');
	slider.addEventListener('input', sliderInput);
}

function initializePage () {
	/* Image Names Array */
	images = ["img01.jpg",
		"img02.jpg",
		"img03.jpg",
		"img04.jpg",
		"img05.jpg",
		"img06.jpg",
		"img07.jpg",
		"img08.jpg",
		"img09.jpg",
		"img10.jpg",
		"img11.jpg",
		"img12.jpg",
		"img13.jpg",
		"img14.jpg",
		"img15.jpg",
		"img16.jpg",
		"img17.jpg",
	];

	// Display Default Image
	display.src = imgL + images[imgIndex];
	caption.innerHTML = images[imgIndex];
	imgCount.innerHTML = (imgIndex+1) +" / "+ (images.length);

	// Set slider Default
	slider.max = images.length-1;
	slider.value = imgIndex;

	// Build Thumbs Album
	buildthumbs();
}

/* Thumb Album */
function buildthumbs(i) {
	for (var i = 0; i < images.length; i++) {
		// Create a new Thumb Image
		var thumb = new Image();
		thumb.src = imgS + images[i];
		album.appendChild(thumb);
		// Give Thumb and ID and Class
		thumb.id = i;
		thumb.classList.add("thumb");
		// Add a Click Event to Thumb
		thumb.addEventListener('click', function (e) {
			selectImg(e.target.id);
		});
	}
}

// Clicked and Selected Image
function selectImg(id) {
	imgIndex = id;
	display.src = imgL + images[id];
	updateSlider();
	updateCaption();
	updateCounter();
}

// Previous Button Clicked
function goToPrev() {
	imgIndex--;
	if (imgIndex < 0) {
		imgIndex = images.length-1;
	}
	selectImg(imgIndex);
}

// Next Button Clicked
function goToNext() {
	imgIndex++;
	if (imgIndex > images.length-1) {
		imgIndex = 0;
	}
	selectImg(imgIndex);
}

function sliderInput () {
	// Adjust slider Values to Min and Max of Images Array
	if (slider.value < 0) {
		slider.value = 0;
	} else if (slider.value > images.length-1) {
		slider.value = images.length-1;
	}
	// Select Image
	selectImg(slider.value);
}

function updateSlider () {
	// Update Slider value to Current IMG
	slider.value = imgIndex;
}

function updateCaption () {
	// Update Caption to Current IMG
	caption.innerHTML = images[imgIndex];
}

function updateCounter () {
	// Update Img Counter
	// ParseInt fixes bug where JS considers values as String
	var current = parseInt(imgIndex) + 1,
		max = parseInt(images.length);
	imgCount.innerHTML = current +" / "+ max;
}

function resizeFunc() {
	/* Screensize on Resize */
	if (window.innerWidth < mobileY) {
		// Mobile-Screen
		display.src = folderS + images[imgIndex];
		images.src = folderXS + images[imgIndex];
	} else if (window.innerWidth < tabletY) {
		// Tablet-Screen
		display.src = folderL + images[imgIndex];
		images.src = folderM + images[imgIndex];
	} else {
		// Desktop-Screen
		display.src = folderXL + images[imgIndex];
		images.src = folderL + images[imgIndex];
	}
}