function init(){

	var a1 = document.getElementsByTagName('a')[0];
	var a2 = document.getElementsByTagName('a')[1];
	var blockResponse = document.getElementById('response');
	var blockTop = document.getElementById('top');
	var blockTranslate = document.getElementById('translate');
	var button = document.getElementsByTagName('input')[0];

	button.addEventListener('click', translate );
	a1.addEventListener('click', topShow );
	a2.addEventListener('click', translateShow );

}



function translate(){
	var info = {
	api : 'https://translate.yandex.net/api/v1.5/tr.json/translate',
	key :'trnsl.1.1.20160501T155658Z.8b673c0790c60468.ca0b364473891481bb8315a6d703ed2d4068aa35',
	lang :'en-ru',
	};

	var text = encodeURIComponent(document.getElementsByTagName('textarea')[0].value);
	if(text=='')return;

	response.innerHTML = 'Перевод...';

	var url = info.api+'?key='+info.key+'&lang='+info.lang;//+'&text='+text;
	var req = new XMLHttpRequest();

	req.open('POST', url, false);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	req.onreadystatechange = function () {
		if(req.readyState == 4) {
    		if (req.status != 200) {
  				alert( req.status + ': ' + req.statusText );
			}
			if (req.status == 200){
				text = JSON.parse(req.responseText);
				text = text.text;
  				obrab(text); // responseText -- текст ответа.
  			}
		}
	}
	req.send('text='+text);
}

function obrab(text){
	
	blockResponse.innerHTML = text;
	//console.log(text);
}

function topShow(){
	event.preventDefault();
	//blockTop
	blockTranslate.style.display = 'none';
	blockTop.style.display = 'block';
	console.log('a1');
}

function translateShow(){
	event.preventDefault();
	//blockTranslate
	blockTop.style.display = 'none';
	blockTranslate.style.display = 'block';
	console.log('a2');
}
document.addEventListener('DOMContentLoaded', init);
