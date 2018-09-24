import React, {Component} from 'react';
import propTypes from 'prop-types';

class CountryBar extends Component{
    constructor(props) {
        super(props);
    }
    
    getImageStyle(){
        var imageStyle = {
            backgroundImage:"url(https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png)",
            width: 28,
            height:17,
            backgroundPositionY: this.props.countryData.flagPos,
            marginRight:5
        }
        return imageStyle;
    }
    render(){
        return(
            <div className="countryRow">
                <div style={{float:'left'}}>
                    <div className="numberColumn">{this.props.num + 1}</div>
                    <div style={this.getImageStyle()}></div>
                    <div className="countryCode">
                        {this.props.countryData.code}
                    </div>
                </div>
                <div className="medalFloatingContainer">
                    <div className="column">
                        {this.props.countryData.gold}
                    </div>
                    <div className="column">
                        {this.props.countryData.silver}
                    </div>
                    <div className="column">
                        {this.props.countryData.bronze}
                    </div>
                    <div className="column" style={{color:'black'}}>
                        {this.props.countryData.totalMedals}
                    </div>
                </div>
            </div>
        );
    }
}

CountryBar.propTypes = {
    countryData: propTypes.object.isRequired
}

CountryBar.defaultProps ={
	countryData:[],
};

export default CountryBar