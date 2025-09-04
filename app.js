(function(){

    let flechaIzquierda = document.querySelector(".poligono1");
    let flechaDerecha = document.querySelector(".poligono2");
    const seccionServiciosActual = [...document.querySelectorAll(".seccion_servicios_slaider")];
    let valor;

    flechaIzquierda.addEventListener("click", ()=>pasar(-1));
    flechaDerecha.addEventListener("click", ()=>pasar(1));

    function pasar(dato){

        const seccion = Number(document.querySelector(".seccion_servicios_slaider--show").dataset.id);

        valor = seccion;
        valor += dato;

        if(valor == 0 || valor == seccionServiciosActual.length+1){
            valor = valor == 0 ? seccionServiciosActual.length : 1;
        }

        seccionServiciosActual[seccion-1].classList.toggle("seccion_servicios_slaider--show");
        seccionServiciosActual[valor-1].classList.toggle("seccion_servicios_slaider--show");
    }

    // programacion del logo para que vaya a la seccion de inicio
    let logo = document.getElementById("logo");
    logo.addEventListener("click", ()=>{
        document.getElementById("principal").scrollIntoView({
            behavior: "smooth",
            block:"start"
        });
    });


    // animacion de entrada de las cartas seccion inicio
    const seccionInicio = document.querySelectorAll(".seccion_inicio_carta");

    const observarInicio = new IntersectionObserver((ver)=>{
        ver.forEach(entrada => {
            if(entrada.isIntersecting){
                entrada.target.classList.add("activoInicio");
            }
        });
    }, {threshold:0.2});

    seccionInicio.forEach(sec => observarInicio.observe(sec));


    // animacion de entrada de las cartas seccion nosotros
    const seccionNosotros = document.querySelectorAll(".seccion_nosotros_carta");

    const observarNosotros = new IntersectionObserver((ver)=>{
        ver.forEach(entrada => {
            if(entrada.isIntersecting){
                entrada.target.classList.add("activoNosotros");
            }
        });
    }, {threshold:0.2});

    seccionNosotros.forEach(sec => observarNosotros.observe(sec));


    // animacion de entrada de las cartas seccion Servicios
    const seccionSlaider = document.querySelectorAll(".seccion_servicios_slaider--show");

    const observarSlaider = new IntersectionObserver((ver)=>{
        ver.forEach(entrada => {
            if(entrada.isIntersecting){
                entrada.target.classList.add("activoSlaider");
            }
        });
    }, {threshold:0.2});

    seccionSlaider.forEach(sec => observarSlaider.observe(sec));
})();