import React from "react";

const Text = (props) => {
    // Accedemos directamente al valor que queremos mostrar
    // Asumiendo que la estructura de props no cambia y siempre incluye EVENTO y TEXTO
    const texto = props.EVENTO?.TEXTO;

    return (
        <div>
            <p>Bienvenido al microfrontend tres prueba props AEM</p>
            {/* Mostramos el valor de TEXTO directamente */}
            <p>Holaaa</p>
            <p style={{ color: "red" }}>Mensaje de la aplicación externa: {texto}</p>
        </div>
    );
}

export default Text;
