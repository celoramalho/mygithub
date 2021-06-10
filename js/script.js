window.addEventListener("scroll", function(){
	var sectionhome = document.querySelector("#section-home");
    var sectionprojetos = document.querySelector("#projetos");
	sectionhome.classList.toggle("scrolado", window.scrollY > 400)
    
	sectionprojetos.classList.toggle("scrolado-projetos", window.scrollY > window.innerHeight * 1.3)


    console.log(scrollY)
})

