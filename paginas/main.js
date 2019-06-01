$(document).ready(function() {
    // Codigo a ejecutarse una vez que se carga la pagina

    // Evento click en el elemento "#post-button", que existe cuando la
    // pagina se carga

    $("#postButton").click(function() {

        if ($("#postTitle").val().length === 0 || $("#postMessage").val().length === 0) {

            // show() muestra un elemento seleccionado con $(selector)

            $(".mensajePost").show();
        } else {

            // oculta() oculta un elemento seleccionado con $(selector)

            $(".mensajePost").hide();

            // append(html) agrega el html al final del elemento seleccionado
            // con $(selector)

            $("#postsContainer").append(
                '<div class="card mb-2">' +
                    '<div class="card-body">' +
                        '<h4 class="card-title">' +
                        
                            // val() obtiene el valor de un elemento
                            // input seleccionado con $(selector)

                            $("#postTitle").val() +
                        '</h4>' +
                        '<p class="card-text">' +
                            $("#postMessage").val() +
                        '</p>' +
                        '<div class="d-flex justify-content-between align-items-end">' +
                            '<div class="d-flex">' +
                                '<a href="#" class="primary-link link ver-comentarios mr-3">Ver comentarios</a>' +
                                '<a href="#" class="primary-link link eliminar">Eliminar</a>' +
                            '</div>' +
                            '<i class="far fa-heart"></i>' +
                        '</div>' +
                        '<div class="comentarios mt-4 bg-light p-3">' +
                            '<div class="form-group">' +
                                '<label>Comentario</label>' +
                                '<input type="text" class="form-control" placeholder="Ingrese un comentario">' +
                                '<button type="button" class="btn btn-success boton-comentar mt-3 mb-4">Comentar</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        }
    });

    /**    
    - on(evento, elemento, funcion) ejecuta una funcion cuando 
    se activa el evento definido sobre dicho elemento
    - utilizamos on para decirle a document que preste atención
    a los eventos de ciertos elementos, en vez de definirle
    a los elementos directamente
    - esto lo hacemos cuando los elementos cuyos eventos queremos
    detectar son generados dinámicamente, es decir, que no existen
    cuando la página es creada de esta forma, lo que estamos haciendo 
    es darle la responsabilidad al documento de detectar cuando 
    hay un evento sobre un elemento en particular
    */

    $(document).on("click", ".ver-comentarios", function(){
        /**    
        - $(this) selecciona el elemento en particular donde se 
        generó el evento, en vez de seleccionar todos
        - parent() selecciona el elemento padre o contenedor del elemento
        html seleccionado con $(selector)
        - next() selecciona el siguiente elemento en la misma jerarquía
        o nivel que el elemento html seleccionado con $(selector)
        - toggle() muestra/oculta un elemento seleccionado, dependiendo
        de si actualmente está oculto/visible (intercambia los estados)
        */
       console.log($(this).parent().parent().next());
        $(this).parent().parent().next().toggle();
    })

    $(document).on("click", ".eliminar", function(){
        /**
         - closest(selector) busca el primer elemento padre en la jerarquía
         ascendente del elemento html seleccionado que coincide con el selector
         - remove() elimina el elemento html seleccionado
         */
        $(this).closest(".card").remove();
    })
    
    $(document).on("click", ".boton-comentar", function(){
        var comentario = $(this).prev().val();
        $(this).parent().parent().append( 
            '<div class="card mb-2">' +
            '<div class="card-body">' +
                '<p class="card-text">' +
                    comentario +
                '</p>' +
                '<div class="d-flex justify-content-between align-items-end">' +
                    '<a href="#" class="primary-link link eliminar d-block mt-2">Eliminar</a>' +
                    '<i class="far fa-heart"></i>' +
                '</div>' +
            '</div>' +
        '</div>');
    })

    $(document).on("click", ".fa-heart", function(){
        // togleClass(clase) agrega/elimina una clase del elemento
        // html seleccionado, dependiendo de si ya la tiene o no
        $(this).toggleClass("far");
        $(this).toggleClass("fas");
    })

});




