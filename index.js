//--------------------------------------------
//
// Laserdisc Fullscreen
//
//--------------------------------------------


module.exports = function(player, parent, targetRatio){

	//make sure player exists
	if (!player){
		console.log('%c No player element provided', 'background: rgba(255,0,0,1); color: rgba(255,0,255,1);');
		return null;
	}
	//use container if provided. otherwise, use window
	var container = parent || window;

	//ratio settings
	var ratio = targetRatio || 16 / 9;


	//--------------------------------------------
	// Set width + height
	//

	var width = container.innerWidth;
	var height = container.innerHeight;

	if (!width || width === 0){
		width = container.clientWidth;
	}

	if (!height || height === 0){
		width = container.clientHeight;
	}


	var pWidth = width;
	var pHeight = pWidth / ratio;

	

	//--------------------------------------------
	// Gap underneath
	//
	if (width / ratio < height){
		pWidth = Math.ceil(height * ratio);

		player.style.position = 'absolute';
		player.style.width = pWidth + 'px';
		player.style.height = height + 'px';
		player.style.top = 0;
		player.style.left = (width - pWidth) / 2 + 'px';
	}

	

	//--------------------------------------------
	// Gap on side
	//
	else {
		pHeight = Math.ceil(width / ratio);

		player.style.position = 'absolute';
		player.style.width = width + 'px';
		player.style.height = pHeight + 'px';
		player.style.left = 0;
		player.style.top = (height - pHeight) / 2 + 'px';
	}		
}



