var wrapper = document.getElementById("wrapper");
var mcTip = document.getElementById("minecraft-tip");
var lightModeButton = document.getElementById("light-mode-button");

if (localStorage.lightmode) {
	if (localStorage.lightmode == 'true') {
		$(wrapper).addClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('assets/white_concrete_64x.png')";
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
	}
} else {
	localStorage.lightmode = 'false';
}

function toggleDarkMode() {
	if (localStorage.lightmode == 'true') {
		console.log("Removing Light Mode");
		$(wrapper).removeClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/deepslate_tiles_background_64x.png')";
		mcTip.innerHTML = "Switch to Light Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Light Mode");
		localStorage.lightmode = 'false';
	} else {
		console.log("Adding Light Mode");
		$(wrapper).addClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('assets/white_concrete_64x.png')";
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
		localStorage.lightmode = 'true';
	}
}