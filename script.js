var info = {
	api : 'https://translate.yandex.net/api/v1.5/tr.json/translate',
	key :'trnsl.1.1.20160501T155658Z.8b673c0790c60468.ca0b364473891481bb8315a6d703ed2d4068aa35',
	lang :'en-ru',
};
function translate(){
	//event.preventDefault();
	var text = encodeURIComponent(document.getElementsByTagName('input')[0].value);
	var url = info.api+'?key='+info.key+'&lang='+info.lang;//+'&text='+text;
	var req = new XMLHttpRequest();
	req.open('POST', url, false);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	//req.setRequestHeader('Content-Length', text.length);
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
	var response = document.getElementById('response');
	response.innerHTML = text;
	//console.log(text);
}
//document.forms[0].elements[0].value;
document.addEventListener('DOMContentLoaded', function(){
	var button = document.getElementsByTagName('input')[1];
	button.addEventListener('click', translate );
	
	//button.addEventListener('click', function(e){e.preventDefault();} );
});
