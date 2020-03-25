import React, {Component} from 'react';
import Gasto from './Gasto';
import ProtoTypes from 'prop-types';

class Listado extends Component {
    render() {
        return(
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key =>(
                    <Gasto
                        key={key}
                        gasto={this.props.gastos[key]}
                    />
                ))}
                
            </div>
        )
    }
}

Listado.propTypes = {
    gastos: ProtoTypes.object.isRequired
}

export default Listado;