$( document ).ready( function() {
	var streamers = [ "freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas" ];

	$.each( streamers, function( i, streamer ) {
		var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamer;
		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function( response ) {
				putContent( streamer, response );
			}
		});
	});
});

$( "#all").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#1A237E");

		$( ".alert-danger").show();
		$( ".alert-success").show();
});

$( "#online").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#004D40");

		$( ".alert-danger").hide();
		$( ".alert-success").show();
});

$( "#offline").on( "click", function( event ){
		event.preventDefault();

		$( "#list" ).css( "background-color", "#880E4F");

		$( ".alert-success").hide();
		$( ".alert-danger").show();
});

function putContent( streamer, response )
{
	var status;
	var html;
	var cls;
	var logo;
	var name;
	var game;
	var channelStatus;

	if ( response.stream === null ) {
		status = "offline";
		cls = "alert alert-danger";
		logo = "http://simpleicon.com/wp-content/uploads/tv.png";
		name = streamer;
		description = "";

	} else {
		status = "online";
		cls = "alert alert-success";
		logo = response.stream.channel.logo;
		name = response.channel ? response.channel.display_name : streamer;
		game = response.stream.channel.game;
		channelStatus = response.stream.channel.status;
		description = "(" + game + " : " + channelStatus + " )";
	}

	var channelUrl = "https://www.twitch.tv/" + streamer;

	html = "<div class='row'>" +
						"<div class='" + cls + "'>" +
							"<div class='channel-img'><img src='" + logo + "' class='img-rounded'/></div>" +
							"<div class='channel-name'>" + name + description + "</div><a href='" + channelUrl +"' target='_blank'><div class='channel-status'>"+ status + "</div></a>" +
						"</div>" +
					"</div>"  ;


	$("#list").append( html );
}
