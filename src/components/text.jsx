import React from "react";

const Text = ({appData}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        ocupacion: 'estudiante'
      });
    
      const [showPopup, setShowPopup] = useState(false); // Estado para controlar la visualización del popup
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
        console.log(formData);
        setShowPopup(true); // Mostrar el popup después de enviar el formulario
      };
    
      console.log('appData desde la aplicacion externa:', appData);
    
      return (
        <div className="container">
          <form id="formulario" onSubmit={handleSubmit}>
            <div className='container-title-img'>
              <h2>Completa tus datos</h2>
            </div>
            <div className="input-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="ocupacion">Ocupación:</label>
              <select id="ocupacion" name="ocupacion" value={formData.ocupacion} onChange={handleChange}>
                <option value="estudiante">Estudiante</option>
                <option value="profesor">Profesor</option>
                <option value="profesional">Profesional</option>
              </select>
            </div>
            <button type="submit">Enviar</button>
          </form>
          {showPopup && (
            <div>
              <div className="popup-overlay"></div> {/* Capa de fondo semitransparente */}
              <div className="popup">
                <p>Muchas gracias, {formData.nombre}. Los datos se han enviado correctamente.</p>
              </div>
            </div>
          )}
        </div>
      );
    };
export default Text;
