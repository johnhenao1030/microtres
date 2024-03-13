import React from "react";

const Text = (props) => {
    // Accedemos directamente a la propiedad TEXTO de las props
    const texto = props.TEXTO;

    return (
        <div>
            <p>Bienvenido al microfrontend tres prueba props AEM</p>
            {/* Mostramos el valor de TEXTO directamente */}
            <p>Holaaa</p>
            <p style={{ color: "red" }}>{texto}</p>
        </div>
    );
}

export default Text;
