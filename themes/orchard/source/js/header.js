var menuControl = function () {
	document.querySelector('.menu-header').classList.toggle('_close');
};


funcAddEvent('.menu-control', 'click', menuControl);