function social_network(){
	$('.btn_sn').on('click',function(){
		if($('#social_network').hasClass("dn")){
			$('#social_network').removeClass("dn");
		}else{
			$('#social_network').addClass("dn");
		}
	});
}

console.log('social_network.js loaded');