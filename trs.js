var yatr = {
	api : 'https://translate.yandex.net/api/v1.5/tr.json/detect',
	key :'trnsl.1.1.20160501T155658Z.8b673c0790c60468.ca0b364473891481bb8315a6d703ed2d4068aa35',
	lang : 'en-ru',
	var url = this.api+'?key='+this.key+'&lang='+this.lang+'&text='+text;


	translate : function(text, callback){
		var req = xmlHttpRequest();
		req.open('GET', url, true);
		req.onreadychange = function(){
			if(req.redyState == 4 && httpRequest.status === 200){
					text = JSON.parse(req.responseText);
					callback(text);
			}
		}
		req.send(null);
	},
	log = function(text){
	console.log(text);
	}
}

