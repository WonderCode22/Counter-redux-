import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning(content){
    return () => console.warn(content + 'is not defined')
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
}

class Control extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <button>+</button>
                <button>-</button>
                <button>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;