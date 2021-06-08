const navbarSlide = () => {
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.navbar-links')
	const navLinks = document.querySelectorAll('.navbar-links li');
	//Toggle Now

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		
	});
	//Animate Links
	navLinks.forEach((link, index) => {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
	});
}

navbarSlide();