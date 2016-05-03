var appAlert = {
	searchBar: $('.search-container'),
	alertDiv : $('<div class="alert-box"></div>'),
	alertMessage : $('<p class="alert-msg"></p>'),
	alertType: $('<span class="alert-span">Alert</span>'),
	srcAttr: 'icons/icon-close.png',
	altAttr: 'Close button',
	imageTag : $('<img class="close-btn">'),
	message : 'Please remember that all changes made in settings will be saved instantly.',

	createAlert : function() {
		this.alertDiv.insertAfter(this.searchBar);
		this.alertDiv.append(this.alertMessage);
		this.alertMessage.append(this.alertType);
		this.alertMessage.append(this.message);	
		this.alertMessage.append(this.imageTag);
		this.imageTag.attr({src: this.srcAttr,
							alt: this.altAttr });
	},
	closeAlert : function() {
		appAlert.alertDiv.fadeOut('fast');

	}

}

appAlert.createAlert();

appAlert.imageTag.click(function() {
	appAlert.closeAlert();
});