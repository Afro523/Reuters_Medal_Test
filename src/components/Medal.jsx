import React, {Component} from 'react';
import propTypes from 'prop-types';

class Medal extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="Medal" style={{backgroundColor:this.props.color}}/>
            </div>
        );
    }
}

Medal.propTypes = {
    color: propTypes.string.isRequired
}

export default Medal