module.exports = function check(str, bracketsConfig) {
  let steck = [];
		let s;
		let steckMini = [];
		for (let i = 0; i < str.length; i++) {
			
			steck.push(str[i]);
			steckMini = steck.slice(steck.length - 2);
			
			for (let i = 0; i < bracketsConfig.length; i++){
				
				if(JSON.stringify(steckMini)==JSON.stringify(bracketsConfig[i])){
					
					steck.pop();
					steck.pop();					
				}
			}			
		}		
		return (steck.length === 0);
}
