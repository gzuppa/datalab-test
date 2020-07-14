import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GeoChart from '../d3/GeoChart'
import data from '../helpers/GeoChart.world.geo.json';
import "./Components.css"

function Chart(){
    const [property, setProperty] = useState("pop_est")
    return(
        <React.Fragment>
            <h2>Mapa con D3</h2>
            <GeoChart data={data} property={property} />
            <h2>Selecciona la propiedad que deseas resaltar</h2>
            <select value={property} onChange={event => setProperty(event.target.value)} className="mapinput">
                <option value="pop_est">Población</option>
                <option value="gdp_md_est">Producto Interno Bruto</option>
            </select>
            <div>
            <button className="admin-btn">
              <Link to="/admin">Regresar a Admin</Link>
            </button>
            </div>
        </React.Fragment>
    )
}

export default Chart
