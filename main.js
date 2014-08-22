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
  	$('.sticker').css('height', '150%');
  	$('.sticker').css('width', '150%');
  	$('#changecubestickerless').css('display', 'none');
  	$('#changecubeblack').css('display', 'inline-block');
  });
  $('#changecubeblack').click(function(){
  	$('.sticker').css('height', '98%');
  	$('.sticker').css('width', '98%');
  	$('#changecubestickerless').css('display', 'inline-block');
  	$('#changecubeblack').css('display', 'none');
  });
});
