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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // o 'center', 'end', o 'nearest'
        });
    });
});
