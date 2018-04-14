$('.container').load('introduction.html');

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

	/*$('#reading2').on('click', function(){
		$('.container').load('readings/create_user.html');
	});*/

	$('#reading3').on('click', function(){
		$('.container').load('readings/connection_php_mysql.html');
	});

	$('#reading4').on('click', function(){
		$('.container').load('readings/commands.html');
	});

	$('#reading5').on('click', function(){
		$('.container').load('readings/test.html');
	});

	/*videos*/
	$('#video1').on('click', function(){
		$('.container').load('videos/video1.html');
	});

	$('#video2').on('click', function(){
		$('.container').load('videos/video2.html');
	});
}

console.log('main.js loaded');