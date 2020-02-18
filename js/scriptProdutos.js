let y = 0;
let checkScrollPos = 0;
let bodyBGimgs = document.querySelector('.fullContainer');
let headerMobileBGOne = document.querySelector('.headerMobileBGOne');
let headerMobileBGTwo = document.querySelector('.headerMobileBGTwo');
// let randomNum = Math.floor(Math.random() *13);
let randomNum = 0;
let secs = new Date().getSeconds();

switch (true) {
	case (secs >= 0 && secs <= 5):
		randomNum = 1;
		break;
	case (secs > 5 && secs <= 10):
		randomNum = 8;
		break;
	case (secs > 10 && secs <= 15):
		randomNum = 2;
		break;
	case (secs > 15 && secs <= 20):
		randomNum = 3;
		break;
	case (secs > 20 && secs <= 25):
		randomNum = 4;
		break;
	case (secs > 25 && secs <= 30):
		randomNum = 5;
		break;
	case (secs > 30 && secs <= 35):
		randomNum = 6;
		break;
	case (secs > 35 && secs <= 40):
		randomNum = 7;
		break;
	case (secs > 40 && secs <= 45):
		randomNum = 8;
		break;
	case (secs > 45 && secs <= 50):
		randomNum = 9;
		break;
	case (secs > 50 && secs <= 55):
		randomNum = 10;
		break;
	case (secs > 55 && secs <= 60):
		randomNum = 11;
		break;
	default:
		randomNum = 0;
		break;
};

let slide = 'bodyBG' + randomNum + '.jpg';
bodyBGimgs.style.backgroundImage = 'url(img/' + slide + ')';

var x = window.matchMedia("(min-width: 900px)");

if(x.matches) {

	let produto1 = document.querySelector('#pgProdutoTitleBtn1');
	let produto2 = document.querySelector('#pgProdutoTitleBtn2');
	let produto3 = document.querySelector('#pgProdutoTitleBtn3');
	let produto4 = document.querySelector('#pgProdutoTitleBtn4');
	let produto5 = document.querySelector('#pgProdutoTitleBtn5');
	let produto1Texts = document.querySelector('#pgProdutoText1');
	let produto2Texts = document.querySelector('#pgProdutoText2');
	let produto3Texts = document.querySelector('#pgProdutoText3');
	let produto4Texts = document.querySelector('#pgProdutoText4');
	let produto5Texts = document.querySelector('#pgProdutoText5');
	let pgProdutoTextsWrapper = document.querySelector('.pgProdutoTextsWrapper');
	produto1.style.cursor = 'default';
	document.querySelector('.produtosMobileWrapper').style.display = 'none';

	document.querySelector('.pgProdutosMailingSection1').addEventListener('click', function(el) {
		if(el.target.id == 'pgProdutoTitleBtn1') {
			produto1.style.cursor = 'default';
			produto2.style.cursor = 'pointer';
			produto3.style.cursor = 'pointer';
			produto4.style.cursor = 'pointer';
			produto5.style.cursor = 'pointer';
			produto1.style.backgroundColor = '#fff';
			produto2.style.backgroundColor = 'var(--greenColor)';
			produto3.style.backgroundColor = 'var(--greenColor)';
			produto4.style.backgroundColor = 'var(--greenColor)';
			produto5.style.backgroundColor = 'var(--greenColor)';
			produto1Texts.style.display = 'grid';
			produto2Texts.style.display = 'none';
			produto3Texts.style.display = 'none';
			produto4Texts.style.display = 'none';
			produto5Texts.style.display = 'none';
			pgProdutoTextsWrapper.style.alignSelf = 'start';
		} else if(el.target.id == 'pgProdutoTitleBtn2') {
			produto1.style.cursor = 'pointer';
			produto2.style.cursor = 'default';
			produto3.style.cursor = 'pointer';
			produto4.style.cursor = 'pointer';
			produto5.style.cursor = 'pointer';
			produto2.style.borderTop = 'none';
			produto2.style.backgroundColor = '#fff';
			produto1.style.backgroundColor = 'var(--greenColor)';
			produto3.style.backgroundColor = 'var(--greenColor)';
			produto4.style.backgroundColor = 'var(--greenColor)';
			produto5.style.backgroundColor = 'var(--greenColor)';
			produto2Texts.style.display = 'grid';
			produto1Texts.style.display = 'none';
			produto3Texts.style.display = 'none';
			produto4Texts.style.display = 'none';
			produto5Texts.style.display = 'none';
			pgProdutoTextsWrapper.style.alignSelf = 'start';
		} else if(el.target.id == 'pgProdutoTitleBtn3') {
			produto1.style.cursor = 'pointer';
			produto2.style.cursor = 'pointer';
			produto3.style.cursor = 'default';
			produto4.style.cursor = 'pointer';
			produto3.style.borderTop = 'none';
			produto3.style.backgroundColor = '#fff';
			produto2.style.backgroundColor = 'var(--greenColor)';
			produto1.style.backgroundColor = 'var(--greenColor)';
			produto4.style.backgroundColor = 'var(--greenColor)';
			produto3Texts.style.display = 'grid';
			produto1Texts.style.display = 'none';
			produto2Texts.style.display = 'none';
			produto4Texts.style.display = 'none';
			pgProdutoTextsWrapper.style.alignSelf = 'start';
		}  else if(el.target.id == 'pgProdutoTitleBtn4') {
			produto1.style.cursor = 'pointer';
			produto2.style.cursor = 'pointer';
			produto3.style.cursor = 'pointer';
			produto4.style.cursor = 'default';
			produto5.style.cursor = 'default';
			produto4.style.borderTop = 'none';
			produto4.style.backgroundColor = '#fff';
			produto2.style.backgroundColor = 'var(--greenColor)';
			produto3.style.backgroundColor = 'var(--greenColor)';
			produto1.style.backgroundColor = 'var(--greenColor)';
			produto5.style.backgroundColor = 'var(--greenColor)';
			produto4Texts.style.display = 'grid';
			produto1Texts.style.display = 'none';
			produto2Texts.style.display = 'none';
			produto3Texts.style.display = 'none';
			produto5Texts.style.display = 'none';
			pgProdutoTextsWrapper.style.alignSelf = 'end';
		}  else if(el.target.id == 'pgProdutoTitleBtn5') {
			produto1.style.cursor = 'pointer';
			produto2.style.cursor = 'pointer';
			produto3.style.cursor = 'pointer';
			produto4.style.cursor = 'pointer';
			produto5.style.cursor = 'default';
			produto5.style.borderTop = 'none';
			produto5.style.borderBottom = '1px solid var(--greenColor)';
			produto5.style.borderRight = '1px solid var(--greenColor)';
			produto5.style.backgroundColor = '#fff';
			produto1.style.backgroundColor = 'var(--greenColor)';
			produto2.style.backgroundColor = 'var(--greenColor)';
			produto3.style.backgroundColor = 'var(--greenColor)';
			produto4.style.backgroundColor = 'var(--greenColor)';
			produto5Texts.style.display = 'grid';
			produto1Texts.style.display = 'none';
			produto2Texts.style.display = 'none';
			produto3Texts.style.display = 'none';
			produto4Texts.style.display = 'none';
			pgProdutoTextsWrapper.style.alignSelf = 'end';
		}
	});
} else {
	document.querySelector('.pgProdutosMailingSection1').style.display = 'none';
	document.querySelector('.produtosMobileWrapper').style.display = 'block';
}
