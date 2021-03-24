//Aqui, utilizamos jquery, que lo que hace es que con ready function se ejecute js cuando se carge la página. Ulizamos $ par indicar que utilizamos jquery.
//añade la clase activ a los paneles abiertos.
$( document ).ready(function() {
    $('.panel-collapse').on('show.bs.collapse', function () {
      $(this).siblings('.panel-heading').addClass('active');
    }); 
  
    //quita la clase active a los paneles cerrados.
    $('.panel-collapse').on('hide.bs.collapse', function () {
      $(this).siblings('.panel-heading').removeClass('active');
    });

    //utilizamos la librería vanilla calendar para generar el calendario. Inicializamos con las propiedades selector y deshabilitamos las fechas pasadas para que no puedan ser utlizadas.
    let calendar = new VanillaCalendar({
      selector: "#myCalendar",
      pastDates: false
  })

 // Aquí indicamos que una vez que hacemos click en un boton, el otro se deshabilite y pierda las propiedades, (cambia la clase).
  /*$('.button-day').click(function(){
    $('.icon-selected').toggleClass('icon-selected');
    $(this).toggleClass('icon-selected');
  });*/

  const buttondayElement = document.getElementById('sun');
  const buttonnightElement = document.getElementById('moon');
  
  buttondayElement.addEventListener('click', (event) => {

    buttonnightElement.classList.remove('icon-selected');
    
if (buttondayElement.classList.contains("icon-selected")){
  buttondayElement.classList.remove('icon-selected');
} else{
  buttondayElement.classList.add('icon-selected');
}

  });


 
  buttonnightElement.addEventListener('click', (event) => {
    buttondayElement.classList.remove('icon-selected');
if (buttonnightElement.classList.contains("icon-selected")){
  
} else{
  buttonnightElement.classList.add('icon-selected');
}
  });



  //Cambiamos el valor numérico en función de la barrita, de manera que vaya sincrconizada.
    const rangeElement = document.getElementById('range');

    rangeElement.addEventListener('change', (event) => {
      let currentNumber = document.getElementById('range').value;
      document.getElementById("range-number").innerHTML=currentNumber;
    });
});

