let y = 0;
let checkScrollPos = 0;
let bodyBGimgs = document.querySelector('.fullContainer');
let headerMobileBGOne = document.querySelector('.headerMobileBGOne');
let headerMobileBGTwo = document.querySelector('.headerMobileBGTwo');
// let randomNum = Math.floor(Math.random() *13);
let randomNum = 0;
let secs = new Date().getSeconds();
switch (true) {
	case (secs >= 0 && secs <= 3):
		randomNum = 1;
		break;
	case (secs > 3 && secs <= 6):
		randomNum = 0;
		break;
	case (secs > 6 && secs <= 9):
		randomNum = 2;
		break;
	case (secs > 9 && secs <= 12):
		randomNum = 3;
		break;
	case (secs > 12 && secs <= 15):
		randomNum = 4;
		break;
	case (secs > 15 && secs <= 18):
		randomNum = 5;
		break;
	case (secs > 18 && secs <= 21):
		randomNum = 6;
		break;
	case (secs > 21 && secs <= 24):
		randomNum = 7;
		break;
	case (secs > 24 && secs <= 28):
		randomNum = 8;
		break;
	case (secs > 28 && secs <= 32):
		randomNum = 9;
		break;
	case (secs > 32 && secs <= 36):
		randomNum = 10;
		break;
	case (secs > 36 && secs <= 40):
		randomNum = 11;
		break;
	case (secs > 40 && secs <= 45):
		randomNum = 12;
		break;
	case (secs > 50 && secs <= 55):
		randomNum = 13;
		break;
	default:
		randomNum = 0;
		break;
};
console.log(randomNum);
let slide = 'bodyBG' + randomNum + '.webp';
bodyBGimgs.style.backgroundImage = 'url(img/' + slide + ')';

// checa a posição do scroll a cada 500ms, somente para ocultar e mostrar o header
setInterval(checkScrollPosition, 500);

function checkScrollPosition() {
	checkScrollPos = y;
};

// função que encontra a posição do topo dos elementos que serão animados
function findTop(element) {
  let rec = element.getBoundingClientRect();
  return rec.top;
};

window.addEventListener('scroll', function() {

	y = window.scrollY || document.documentElement.scrollTop;
	var x = window.matchMedia("(max-width: 900px)");

	if(bodyBGimgs.getBoundingClientRect().top <= -1000) {
		if (x.matches) {
			bodyBGimgs.style.backgroundImage = 'none';
		} else {
			bodyBGimgs.style.backgroundPosition = '10% center';
			bodyBGimgs.style.backgroundImage = 'url(img/bodyBGFade.webp)';
		};
	} else {
		if (x.matches) {
			bodyBGimgs.style.backgroundImage = 'none';
		} else {
			bodyBGimgs.style.backgroundImage = 'url(img/' + slide + ')';
		};
	};


});







/*



let hamburguer = document.querySelector('.headerWhiteHamburguerMenu');
let closeMobileMenuBtn = document.querySelector('.mobileMenuCloseBtn');
hamburguer.addEventListener('click', animateMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
let mobileMenu = document.querySelector('.mobileMenu');
let mobileBtn = document.querySelectorAll('.mobileBtn');
mobileBtn = Array.from(mobileBtn);
mobileBtnDelay = 50;



mobileMenu.style.transform = 'translateX(-110%)';



function animateMobileMenu() {
	mobileMenu.animate(
		[
		{ transform: 'translateX(-110%)'},
		{ transform: 'translateX(0%)'}
		], {
			duration: 500,
			fill: 'both',
			easing: 'cubic-bezier(0.77, 0, 0.175, 1)'
		}
	);
	mobileBtn.forEach(function(el) {
		el.animate(
			[
			{ transform: 'translateX(-110%)'},
			{ transform: 'translateX(0%)'}
			], {
				duration: 500,
				delay: mobileBtnDelay,
				fill: 'both',
				easing: 'cubic-bezier(0.77, 0, 0.175, 1)'
			}
		);
		mobileBtnDelay += mobileBtnDelay;
		console.log(mobileBtnDelay);
	});
	mobileBtnDelay = 50;
};

function closeMobileMenu() {
	mobileMenu.animate(
		[
		{ transform: 'translateX(0%)'},
		{ transform: 'translateX(-110%)'}
		], {
			duration: 500,
			fill: 'both',
			easing: 'cubic-bezier(0.77, 0, 0.175, 1)'
		}
	);
};


hamburguer.addEventListener('click', function(el) {
	el.preventDefault();
	if(el.target.classList.contains('mobileBtn')) {
		console.log(el);
		closeMobileMenu();
	};
});

*/