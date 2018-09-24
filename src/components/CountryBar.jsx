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
            <div className="countryRow" style={{borderBottom:'1px solid grey', padding:5}}>
                <div style={{float:'left'}}>
                    <div style={this.getImageStyle()}></div>
                    <div style={{fontWeight:'bold', color: 'grey', paddingBottom:'2px'}}>
                        {this.props.countryData.code}
                    </div>
                </div>
                <div style={{float:'right', color:'grey'}}>
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