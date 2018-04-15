function counter (){
	if (localStorage.contador) {
		localStorage.contador = Number(localStorage.contador) + 1;
	} else {
		localStorage.contador = 1;
	}

	$('.visitor_counter').append("<span><strong>El sitio ha sido visitado " + localStorage.contador + " veces</strong></span>");
}

console.log('counter.js loaded');