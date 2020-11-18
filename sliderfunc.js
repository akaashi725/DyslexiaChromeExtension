function ShowSliderValue(sVal){
	var obValueView = document.getElementById("slider_value_view");
	obValueView.innerHTML = sVal
}

var c = chrome.fontSettings.getDefaultFontSize();
var a = document.getElementById("fontsizeslider");
var b = a.value;
a.addEventListener('click',function(){
	chrome.fontSettings.setMinimumFontSize({pixelSize:parseInt(b)})
});
