$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
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
	cube.cubelets.forEach( function( cubelet ){
		var tmp = {
			x: cubelet.position.x,
			y: cubelet.position.y,
			z: cubelet.position.z
		}
		var distance = 1000
		cubelet.position.set(
			cubelet.addressX * distance,
			cubelet.addressY * distance,
			cubelet.addressZ * distance
		)
		var delay
		if( cubelet.type === 'edge') delay = (800).random(1000)
		if( cubelet.type === 'corner') delay = (1100).random(1500)


		//  We want those cubelets to go home, which used to be 0,0,0.
		//  Alas, now we have to rely on a cloned previous position.

		new TWEEN.Tween( cubelet.position )
			.to({

				x: 2000,
				y: 2000,
				z: 2000,

			}, 1000 )
			.delay( delay )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete( function(){
				cubelet.isTweening = false
			})
			.start( cube.time )
		cubelet.isTweening = true
	});
}
