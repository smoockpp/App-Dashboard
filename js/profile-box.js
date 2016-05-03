var profileBox = {
	isOpened: false,
	profileIcon: $('.profile'),
	rowHeader: $('.row-header'),
	profileDiv: $('<div class="profile-box"></div>'),
	profileHeading: $('<h4 class="profile-heading">My Profile</h4>'),
	viewProfile: $('<h3 class="user-profile">Nikolay Nikolov<br/><span class="view-profile">View profile</span></h3>'),
	accountSettings: $('<h3 class="user-profile">Account settings</h3>'),
	signOut: $('<h3 class="user-profile">Sign Out</h3>'),
	appendBox: function() {
		this.isOpened = true;
		this.profileDiv.insertAfter(this.rowHeader);
		this.profileDiv.append(this.profileHeading);
		this.viewProfile.insertAfter(this.profileHeading);
		this.accountSettings.insertAfter(this.viewProfile);
		this.signOut.insertAfter(this.accountSettings);
	}
}

profileBox.profileIcon.click(function(e) {
	if (profileBox.isOpened === false) { 
		profileBox.appendBox();
		e.stopPropagation();

	} else {
		profileBox.profileDiv.empty();
		profileBox.isOpened = false;
	}
	$(document).click(function() {
		profileBox.profileDiv.empty();
		profileBox.isOpened = false;
	});
		profileBox.profileDiv.click(function(e) {
		e.stopPropagation();
	});
});