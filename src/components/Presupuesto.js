import React, { Component } from 'react';
import ProtoTypes from 'prop-types';


class Presupuesto extends Component {

    render() {
        return(
            <div className="alert alert-primary">
                Presupuesto: ${this.props.presupuesto}
            </div>
        )
    }
}

Presupuesto.propTypes = {
    presupuesto: ProtoTypes.string.isRequired
}

export default Presupuesto;