$('.container').load('introduction.html');

function main (){
	$('#introduction').on('click', function(){
		$('.container').load('introduction.html');
	});
	
	$('#authors').on('click', function(){
		$('.container').load('authors.html');
	});
}

console.log('main.js loaded');
