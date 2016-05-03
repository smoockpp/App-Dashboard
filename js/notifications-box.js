var notificationsBox = {
	isOpened: false,
	notificationsIcon: $('.notifications'),
	rowHeader: $('.row-header'),
	membersActivity: $('.members-activity'),
	notificationsDiv: $('<div class="notifications-box"></div>'),
	notificationsHeading: $('<h4 class="notifications-heading">Notifications</h4>'),
	notificationsList: $('<ul class="notifications-list"></ul>'),

	appendList: function() {
		this.isOpened = true;
		this.notificationsDiv.insertAfter(this.rowHeader);
		this.notificationsDiv.append(this.notificationsHeading);
		this.membersActivity.each(function () {
			$(this).clone(true).insertAfter(notificationsBox.notificationsHeading);
		});
	}
}

notificationsBox.notificationsIcon.click(function(e) {
	if (notificationsBox.isOpened === false) { 
		notificationsBox.appendList();
		notificationsBox.notificationsIcon.addClass('no-dot');

		e.stopPropagation();

	} else {
		notificationsBox.notificationsDiv.empty();
		notificationsBox.isOpened = false;
		notificationsBox.notificationsIcon.addClass('no-dot');
	}
	$(document).click(function() {
		notificationsBox.notificationsDiv.empty();
		notificationsBox.isOpened = false;
		notificationsBox.notificationsIcon.addClass('no-dot');
	});
		notificationsBox.notificationsDiv.click(function(e) {
			notificationsBox.notificationsIcon.addClass('no-dot');
		e.stopPropagation();
	});
});