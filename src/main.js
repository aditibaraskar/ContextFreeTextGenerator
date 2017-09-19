var generator = new Generator();


function generateText() {
	var text = document.getElementById("inputJson").value;
	if(isJson(text)) {
		var json = JSON.parse(text);
		generator.setRules(json);
		if(json.hasOwnProperty("origin")) {
			var sentence = generator.expand("origin", 1);			
		}
		document.getElementById("outputResult").innerHTML = sentence;
	}else{
		document.getElementById("outputResult").innerHTML = "Invalid JSON";
	}
}

function isJson(json) {
	try {
		JSON.parse(json);
		return true;
	} catch(e) {
		return false;
	}
}
