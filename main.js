$(document).ready(function(){
	window.cube = new ERNO.Cube();
	cube.position.y = 0;
	$('#changecubeblack').css('display', 'none');
  var container = $( '#containerforcube' );
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubestickerless').click(function(){
  	$('.sticker').css('height', '102%');
  	$('.sticker').css('width', '102%');
  	$('.face').css('height', '.9em');
  	$('.face').css('width', '.9em');
  	$('#changecubestickerless').css('display', 'none');
  	$('#changecubeblack').css('display', 'inline-block');
  });
  $('#changecubeblack').click(function(){
  	$('.sticker').css('height', '98%');
  	$('.sticker').css('width', '98%');
  	$('.face').css('height', '1em');
  	$('.face').css('width', '1em');
  	$('#changecubestickerless').css('display', 'inline-block');
  	$('#changecubeblack').css('display', 'none');
  });
  $(document).keydown(function(){
  	var rand = Math.floor(Math.random()*500);
  	if(rand > 1 && rand < 10){
  		cube.cubelets.forEach(function(cubelet){
  			if(cubelet.type === "edge"){
  				
  			}
  		});
  	}
  });
});
