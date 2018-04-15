/*$('.container').load('introduction.html');*/
$('.container').load('readings/commands.html');

function main (){
	$('#introduction').on('click', function(){
		$('.container').load('introduction.html');
	});
	
	$('#authors').on('click', function(){
		$('.container').load('authors.html');
	});

	/*readings*/

	$('#reading1').on('click', function(){
		$('.container').load('readings/config_env.html');
	});

	$('#reading2').on('click', function(){
		$('.container').load('readings/create_bd.html');
	});

	$('#reading3').on('click', function(){
		$('.container').load('readings/commands.html');
	});

	$('#reading4').on('click', function(){
		$('.container').load('readings/create_user.html');
	});

	$('#reading5').on('click', function(){
		$('.container').load('readings/connection_php_mysql.html');
	});

	$('#reading6').on('click', function(){
		$('.container').load('readings/test.html');
	});

	/*videos*/
	$('#video1').on('click', function(){
		$('.container').load('videos/video1.html');
	});

	$('#video2').on('click', function(){
		$('.container').load('videos/video2.html');
	});

	/*Activities*/
	$('#activity1').on('click', function(){
		$('.container').load('activities/crossword.html');
	});

	$('#activity2').on('click', function(){
		$('.container').load('activities/cuestionario.html');
	});

	$('#activity3').on('click', function(){
		$('.container').load('activities/llenar_campos.html');
	});

	$('#activity4').on('click', function(){
		$('.container').load('activities/completar.html');
	});

	$('#activity5').on('click', function(){
		$('.container').load('activities/relacionar_columnas.html');
	});
	
	$('#activity6').on('click', function(){
		$('.container').load('activities/crucigrama.html');
	});
}

console.log('main.js loaded');