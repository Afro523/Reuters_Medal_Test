import React, {Component} from 'react';
import propTypes from 'prop-types';
import CountryBar from './CountryBar';
import TopBanner from './TopBanner';


class MedalContainer extends Component{
    renderMedals(){
        return this.props.data.map((obj, index) => (
            <CountryBar key={obj.code} num={index} countryData={obj}/>
        ));
    }

    render(){
        let elToBeRendered
        if(this.props.data.length !== 0){
            elToBeRendered = this.renderMedals()
        } else {
            elToBeRendered = <div className="loader"></div>
        }

        return(
            <div className="medalContainer">
                <TopBanner sort={this.props.sort} sortFunc={this.props.sortFunc}/>
                <div className="Banner"/>
                {elToBeRendered}
            </div>
        );
    }
}

MedalContainer.propTypes = {
    sort: propTypes.string.isRequired,
    data: propTypes.array.isRequired,
    sortFunc: propTypes.func.isRequired
}

export default MedalContainer