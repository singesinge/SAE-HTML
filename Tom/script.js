/* pour l'affichage des caracteres façon matrix */
const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 285;
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;
const fontSize = 16;
const columns = canvas.width/fontSize;
const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';
    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 50);
/*==pour que le bandeau d'entete reste focalisé sur le haut de la page==*/
window.onscroll = function() {headercollé()};
var header = document.getElementById("bandeau");
var sticky = header.offsetTop;
function headercollé() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
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



















