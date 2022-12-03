  /*==Pour animerle texte de la premiere page==*/
const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
	loop: true,
	deleteSpeed: 10
})
.changeDelay(20)
.typeString('Moi c\'est Thomas,')
.pauseFor(300)
.typeString('<span style="color: midnightblue;"></br>Etudiant en Informatique</span>')
.pauseFor(1000)
.deleteChars(24)
.typeString('<span style="color: darkgreen;"> Développeur de ce site</span>')
.pauseFor(1000)
.deleteChars(23)
.typeString('<span style="color:  darkorange;"> Et futur Dév Full-Stack</span> !')
.pauseFor(1000)
.deleteChars(46)
.typeString('<span style="color:  darkpurple;">Ma présentation et le metier que je souhaiterai faire.</span>')
.pauseFor(7000)
.start()


/*==boutton et menu apparition==*/
const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
hamburgerButton.addEventListener("click", toggleNav)
function toggleNav(){
	hamburgerButton.classList.toggle("active")
	navigation.classList.toggle("active")
  }
  

  /*==Pour l'apparition de la classe reveal lors du scroll de la page==*/
const ratio = .1
const options = {
	root: null,
	rootMargin: '0px',
	threshold: ratio
}
const handleIntersect = function (entries,observer){
	entries.forEach(function (entry){
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add("reveal-visible")
			observer.unobserve(entry.target)	
		}
	})
}
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll("[class*='reveal-']").forEach(function(r){
	observer.observe(r)
})