// Acquiring access token for individual instagram users
console.log(window.location.href);
var url = window.location.href;
var index = url.indexOf("access_token=");
var accessToken = url.substr(index+13);

// instagram user profile data
var instagram_users = [];
var user = 'https://api.instagram.com/v1/users/self/?access_token=' + accessToken + '&callback=?';

// requesting for user profile data on instagram e.g. userid, profile picture
$.ajax({
	type: 'GET',
	url: user,
	dataType: 'jsonp',
	success: function(instagramProfile){
		console.log(instagramProfile);
		localStorage.instagramProfile = instagramProfile;
		//minterAddAcct(instagramProfile);
	},
	error: function(err){
		console.log(err);
	}
});