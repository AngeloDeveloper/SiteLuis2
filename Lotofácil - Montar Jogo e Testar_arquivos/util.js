/**
Lotofacil
www.mazusoft.com.br/loto
*/

function max(txarea, total) { 
	tam = txarea.value.length; 
	str=""; 
	str=str+tam; 
	document.getElementById('Digitado').innerHTML = str; 
	document.getElementById('Restante').innerHTML = total - str; 
	if (tam > total){  
	   aux = txarea.value; 
	   txarea.value = aux.substring(0,total); 
	   document.getElementById('Digitado').innerHTML = total 
	   document.getElementById('Restante').innerHTML = 0 
	} 
}


$(document).ready(function(){
	
	$('.menu-resp').click(function(){
		$('.menu ul').slideToggle();
	});
	
	$('.menu-anchor').click(function(){
		$('.menu ul').slideToggle();
	});
	
	$(window).resize(function(){
		if($(window).width() > 480){
			$('.menu ul').removeAttr('style');
		}
	})
	
	$('#MainMenuCt').affix({
	offset: { 
       top: 44 
    } 
	
	});
})

/*$('#MainMenu').affix({});*/