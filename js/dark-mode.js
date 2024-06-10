var mcTip = document.getElementById("minecraft-tip");
var lightModeButton = document.getElementById("light-mode-button");
var lightModeButtonWiki = document.getElementById("topbar-dark-mode-button");

if (localStorage.lightmode) {
	if (localStorage.lightmode == 'true') {
		document.body.classList.add('light-mode');
	}
} else {
	localStorage.lightmode = 'false';
}

function toggleDarkMode() {
	if (localStorage.lightmode == 'true') {
		console.log("Removing Light Mode");
		document.body.classList.remove('light-mode');
		translate.whenLoaded(() => {
			setTooltipText(followerTooltip, translate.translateString('light_mode.off'));
			lightModeButton.dataset.mctitle = JSON.stringify(new TranslatableText('light_mode.off'));
		});
		localStorage.lightmode = 'false';
	} else {
		console.log("Adding Light Mode");
		document.body.classList.add('light-mode');
		translate.whenLoaded(() => {
			setTooltipText(followerTooltip, translate.translateString('light_mode.on'));
			lightModeButton.dataset.mctitle = JSON.stringify(new TranslatableText('light_mode.on'));
		});
		localStorage.lightmode = 'true';
	}
}

translate.addChangeListener(() => {
	lightModeButton.dataset.mctitle = JSON.stringify(new TranslatableText(localStorage.lightmode == 'true' ? 'light_mode.on' : 'light_mode.off'));
});

function toggleDarkModeWiki() {
	if (localStorage.lightmode == 'true') {
		$(document.body).removeClass('light-mode');
		localStorage.lightmode = 'false';
	} else {
		$(document.body).addClass('light-mode');
		localStorage.lightmode = 'true';
	}
}