function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}

function foo(){
	fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating')
	   .then(response => response.json())
	   .then(games => showGames(games.results));
	   
	  showGames = games => {
	  const gamesDiv = document.querySelector('#my-games');	
		
	  games.forEach(game => {
	  if(getCount(gamesDiv, true) < 30){
		const gameElement = document.createElement('p');
		gameElement.innerHTML = '<b>Name:</b> ' + game.name + ', ' + ' <b>Rating:</b> ' + game.rating + ', ' + ' <b>Number of Tags:</b> ' + game.tags.length;
		console.log(gameElement);
		document.getElementById('loadingmessage').style.display='none';
		gamesDiv.append(gameElement);
		}
	  });
	}
	
}