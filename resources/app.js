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
	var cls;
	var logo;

	if ( response.stream == null ) {
		status = "offline";
		cls = "alert alert-danger";
		logo = "https://image.freepik.com/free-vector/old-television-set-icon_23-2147501665.jpg";
	} else {
		status = "online";
		cls = "alert alert-success";
		logo = response.channel.logo ;
	} 

	html = "<div class='" + cls + "'>" +
				"<img src='" + logo + "' height='50' width='50'/>" + 
				"<p>" + streamer + status + "</p></div>" ;

	$("#list").append( html );
}
