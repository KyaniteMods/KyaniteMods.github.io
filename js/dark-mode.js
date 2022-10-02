var mcTip = document.getElementById("minecraft-tip");
var lightModeButton = document.getElementById("light-mode-button");
// var twitter = document.getElementsByClassName("twitter-timeline");

if (localStorage.lightmode) {
	if (localStorage.lightmode == 'true') {
		$(document.body).addClass("light-mode");
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
		$(document.body).removeClass("light-mode");
		mcTip.innerHTML = "Switch to Light Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Light Mode");
		localStorage.lightmode = 'false';
		// $(twitter).attr("data-theme", "dark");
	} else {
		console.log("Adding Light Mode");
		$(document.body).addClass("light-mode");
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
		localStorage.lightmode = 'true';
		// $(twitter).removeAttr("data-theme");
	}
}