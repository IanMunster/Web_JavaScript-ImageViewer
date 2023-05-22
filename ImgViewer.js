/*callback functie*/
window.addEventListener('load', load);

// Variables
var folderXL = "img/1920x1080/",
	folderL = "img/1280x720/",
	folderM = "img/854x480/",
	folderS = "img/640x360/",
	folderXS = "img/426x240/";

var imgL = folderS,
	imgS = folderXS;

var images = [],
	imgIndex = 0,
	display,
	album;

/* SCREENWIDTH RWD */
var tabletY = 960,
	mobileY = 720;

var prvBtn,
	nxtBtn,
	slider;

function load() {
	/* Main Display and Thumb Album*/
	display = document.getElementById('display');
	album = document.getElementById('album');

	/* Screensize on Load */
	if (window.innerWidth < mobileY) {
		// Mobile-Screen
		//console.log("Mobile Screen-Width");
		imgL = folderS;
		imgS = folderXS;
	} else if (window.innerWidth < tabletY) {
		// Tablet-Screen
		//console.log("Tablet Screen-Width");
		imgL = folderL;
		imgS = folderM;
	} else {
		// Desktop-Screen
		//console.log("Desktop Screen-Width");
		imgL = folderXL;
		imgS = folderM;
	}

	/* Buttons and Controls */
	prvBtn = document.getElementById('bck').addEventListener('click', goToPrev);
	nxtBtn = document.getElementById('nxt').addEventListener('click', goToNext);
	slider = document.getElementById('slider');

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

	// Build Thumbs Album
	buildthumbs();

	/* On Screen Resize after Load */
	window.addEventListener("resize", resizeFunc);
}

/* Thumb Album */
function buildthumbs(i) {
	for (var i = 0; i < images.length; i++) {
		/* SWITCH */
		if ((window.innerWidth < tabletY && window.innerWidth < mobileY) && (i > 3)) {
			imgS = folderXS;
			//imgL = folderS;
		}
		if ((window.innerWidth < tabletY && window.innerWidth > mobileY) && (i > 5)) {
			imgS = folderM;
			//imgL = folderL;
		}
		if ((window.innerWidth > tabletY && window.innerWidth > mobileY) && (i > 11)) {
			imgS = folderM;
			//imgL = folderXL;
		}
		var thumb = new Image();
		thumb.src = imgS + images[i];
		album.appendChild(thumb);
		thumb.id = i;
		thumb.classList.add("thumb");
		thumb.addEventListener('click', function (e) {
			selectImg(e.target.id);
		});
	}
}

// Clicked and Selected Image
function selectImg(id) {
	imgIndex = id;
	display.src = imgL + images[id];
}

// Previous Button Clicked
function goToPrev() {
	imgIndex--;
	if (imgIndex < 0) {
		imgIndex = 11;
	}
	selectImg(imgIndex);
}

// Next Button Clicked
function goToNext() {
	imgIndex++;
	if (imgIndex > 11) {
		imgIndex = 0;
	}
	selectImg(imgIndex);
}

function resizeFunc() {
	/* Screensize on Load */
	if (window.innerWidth < mobileY) {
		// Mobile-Screen
		//console.log("Mobile Screen-Width");
		display.src = folderS + images[imgIndex];
		images.src = folderXS + images[imgIndex];
	} else if (window.innerWidth < tabletY) {
		// Tablet-Screen
		//console.log("Resized to Tablet Screen-Width");
		display.src = folderL + images[imgIndex];
		images.src = folderM + images[imgIndex];
	} else {
		// Desktop-Screen
		//console.log("Resized to Desktop Screen-Width");
		display.src = folderXL + images[imgIndex];
		images.src = folderM + images[imgIndex];
	}
}