$( document ).ready( function() {
	var streamers = [ "freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas" ];

	$.each( streamers, function( i, streamer ) {
		var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamer;
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function( response ) {
				// console.log(response);
				putContent( streamer, response );
			}
		});
	});
});

$( "#all").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#1A237E");

});

$( "#online").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#004D40");
});

$( "#offline").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#880E4F");
});

function putContent( streamer, response )
{
	var status;
	var html;
	var cls;
	var logo;
	var name;

	if ( response.stream === null ) {
		status = "offline";
		cls = "alert alert-danger";
		logo = "http://simpleicon.com/wp-content/uploads/tv.png";
		name = streamer;

	} else {
		status = "online";
		cls = "alert alert-success";
		logo = response.stream.channel.logo;
		name = response.channel ? response.channel.display_name : streamer;
	}

	var channelUrl = "https://www.twitch.tv/" + streamer;

	html = "<div class='row'>" +
						"<div class='" + cls + "'>" +
							"<div class='channel-img'><img src='" + logo + "' class='img-rounded'/></div>" +
							"<div class='channel-name'>" + name + "</div><a href='" + channelUrl +"' target='_blank'><div class='channel-status'>"+ status + "</div></a>" +
						"</div>" +
					"</div>"  ;


	$("#list").append( html );
}
