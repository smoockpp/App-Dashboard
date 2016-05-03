var appDashboardUI = {
	searchTextSize: function() {
		var searchBar = $('.search');
		searchBar.focus(function() {
			if (this.value === 'Search') {
				this.value = '';
			} 
		}).blur(function() {
			if (this.value === '') {
				this.value = 'Search';
			}
		});
	},
	// Creating variables and functions for chart options
	hourlyBtn: $('#option-hourly'),
	dailyBtn: $('#option-daily'),
	weeklyBtn: $('#option-weekly'),
	monthlyBtn: $('#option-monthly'),
	hourlyActive: function() {
		this.hourlyBtn.addClass('active-option');
		this.dailyBtn.removeClass('active-option');
		this.weeklyBtn.removeClass('active-option');
		this.monthlyBtn.removeClass('active-option');
	},
	dailyActive: function() {
		this.dailyBtn.addClass('active-option');
		this.hourlyBtn.removeClass('active-option');
		this.weeklyBtn.removeClass('active-option');
		this.monthlyBtn.removeClass('active-option');
	},
	weeklyActive: function() {
		this.weeklyBtn.addClass('active-option');
		this.dailyBtn.removeClass('active-option');
		this.hourlyBtn.removeClass('active-option');
		this.monthlyBtn.removeClass('active-option');
	},
	monthlyActive: function() {
		this.monthlyBtn.addClass('active-option');
		this.dailyBtn.removeClass('active-option');
		this.weeklyBtn.removeClass('active-option');
		this.hourlyBtn.removeClass('active-option');
	},
	userInput: $('.user-input'),
	availableTags: [
	        "Anita Kelsey",
	      	"Ashley Young",
	      	"Barbara Copec",
	      	"Bryan Adams",
	      	"Catalin Chorchich",
	      	"Chris Brown",
	      	"Elena Kacova",
	      	"Daniel Stromp",
	      	"Frank Sinatra",
	      	"Geoghe Mathei",
	      	"Hahha Montana",
	      	"Ivan Peltekov",
	      	"Jason Brown",
	      	"Kevin Straus",
	      	"Leni Micula",
	      	"Marina Marinova",
	      	"Nikolay Nikolov",
	      	"Oliver Crest",
	      	"Peter Stanchev",
	      	"Ramona Ionut",
	      	"Steven Murray",
	      	"Tatyana Koleva",
	      	"Vasil Penev",
	      	"William Stone",
	      	"Xavier Pericas",
	      	"Yana Hristova",
	      	"Zornitsa Bogoslovova"
	    ],
	autoComplete: function() {
		
	    this.userInput.autocomplete({
	      	source: appDashboardUI.availableTags
	    });
	},
	messageForm: $('.message-form'),
	messageText: $('.message-input'),
	sendButton: $('.submit-button'),
	messageSent: function() {
			var messageSentBox = $('<div class="message-sent-box"></div>');
			var sentToUser = appDashboardUI.userInput.val();
			var messageSentHeading = $('<h3 class="message-sent-heading">' + 
										'Your message has been sent successfully to <br/>' + 
										'<span class="sent-to-user">' +
										sentToUser +
										'</span>' + 
										' !' + 
										'</h3>');
			var form = $('.message-container');
			messageSentBox.insertBefore(form);
			messageSentBox.append(messageSentHeading);

	},
	messageNotSent: function() {
			var messageSentBox = $('<div class="message-sent-box"></div>');
			var messageSentHeading = $('<h3 class="message-sent-heading">' + 
										'Please type in user name and message to send!' + 
										'</h3>');
			var form = $('.message-container');
			messageSentBox.insertBefore(form);
			messageSentBox.append(messageSentHeading);

	},
	sendIfCorrect: function() {
		var input = appDashboardUI.userInput.val();
		var message = appDashboardUI.messageText.val();
		if ( input !== '' && message !== '') {
			appDashboardUI.messageSent();
			appDashboardUI.messageForm[0].reset();
			$('body').animate({
		        scrollTop: $("#message-cont").offset().top - 140
		    }, 500);
		} else if ( input === '' || message === '') {
			appDashboardUI.messageNotSent();
			$('body').animate({
		        scrollTop: $("#message-cont").offset().top - 140
		    }, 500);
		}

	},
	onOffButton1: $('#myonoffswitch1'),
	onOffButton2: $('#myonoffswitch'),
	selectStyled: $('.select-styled'),
	button1States: function() {
		if (this.onOffButton1.attr('checked')) {
			this.onOffButton1.removeAttr('checked');
			
		} else  {
			this.onOffButton1.attr('checked', 'checked');
			
		}
	},
	button2States: function() {
		if (this.onOffButton2.attr('checked')) {
			this.onOffButton2.removeAttr('checked');
			
			
		} else  {
			this.onOffButton2.attr('checked', 'checked');
			
		}
	},
	saveButton: $('#save-btn'),
	loadSettings: function() { 
		var checked1 = JSON.parse(localStorage.getItem('onOffButton1'));
		var checked2 = JSON.parse(localStorage.getItem('onOffButton2'));
		var option = JSON.parse(localStorage.getItem('selectedOption'));
		if (localStorage) {
			document.getElementById("myonoffswitch1").checked = checked1;
			document.getElementById("myonoffswitch").checked = checked2;
			document.getElementById('select-styled').innerHTML = option;
		}
		
	},
	saveSettings: function() {
		var checkbox1 = document.getElementById('myonoffswitch1');
		var checkbox2 = document.getElementById('myonoffswitch');
		var selectOption = document.getElementById('select-styled').innerHTML;
    	localStorage.setItem('onOffButton1', checkbox1.checked);
    	localStorage.setItem('onOffButton2', checkbox2.checked);
    	localStorage.setItem('selectedOption', JSON.stringify(selectOption));
    	console.log(selectOption);
    	this.saveMessage();
	},
	saveMessage: function() {
		var messageSentBox = $('<div class="settings-saved-box"></div>');
		var messageSentHeading = $('<h3 class="settings-saved-heading">' + 
									'Your new settings has been saved successfully!' + 
									'</h3>');
		var form = $('.message-container');
		messageSentBox.insertBefore(form);
		messageSentBox.append(messageSentHeading);

	}
};