var maxDepth = -1;

function expand(json, token, depth) {
  if(depth === maxDepth) {
    return "";
  }
  var randomIndex = Math.floor(Math.random() * json[token].length);
  var rhs = json[token][randomIndex];
  var subtokens = rhs.split("");
  var sentence = "";
  for (var subtoken in subtokens) {
    if(subtokens[subtoken] in json){
      sentence += expand(json,subtokens[subtoken], depth + 1);
    } else {
      sentence += subtokens[subtoken];
    }
  }
  return sentence;
}

function generateText() {
	var text = document.getElementById("inputJson").value;
	if(isJson(text)) {
		var json = JSON.parse(text);
		if(json.hasOwnProperty("origin")) {
			var sentence = expand(json,"origin",1);			
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
