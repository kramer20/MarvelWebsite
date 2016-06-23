$( document ).ready(function() {
    console.log( "ready!" );

//anytime pull info from
    $.ajax({
  	url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
  	success: function successHandler(taco) {

    //function to get random number w/in the range
    function getRandomArbitrary(max) {
    	return Math.floor(Math.random() * max-1) + 1 ;
	}

//define what goes onto page
  var comics = taco.data.results;

$("body").on("click",".moreInfo", function(){

    var dropDown = $(this).parent().find(".moreInfoDiv");
    dropDown.toggle();
});



//loop that writes to HTML
    comics.forEach(function (comic){
    	var comicImage = comic.thumbnail.path+"."+comic.thumbnail.extension;
    	$(".comicTwoRow").append('<div class="col-lg-4 comic leftTop"><div class="column secondLeft"><img class="comicImage" src='+comicImage+'></div><h3>'+comic.title+'</h3><div class="moreInfo"><button class="btn btn-primary moreInfo" type="button">More Info</button></div><div class="collapse moreInfoDiv" id="collapseExample"><div class="card card-block"><p class="comicDescription">'+comic.description+'</p></div></div>');

    });


  }
});

});   