$( document ).ready( function() {
	var streamers = [ "freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas" ];

	$.each( streamers, function( i, streamer ) {
		var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamer;
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function( response ) {
				console.log(response);
				putContent( streamer, response );
			}
		});
	});
});

function putContent( streamer, response )
{
	var status;
	var html;

	if ( response.stream == null ) {
		status = "offline";
	} else {
		status = "online";
	} 

	html = "<p>" + streamer + status + "</p>";

	$("#list").append( html );
}