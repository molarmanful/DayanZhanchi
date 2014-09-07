$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  var edge = 0;
  var corner = 0;
  var center = 0;
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  $('#reassemble').css('display', 'none');
  $('#three').css('display', 'none');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  cube.twistDuration = 200;
  $('#changecubeblack').css('display', 'none');
  $('#changecubestickerless').css('display', 'none');
  $('#changecubenorm').css('display', 'none');
  var container = $('#containerforcube');
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubeloose').click(function(){
  	$('.sticker').css('height', '100%');
  	$('.sticker').css('width', '100%');
  	$('.face').css('height', '.88em');
  	$('.face').css('width', '.88em');
  	$('#changecubeloose').css('display', 'none');
  	$('#changecubenorm').css('display', 'inline-block');
  });
  $('#changecubenorm').click(function(){
  	$('.sticker').css('height', '98%');
  	$('.sticker').css('width', '98%');
  	$('.face').css('height', '1em');
  	$('.face').css('width', '1em');
  	$('#changecubeloose').css('display', 'inline-block');
  	$('#changecubenorm').css('display', 'none');
  });
  $('#changecubewhite').click(function(){
  	$('.face').css('background-color', 'white');
  	$('.faceIntroverted').css('background-color', 'white');
  	$('#changecubeblack').css('display', 'inline-block');
  	$(this).css('display', 'none');
  });
  $('#changecubeblack').click(function(){
  	$('.face').css('background-color', 'black');
  	$('.faceIntroverted').css('background-color', 'black');
  	$('#changecubewhite').css('display', 'inline-block');
  	$(this).css('display', 'none');
  });
  $(document).keydown(pop);
  $(document).mousedown(pop);
  $('#pop').click(function(){
  	cube.edges.setRadius(100);
	cube.corners.setRadius( 100 );
	cube.centers.setRadius( 100 );
	$(this).css('display', 'none');
	$('#reassemble').css('display', 'inline-block');
  });
  $('#reassemble').click(function(){
  	cube.edges.setRadius(edge);
	cube.corners.setRadius(corner);
	cube.centers.setRadius(center);
	$(this).css('display', 'none');
	$('#pop').css('display', 'inline-block');
  });
  $('#two').click(function(){
  	cube.edges.setRadius(-140);
	cube.corners.setRadius(-60);
	cube.centers.setRadius(-140);
	$('.cube').css('height', '150%');
	$('.cube').css('width', '150%');
	$(this).css('display', 'none');
	$('#three').css('display', 'inline-block');
	$('#pop').fadeOut('slow');
	$('#reassemble').fadeOut('slow');
  });
  $('#three').click(function(){
  	cube.edges.setRadius(0);
  	cube.centers.setRadius(0);
  	cube.corners.setRadius(0);
  	$('.cube').css('height', '100%');
  	$('.cube').css('width', '100%');
	$(this).css('display', 'none');
	$('#two').css('display', 'inline-block');
	$('#pop').fadeIn('slow');
  });

});
function pop(){
	var number;
	if($('.face').css('width') == '.88em'){
		number = 50;
	} else {
		number = 10000;
	}
	var random = Math.floor(Math.random() * number);
	if(random > 1 && random < 50){
		var edgear = [2, 4, 6, 8, 10, 12, 15, 17, 19, 21, 23, 25];
		var randedge = Math.floor(Math.random() * edgear.length);
		cube.hasAddress(edgear[randedge]).setRadius(1000);
		cube.hasAddress(edgear[randedge]).setRadius(1000);
		$('#demotext').text('YOUR CUBE HAS POPPED!').css('color', 'red');
	}
}
