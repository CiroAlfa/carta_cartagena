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

/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var adjust = 142; // Ajusta este valor según tus necesidades
        var speed = 800; // Ajusta este valor para cambiar la velocidad del desplazamiento (en milisegundos)
        var target = document.querySelector(this.getAttribute('href'));
        var position = target.getBoundingClientRect().top + window.pageYOffset - adjust;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });

        setTimeout(function() {
            target.focus();
        }, speed + 600);
    });
});


$('a[href^="#"]').click(function(e) {
    var target = this.hash;
    var $target = $(target);

    if ($target.length) {
        e.preventDefault();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 190 // Ajusta este valor según tus necesidades
        }, 2500, 'swing', function() { // Ajusta este valor para cambiar la velocidad del desplazamiento (en milisegundos)
            history.pushState(null, null, target);
        });
    }
});

*/

$('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 190 // Ajusta este valor según tus necesidades
    }, 2000, 'easeOutQuad'); // Cambia 'swing' por 'easeOutQuad' para un efecto de desaceleración
});


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('#header a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#header ul li a').removeClass("scrolling-active");
                currLink.addClass("scrolling-active");
            }
            else{
                currLink.removeClass("scrolling-active");
            }
        });
    });
});
