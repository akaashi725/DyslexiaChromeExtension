/*
document.addEventListener('DOMContentReady', function(){
	document.getElementById('firstbutton').addEventListener('click',alert("되기는 함! 유감"))
})*/
//document.getElementById('firstbutton').addEventListener('click',alert("되기는 함! 유감"))


var jukyong = document.getElementById('applybutton');
jukyong.addEventListener('click', function(){
	chrome.fontSettings.setFont(
		{genericFamily: 'sansserif',  fontId:'궁서'}
	)}, false
);

var chiso = document.getElementById('quitbutton');
chiso.addEventListener('click',function(){
	chrome.fontSettings.clearFont({
		genericFamily: 'sansserif'
	})
})