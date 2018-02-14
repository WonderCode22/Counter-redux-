import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control from './Control';
import Value from './Value';

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
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
