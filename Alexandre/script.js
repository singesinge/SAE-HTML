/* Animation H1 */

const txtAnim = document.querySelector('h1');
new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 5
})
.changeDelay(20)
.typeString('<span style="color: white;">Alexandre BERGERON,</span>')
.pauseFor(300)
.typeString('<span style="color: white;"></br>Etudiant en BUT informatique</span>')
.pauseFor(1000)
.typeString('<span style="color: white;"></br>Cocréateur de ce site web</span>')
.pauseFor(1000)
.typeString('<span style="color: white;"></br>Voici le parcours professionnel</span>')
.typeString('<span style="color: white;"></br> auquel j\'aspire.</span>')
.pauseFor(7000)
.start()

/* Menu Accueil */

const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}

/* Animation H3 */

const txtAnima = document.querySelector('h3');
new Typewriter(txtAnima, {
  loop: true,
  deleteSpeed: 5
})
.changeDelay(20)
.typeString('<span style="color: red;">Java</span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color: blue;">Py</span><span style="color: yellow;">thon</span>')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: lightblue;">C++</span')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color: white;">PHP</span>')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color: yellow;">JavaScript</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: darkblue;">SQL</span>')
.pauseFor(1000)
.deleteChars(3)
.start()