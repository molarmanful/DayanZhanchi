var idleInterval = setInterval(timerIncrement, 10000);
$(document).ready(function(){
  if ( self !== top ) {
    $('#dircon').css('display', 'none');
  }
  var edge = 0;
  var corner = 0;
  var center = 0;
  $(document).mousemove(function (e) {
  	clearInterval(idleInterval);
  });
  $(document).keypress(function (e) {
  	clearInterval(idleInterval);
  });
  $('html').css('display', 'none').delay(500).fadeIn('slow');
  $('#reassemble').css('display', 'none');
  $('#three').css('display', 'none');
  window.cube = new ERNO.Cube();
  cube.position.y = 0;
  cube.twistDuration = 100;
  $('#changecubeblack').css('display', 'none');
  $('#changecubenorm').css('display', 'none');
  var container = $('#containerforcube');
  container.append( cube.domElement );
  $('#togdir').click(function(){
  	$('#directions').slideToggle();
  });
  $('#changecubeloose').click(function(){
  	cube.setRadius(15);
  	$('#changecubeloose').css('display', 'none');
  	$('#changecubenorm').css('display', 'inline-block');
  });
  $('#changecubenorm').click(function(){
  	cube.setRadius(0);
  	$('#changecubeloose').css('display', 'inline-block');
  	$('#changecubenorm').css('display', 'none');
  });
  $('#changecubewhite').click(function(){
  	Array.prototype.slice.call( document.querySelectorAll( '.cubelet' )).forEach( function( e ){
		e.classList.add( 'purty' );
	});
  	$('#changecubeblack').css('display', 'inline-block');
  	$(this).css('display', 'none');
  });
  $('#changecubeblack').click(function(){
  	Array.prototype.slice.call( document.querySelectorAll( '.cubelet' )).forEach( function( e ){
		e.classList.remove( 'purty' );
	});
  	$('#changecubewhite').css('display', 'inline-block');
  	$(this).css('display', 'none');
  });
  $(document).keypress(pop);
  $(document).mousedown(pop);
  $('#pop').click(function(){
  	cube.cubelets.forEach( function( cubelet ){
		cubelet.setRadius(( 100 ).random( 1000 ))
	});
	cube.autoRotate = true;
	$(this).css('display', 'none');
	$('#reassemble').css('display', 'inline-block');
  });
  $('#reassemble').click(function(){
  	cube.edges.setRadius(edge);
	cube.corners.setRadius(corner);
	cube.centers.setRadius(center);
	cube.autoRotate = false;
	$(this).css('display', 'none');
	$('#pop').css('display', 'inline-block');
  });
  $('#two').click(function(){
  	cube.edges.setOpacity(0, 10);
	cube.centers.setOpacity(0, 10);
	cube.corners.setRadius(-60, 10);
	$('.cube').css('height', '150%');
	$('.cube').css('width', '150%');
	$(this).css('display', 'none');
	$('#three').css('display', 'inline-block');
	$('#pop').fadeOut('fast');
	$('#reassemble').fadeOut('fast');
  });
  $('#three').click(function(){
  	cube.edges.setOpacity(1, 1);
  	cube.centers.setOpacity(1, 1);
  	cube.corners.setRadius(0, 10);
  	$('.cube').css('height', '100%');
  	$('.cube').css('width', '100%');
	$(this).css('display', 'none');
	$('#two').css('display', 'inline-block');
	$('#pop').fadeIn('slow');
  });
  $('button').click(function(){
  	$(this).blur();
  });
});
function pop(){
	cube.addEventListener('onTwistComplete', function(){
		var number;
		if($('changecubeloose').css('display') == 'none'){
			number = 50;
		} else {
			number = 10000;
		}
		var random = Math.floor(Math.random() * number);
		if(random > 1 && random < 50){
			var edgear = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
			var randedge = Math.floor(Math.random() * edgear.length);
			cube.hasAddress(edgear[randedge]).setRadius(1000);
			cube.hasAddress(edgear[randedge]).setRadius(1000);
			$('#demotext').text('YOUR CUBE HAS POPPED!').css('color', 'red');
			$(document).click(function(){
				$('#demotext').text('DAYAN ZHANCHI').css('color', 'gray');
			});
		}
	});
}
function timerIncrement() {
	cube.autoRotate = true;
	$(document).mousemove(function (e) {
		clearInterval(idleInterval);
		cube.autoRotate = false;
	});
	$(document).keypress(function (e) {
		clearInterval(idleInterval);
		cube.autoRotate = false;
	});
}
