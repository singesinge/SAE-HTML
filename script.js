/*==boutton et menu apparition==*/
const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
hamburgerButton.addEventListener("click", toggleNav)
function toggleNav(){
	hamburgerButton.classList.toggle("active")
	navigation.classList.toggle("active")
  }


/*==animation changement page ==*/
const wipe = document.querySelector('.wipe-transition');
const TLAnim = new TimelineMax();

barba.init({
  sync: true,

  transitions: [
    {
      async leave(){

        TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

        await delay(1500);
        done();

      },
      enter(){

         TLAnim
         .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
         .set(wipe, {left: '-100%'})
      }
    }
  ]

})