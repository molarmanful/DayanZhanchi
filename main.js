$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  $('html').css('display', 'none').delay(500).fadeIn('slow');
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
});
function pop(){
	var number;
	if($('.face').css('width') == '.88em'){
		number = 100;
	} else {
		number = 10000;
	}
	var random = Math.floor(Math.random() * number);
	if(random > 1 && random < 50){
		cube.cubelets.forEach( function(cubelet){
			var tmp = {
				x: cubelet.position.x,
				y: cubelet.position.y,
				z: cubelet.position.z
			}
			var distance = 1000;
			cubelet.position.set(
				cubelet.addressX * distance,
				cubelet.addressY * distance,
				cubelet.addressZ * distance
			)
			new TWEEN.Tween( cubelet.position )
				.to({
					x: 1000,
					y: 1000,
					z: 1000,
	
				}, 3000 )
				.easing( TWEEN.Easing.Quintic.Out )
				.onComplete( function(){
					cubelet.isTweening = false;
				})
				.start( cube.time )
			cubelet.isTweening = true;
		});
		$('#demotext').text('YOUR CUBE HAS POPPED!').css('color','red');
		cube.twist('rmdef');
	}
}
