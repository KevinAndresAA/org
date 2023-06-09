import './ListaOpciones.css'

const ListaOpciones = (props) => {
    

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return (<div className='lista-opciones'>
        <label>Equipos</label>
        <select onChange={manejarCambio}>
            <option value='' disable defaultValue='' hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }
        </select>
    </div>)
}

export default ListaOpciones