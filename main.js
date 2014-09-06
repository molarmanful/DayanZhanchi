$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  $('#reassemble').css('display', 'none');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  $('#changecubeblack').css('display', 'none');
  $('#changecubenorm').css('display', 'none');
  var container = $( '#containerforcube' );
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
  	$('#changecubewhite').css('display', 'none');
  });
  $('#changecubeblack').click(function(){
  	$('.face').css('background-color', 'black');
  	$('.faceIntroverted').css('background-color', 'black');
  	$('#changecubewhite').css('display', 'inline-block');
  	$('#changecubeblack').css('display', 'none');
  });
  $(document).keydown(pop);
  $(document).mousedown(pop);
  $('#pop').click(function(){
  	cube.edges.setRadius( 100 );
	cube.corners.setRadius( 100 );
	$(this).css('display', 'none');
	$('#reassemble').css('display', 'inline-block');
  });
  $('#reassemble').click(function(){
  	cube.edges.setRadius( 0 );
	cube.corners.setRadius( 0 );
	$(this).css('display', 'none');
	$('#pop').css('display', 'inline-block');
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
		cube.edges.setRadius( 100 );
		cube.corners.setRadius( 100 );
		$('#demotext').text('YOUR CUBE HAS POPPED!').css('color', 'red');
	}
}
