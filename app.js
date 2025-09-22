(function(){

    // funcion slaider para la seccion servicios
    slaider();
    function slaider(){
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
    }
    

    // funcion del logo para que vaya a la seccion de inicio cuando esta en dispositivo movil
    interaccionLogo();
    function interaccionLogo(){
        let logo = document.getElementById("logo");
        logo.addEventListener("click", ()=>{
            document.getElementById("cabecera").scrollIntoView({
                behavior: "smooth",
                block:"start"
            });
        });
    }
    

    // // funcion animacion de entrada de las cartas seccion inicio
    // animacionCartasInicio();
    // function animacionCartasInicio(){
    //     const seccionInicio = document.querySelectorAll(".seccion_inicio_carta");
    //     const observarInicio = new IntersectionObserver((ver)=>{
    //         ver.forEach(entrada => {
    //             if(entrada.isIntersecting){
    //                 entrada.target.classList.add("activoInicio");
    //             }
    //         });
    //     }, {threshold:0.2});

    //     seccionInicio.forEach(sec => observarInicio.observe(sec));
    // }
    


    // funcion animacion de entrada de las cartas seccion nosotros
    animacionCartasNosotros();
    function animacionCartasNosotros(){
        const seccionNosotros = document.querySelectorAll(".seccion_nosotros_carta");
        const observarNosotros = new IntersectionObserver((ver)=>{
            ver.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add("activoNosotros");
                }
            });
        }, {threshold:0.2});

        seccionNosotros.forEach(sec => observarNosotros.observe(sec));
    }
    


    // funcion animacion de entrada de las cartas seccion Servicios
    animacionCartasServicios();
    function animacionCartasServicios(){
        const seccionSlaider = document.querySelectorAll(".seccion_servicios_slaider--show");
        const observarSlaider = new IntersectionObserver((ver)=>{
            ver.forEach(entrada => {
                if(entrada.isIntersecting){
                    entrada.target.classList.add("activoSlaider");
                }
            });
        }, {threshold:0.2});

        seccionSlaider.forEach(sec => observarSlaider.observe(sec));
    }
    


    // funcion para cuando no sea visible una seccion en este caso el nav y solo sea visible el logo flotante 
    // y cuando nos desplacemos para arriba y sea visible una seccion en este caso la principal se vuelva a ver el nav
    // 
    // ocultarNavMostrarLogo();
    // function ocultarNavMostrarLogo(){
    //     const barraNav = document.querySelectorAll("#imagen_nav");
    //     const verBarra = new IntersectionObserver((ver) => {
    //         ver.forEach(entrada => {
    //         if (!entrada.isIntersecting) {
    //             entrada.target.classList.add("header_nav_imagen_fixed");
    //             entrada.target.classList.remove("header_nav_imagen");
    //         } 
    //     });
    //     }, {threshold: 1});
    //     barraNav.forEach(sec => verBarra.observe(sec));
    // }
    
    // ocultarLogoMostrarNav();
    // function ocultarLogoMostrarNav(){
    //     const principal = document.querySelectorAll(".principal");
    //     const verPrincipal = new IntersectionObserver((ver) => {
    //         ver.forEach(entra => {
    //             if(entra.isIntersecting){

    //                 const barraNav = document.querySelectorAll("#imagen_nav");
    //                 const verBarra = new IntersectionObserver((ver) => {
    //                     ver.forEach(entrada => {
    //                         if (entrada.isIntersecting) {
    //                             entrada.target.classList.add("header_nav_imagen");
    //                             entrada.target.classList.remove("header_nav_imagen_fixed");
    //                         } 
    //                     });
    //                 }, {threshold: 0.1});
    //                 barraNav.forEach(sec => verBarra.observe(sec));
    //             }
    //         })
    //     }, {threshold: 0.5});
    //     principal.forEach(sec => verPrincipal.observe(sec));
    // }
})();