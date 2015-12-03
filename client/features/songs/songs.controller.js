import Song from './song.model';

export default class SongsController {
	
	constructor ($http) 
	{
		var oThis = this;
		oThis.$http = $http;
		
		oThis.song = new Song();
		oThis.$http.get('http://localhost:3000/fetchSongs').success(function(response) {
            oThis.songsList = response.songs;
        });		
	}

	insertSong ()
	{

		var oThis = this;
		oThis.$http.post('http://localhost:3000/insertSong', oThis.song).success(function(oReturn) {
	        oThis.songsList.push(oReturn);
            oThis.song = new Song();
	    });
	}

}

SongsController.$inject = ['$http'];