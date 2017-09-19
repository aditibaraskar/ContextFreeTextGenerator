class Generator {
  constructor() {
    this.maxDepth = -1;
  }
  
  setRules(json) {
    this.ruleMap = json;
  }
  
  isNonTerminal(key) {
    return key in this.ruleMap;
  }
  
  makeStructuredToken(subtoken) {
      var defaultSubtoken = {
        "text": subtoken,
        "isTerminal": true
      };
      
      if(subtoken[0] === '{' && subtoken[subtoken.length-1] === '}') {
        var keyToken = subtoken.substring(1, subtoken.length-1);
        if(this.isNonTerminal(keyToken)) {
          defaultSubtoken.text = subtoken.substring(1, subtoken.length-1); 
          defaultSubtoken.isTerminal = false;
        };
      }
      return defaultSubtoken;
  }
  
  splitIntoSubtokens(token) {
    var re = /(\{.*?\})/;
    var subtokens = token.split(re).filter(Boolean);
    return subtokens.map(this.makeStructuredToken.bind(this));
  }
  
  expand(token, depth) {
    if(depth === this.maxDepth) {
      return "";
    }
    var randomIndex = Math.floor((Math.random() * this.ruleMap[token].length));
    var rhs = this.ruleMap[token][randomIndex];
    var subtokens = this.splitIntoSubtokens(rhs); 
    var sentence = "";
    for (var subtoken in subtokens) {
      if(subtokens[subtoken].isTerminal) {
        sentence += subtokens[subtoken].text;
      } else {
        sentence += this.expand(subtokens[subtoken].text, depth + 1);
      }
    }
    return sentence;
  }
}