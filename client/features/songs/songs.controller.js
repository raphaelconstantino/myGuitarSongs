export default class SongsController {
	
	constructor ($http) 
	{
		$http.get('/test').success(function(response) {
            console.log('aew');
        });

		this.test = "test";

		this.songsList = [
		{
			name : "Dust in the Wind",
			artist  : "Kansas",
			priority : "High",
			level : "Beginner"
		},
		{
			name : "Here withoud you",
			artist  : "3 Doors Down",
			priority : "High",
			level : "Beginner"
		}
		];
	}

}

SongsController.$inject = ['$http'];