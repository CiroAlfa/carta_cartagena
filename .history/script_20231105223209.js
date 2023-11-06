const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Añade este código para ocultar la bolita cuando el cursor se sale de la pantalla
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
})

document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
})


$('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 0 // Ajusta este valor según tus necesidades
    }, 2000, 'swing', function() { // Ajusta este valor para cambiar la velocidad del desplazamiento (en milisegundos)
        window.location.hash = target;
    });
});
