$( document ).ready(function() {
    console.log( "ready!" );

//anytime pull info from
    $.ajax({
  	url: 'https://marvelapi.herokuapp.com/characters',
  	success: function successHandler(taco) {

    //function to get random number w/in the range
    function getRandomArbitrary(max) {
    	return Math.floor(Math.random() * max-1) + 1 ;
	}

//define what goes onto page
	var characters = taco.data.results;
	var character1 = getRandomArbitrary(characters.length);
	var character2 = getRandomArbitrary(characters.length);
	var character3 = getRandomArbitrary(characters.length);


//setting equal to the object we want to grab
    character1 = characters[character1];
    character2 = characters[character2];
    character3 = characters[character3];
//clears out the array
    characters = [];
//creates new array that pushes characters through
    characters.push(character1);
    characters.push(character2);
    characters.push(character3);

//loop that writes to HTML
    characters.forEach(function (character){
    	var characterPicture = character.thumbnail.path+"."+character.thumbnail.extension;
    	$(".characterRow").append('<div class="col-lg-4 feature leftTop"><div class="box topLeft"><img class="characterImage" src='+characterPicture+'></div><h3>'+character.name+'</h3></div>');


    });
    } 
});


    //comic function
$.ajax({
    url: 'https://marvelapi.herokuapp.com/comics',
    success: function successHandler(taco) {

    //function to get random number w/in the range
    function getRandomArbitrary(max) {
        return Math.floor(Math.random() * max) + 1 ;
    }

//define what goes onto page
    var comics = taco.data.results;
    var comic1 = getRandomArbitrary(comics.length);
    var comic2 = getRandomArbitrary(comics.length);
    var comic3 = getRandomArbitrary(comics.length);


//setting equal to the object we want to grab
    comic1 = comics[comic1];
    comic2 = comics[comic2];
    comic3 = comics[comic3];
//clears out the array
    comics = [];
//creates new array that pushes characters through
    comics.push(comic1);
    comics.push(comic2);
    comics.push(comic3);

//loop that writes to HTML
    comics.forEach(function (comic){
        var comicImage = comic.thumbnail.path+"."+comic.thumbnail.extension;
        $(".comicRow").append('<div class="col-lg-4 feature leftBottom"><div class="box bottomLeft"><img class="comicImage" src='+comicImage+'></div><h3>'+comic.title+'</h3></div>');

    });

  }
});
 console.log();
});
