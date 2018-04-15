$('.container').load('src/interfaces/introduction.html');

function main (){
	$('#introduction').on('click', function(){
		$('.container').load('src/interfaces/introduction.html');
	});
	
	$('#authors').on('click', function(){
		$('.container').load('src/interfaces/authors.html');
	});

	/*readings*/

	$('#reading1').on('click', function(){
		$('.container').load('src/interfaces/readings/config_env1-2.html');
	});

	$('#reading2').on('click', function(){
		$('.container').load('src/interfaces/readings/create_bd.html');
	});

	$('#reading3').on('click', function(){
		$('.container').load('src/interfaces/readings/commands.html');
	});

	$('#reading4').on('click', function(){
		$('.container').load('src/interfaces/readings/create_user.html');
	});

	$('#reading5').on('click', function(){
		$('.container').load('src/interfaces/readings/connection_php_mysql.html');
	});

	$('#reading6').on('click', function(){
		$('.container').load('src/interfaces/readings/test.html');
	});

	/*videos*/
	$('#video1').on('click', function(){
		$('.container').load('src/interfaces/videos/video1.html');
	});

	$('#video2').on('click', function(){
		$('.container').load('src/interfaces/videos/video2.html');
	});

	/*Activities*/
	$('#activity1').on('click', function(){
		$('.container').load('src/interfaces/activities/crossword.html');
	});

	$('#activity2').on('click', function(){
		$('.container').load('src/interfaces/activities/cuestionario.html');
	});

	$('#activity3').on('click', function(){
		$('.container').load('src/interfaces/activities/llenar_campos.html');
	});

	$('#activity4').on('click', function(){
		$('.container').load('src/interfaces/activities/completar.html');
	});

	$('#activity5').on('click', function(){
		$('.container').load('src/interfaces/activities/relacionar_columnas.html');
	});
	
	$('#activity6').on('click', function(){
		$('.container').load('src/interfaces/activities/crucigrama.html');
	});
}

console.log('main.js loaded');