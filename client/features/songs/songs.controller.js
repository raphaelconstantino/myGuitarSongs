export default class SongsController {
	
	constructor ($http) 
	{
		var oThis = this;
		$http.get('http://localhost:3000/fetchSongs').success(function(response) {
            oThis.songsList = response.songs;
        });		
	}

	insertSong ()
	{
		
	}

}

SongsController.$inject = ['$http'];