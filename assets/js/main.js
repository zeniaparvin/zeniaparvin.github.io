/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// when we click on each nav__link, we remove the show menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills__content'),
// 	skillsHeader = document.querySelectorAll('.skills__header');

// function toggleSkills() {
// 	let itemClass = this.parentNode.className;

// 	for (i = 0; i < skillsContent.length; i++) {
// 		skillsContent[i].className = 'skills__content skills__close';
// 	}

// 	if (itemClass === 'skills__content skills__close') {
// 		this.parentNode.className = 'skills__content skills__open';
// 	}
// }

// skillsHeader.forEach((el) => {
// 	el.addEventListener('click', toggleSkills);
// });

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const nav = document.getElementById('header');
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
		iconTheme
	);
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	//add or remove dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	//we save the theme and the current icon so that the user choose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

// Rotate Skill Badges
const badges = document.querySelectorAll('.amg-badge img');

const rotateBadge = (badge, speed) => {
	const rotateSpeed = speed / 180;
	let current = 0;

	const badgeRotation = () => {
		current = current === 90 ? 271 : current + 1;

		badge.style.transform = `rotate3d(0, 1, 0, ${current}deg)`;

		if (current === 360) {
			clearInterval(rotateInterval);
			badge.removeAttribute('style');
			badge.classList.remove('spinning');
		}
	};

	const rotateInterval = setInterval(badgeRotation, rotateSpeed);
};

badges.forEach((badge) => {
	badge.addEventListener('mouseenter', () => {
		if (!badge.classList.contains('spinning')) {
			rotateBadge(badge, 500);
			badge.classList.add('spinning');
		}
	});
});
