import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {

};

const defaultProps = {

}

class Counter extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>MyComponent</div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
