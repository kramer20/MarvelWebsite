$( document ).ready(function() {
    console.log( "ready!" );

//anytime pull info from
    $.ajax({
  	url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789',
  	success: function successHandler(taco) {

    //function to get random number w/in the range
    function getRandomArbitrary(max) {
    	return Math.floor(Math.random() * max-1) + 1 ;
	}

//define what goes onto page
	var characters = taco.data.results;


//loop that writes to HTML
    characters.forEach(function (character){
    	var characterPicture = character.thumbnail.path+"."+character.thumbnail.extension;
    	//$(".characterRow").append('<div class="col-lg-4 feature leftTop"><div class="box topLeft"><img class="characterImage" src='+characterPicture+'></div><h3>'+character.name+'</h3></div>');

    });


  }
});

});   