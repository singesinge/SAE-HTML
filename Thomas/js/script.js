  /*==Pour animerle texte de la premiere page==*/
const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
	loop: true,
	deleteSpeed: 10
})
.changeDelay(20)
.typeString('Moi c\'est Thomas,')
.pauseFor(300)
.typeString('<em class="dblue"></br>Etudiant en Informatique</em>')
.pauseFor(1000)
.deleteChars(24)
.typeString('<em class="dgreen"> Développeur de ce site</em>')
.pauseFor(1000)
.deleteChars(23)
.typeString('<em class="dorange"> Et futur Dév Full-Stack</em> !')
.pauseFor(1000)
.deleteChars(46)
.typeString('<em>Ma présentation et<br> le metier que je<br> souhaiterai faire.</em>')
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



/*==btn backToTop==*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});