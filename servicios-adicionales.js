(function(){
    // funcion animacion de entrada de las cartas seccion Servicios Adicionales
    animacionCartasServiciosAdicionales();
    function animacionCartasServiciosAdicionales(){
        const seccionServiciosAdicionales = document.querySelectorAll(".seccion_servicios_adicionales_carta");
        const observarServiciosAdicionales = new IntersectionObserver((ver)=>{
            ver.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add("activoServiciosAdicionales");
                }
            });
        }, {threshold:0.2});

        seccionServiciosAdicionales.forEach(sec => observarServiciosAdicionales.observe(sec));
    }
})();