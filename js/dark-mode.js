var mcTip = document.getElementById("minecraft-tip");
var lightModeButton = document.getElementById("light-mode-button");
var lightModeButtonWiki = document.getElementById("topbar-dark-mode-button");

if (localStorage.lightmode) {
	if (localStorage.lightmode == 'true') {
		$(document.body).addClass("light-mode");
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
	}
} else {
	localStorage.lightmode = 'false';
}

function toggleDarkMode() {
	if (localStorage.lightmode == 'true') {
		console.log("Removing Light Mode");
		$(document.body).removeClass("light-mode");
		mcTip.innerHTML = "Switch to Light Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Light Mode");
		localStorage.lightmode = 'false';
	} else {
		console.log("Adding Light Mode");
		$(document.body).addClass("light-mode");
		mcTip.innerHTML = "Switch to Dark Mode";
		$(lightModeButton).attr("data-mctitle", "Switch to Dark Mode");
		localStorage.lightmode = 'true';
	}
}

function toggleDarkModeWiki() {
	if (localStorage.lightmode == 'true') {
		$(document.body).removeClass("light-mode");
		localStorage.lightmode = 'false';
	} else {
		$(document.body).addClass("light-mode");
		localStorage.lightmode = 'true';
	}
}