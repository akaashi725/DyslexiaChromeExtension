function ChangeFontSize(this){
	chrome.fontSettings.setMinimumFontSize({parseInt(this.value)})
}