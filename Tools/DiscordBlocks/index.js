function process() {
	let string = document.getElementById("rawText").submit();
	let chars = string.split('');

	let finalString;

	for (var i = 0; i < chars.length; i++) {
    if (chars[i] == ' ') {
    	finalString += ' ';
    } else {
    	finalString += (":regional_indicator_" + chars[i] + ":"); 
    }
	}

	alert(finalString);

}