$(document).ready(function() {
	if (localStorage.onOffButton1 || localStorage.onOffButton2 || localStorage.selectOption) {
		appDashboardUI.loadSettings();
	} 
});

appDashboardUI.searchTextSize();

appDashboardUI.userInput.focus(function() {
	appDashboardUI.autoComplete();
});

appDashboardUI.sendButton.click(function(e) {
	e.preventDefault();
	
	setTimeout(function(){
	  $('.message-sent-box').remove();
	 },5000);
	 appDashboardUI.sendIfCorrect();
});

appDashboardUI.onOffButton1.click(function() {
	appDashboardUI.button1States();
});
appDashboardUI.onOffButton2.click(function() {
	appDashboardUI.button2States();
});



appDashboardUI.saveButton.click(function(e) {
	e.preventDefault();
	appDashboardUI.saveSettings();
	setTimeout(function(){
	  $('.settings-saved-box').remove();
	 },5000);
	 
});


















// Local storage
