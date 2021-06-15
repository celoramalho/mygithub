
const navbarSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navbar-links')
	const navLinks = document.querySelectorAll('.navbar-links li');
	const navLinksA = document.querySelectorAll('.barra-item');
	


	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('navbar-ativo');
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle')
	});


	for (let i = 0; i < navLinksA.length; i++) {
		navLinksA[i].addEventListener("click", function() {
			//console.log(i)
			nav.classList.toggle('navbar-ativo');
		//Animate Links
		navLinks.forEach((link) => {
			link.style.animation = '';
		});
		});
	}


}
navbarSlide();

window.addEventListener("scroll", function () {
	var sectionhome = document.querySelector("#section-home");
	var sectionprojetos = document.querySelector("#websitespessoais-section");
	sectionhome.classList.toggle("scrolado", window.scrollY > 400)

	sectionprojetos.classList.toggle("scrolado-projetos", window.scrollY > window.innerHeight * 1.3)


	//console.log(scrollY)
})