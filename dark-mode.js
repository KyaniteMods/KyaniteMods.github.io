var wrapper = document.getElementById("wrapper");
var mcTip = document.getElementById("minecraft-tip");
var lightModeButton = document.getElementById("light-mode-button");
// var twitter = document.getElementsByClassName("twitter-timeline");

if (localStorage.lightmode) {
	if (localStorage.lightmode == 'true') {
		$(wrapper).addClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/assets/background-blocks/light-mode/white_concrete.png')";
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
	}
} else {
	localStorage.lightmode = 'false';
	// $(twitter).attr("data-theme", "dark");
}

function toggleDarkMode() {
	if (localStorage.lightmode == 'true') {
		console.log("Removing Light Mode");
		$(wrapper).removeClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/background-blocks/dark-mode/deepslate_tiles.png')";
		mcTip.innerHTML = "Switch to Light Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Light Mode");
		localStorage.lightmode = 'false';
		// $(twitter).attr("data-theme", "dark");
	} else {
		console.log("Adding Light Mode");
		$(wrapper).addClass("light-mode");
		document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/assets/background-blocks/light-mode/white_concrete.png')";
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
		localStorage.lightmode = 'true';
		// $(twitter).removeAttr("data-theme");
	}
}