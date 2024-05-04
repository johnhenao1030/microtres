import React from "react";

const Text = ({appData}) => {
    // Accedemos directamente al valor que queremos mostrar
    // Asumiendo que la estructura de props no cambia y siempre incluye EVENTO y TEXTO
    console.log('appData desde la aplicacion externa:', appData);


    return (
        <div>
            <p>Bienvenido al frontend, ojala sirva</p>
            {/* Mostramos el valor de TEXTO directamente */}
        </div>
    );
}

export default Text;
