(function(){
    // funcion animacion de entrada de las cartas seccion inicio
    animacionCartasPlanes();
    function animacionCartasPlanes(){
        const seccionPlanes = document.querySelectorAll(".seccion_planes_carta");
        const observarPlanes = new IntersectionObserver((ver)=>{
            ver.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add("activoPlanes");
                }
            });
        }, {threshold:0.2});

        seccionPlanes.forEach(sec => observarPlanes.observe(sec));
    }   
})();
