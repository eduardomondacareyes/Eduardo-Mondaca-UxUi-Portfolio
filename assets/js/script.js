$(function() {
    $("a").click(function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var gato = this.hash;


            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function() {

                window.location.hash = gato;
            });
        } // Fin del if
    });
});


$(function () {
    $('[data-bs-toggle="popover"]').popover()
  })


  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })

  $(function () {
$('.dropdown-bs-toggle').dropdown()
})

function fun(){
    document.getElementById('nombre').value='';
    document.getElementById('email').value='';
    document.getElementById('texto').value='';
    }