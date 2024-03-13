import React from "react";

// Asegúrate de aceptar props en tu componente
const Text = (props) => {
    // Convertimos el objeto props a una cadena de texto para mostrarlo
    const propsAsString = JSON.stringify(props, null, 2);
    console.log(propsAsString) // El segundo argumento `null` y el tercero `2` son para formatear el JSON

    return (
        <div>
            <p>Bienvenido al microfrontend tres prueba props AEM</p>
            {/* Mostramos las props formateadas dentro de un elemento <pre> para mejor legibilidad */}
            <pre>{propsAsString}</pre>
        </div>
    );
}

export default Text;
