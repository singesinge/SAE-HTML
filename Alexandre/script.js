/* Animation H1 */

  /*==Pour animerle texte de la premiere page==*/
  const txtAnim = document.querySelector('h1');
  new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 5
  })
  .changeDelay(20)
  .typeString('<span style="color: red;"></br>Alexandre BERGERON,</span>')
  .pauseFor(300)
  .typeString('<span style="color: red;"></br>Etudiant en informatique</span>')
  .pauseFor(1000)
  .deleteChars(25)
  .typeString('<span style="color: red;"></br>Cocréateur de ce site web</span>')
  .pauseFor(1000)
  .deleteChars(46)
  .typeString('<span style="color: red;"></br>Voici le parcours professionnel</span>')
  .typeString('<span style="color: red;"></br> auquel j\'aspire</span>')
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