$(document).ready(function() {

	var imgItems = $('.slider li').length; //numero de slides
	var imgPosition = 1;

  $('.slider li').hide(); //ocultamos todos los slides
  $('.slider li:first').show(); //mostramos el primer slide
  $('.pagination li:first').css({'color': '#A9BCF5'}) //estilo al primer circulo de la paginación

  //ejecutamos todas las funciones

 	$('.pagination li').click(pagination);
 	$('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  //funciones
  	//función para cambio de página con botones indicadores.
  function pagination() {
  	var paginationPosition = $(this).index() + 1;
  	imgPosition = paginationPosition;

  	$('.slider li').hide();
  	$('.slider li:nth-child('+ paginationPosition +')').fadeIn();

  	$('.pagination li').css({'color': '#8904B1'});
  	$(this).css({'color': '#A9BCF5'});
  }
  	//función para cambio de página con flecha derecha
  function nextSlider() {

  	if (imgPosition >= imgItems) {
  			imgPosition = 1;
  	} else {
  		imgPosition++;
  	}
  	$('.pagination li').css({'color': '#8904B1'});
  	$('.pagination li:nth-child('+ imgPosition +')').css({'color': '#A9BCF5'});
  	$('.slider li').hide();
  	$('.slider li:nth-child('+ imgPosition +')').fadeIn();
  }
  	//función para cambio de página con flecha izquierda
  function prevSlider() {

  	if (imgPosition <= 1) {
  			imgPosition = imgItems;
  	} else {
  		imgPosition--;
  	}
  	$('.pagination li').css({'color': '#8904B1'});
  	$('.pagination li:nth-child('+ imgPosition +')').css({'color': '#A9BCF5'});
  	$('.slider li').hide();
  	$('.slider li:nth-child('+ imgPosition +')').fadeIn();
  }

});