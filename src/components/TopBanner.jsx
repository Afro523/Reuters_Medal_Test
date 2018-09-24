import React, {Component} from 'react';
import propTypes from 'prop-types';
import Medal from './Medal';

class TopBanner extends Component{
    constructor(props) {
        super(props);
        // this.state = { 
        //     sort: this.props.sort
        // };
    }
    render(){
        return(
            <div style={{float:'left', width:'100%', height:55}}>
                <div id="title">
                    MEDAL COUNT 
                </div> 
                <div style={{ float:'right', color:'grey'}}>
                    <div 
                        className={"medalColumn " + (this.props.sort === "gold" ? 'activeMedal':'')}
                        style={{position:'absolute', right:170}} 
                        onClick={() => this.props.sortFunc("gold")}
                    >
                        <Medal color={"gold"}/>
                    </div>
                    <div 
                        className={"medalColumn " + (this.props.sort === "silver" ? 'activeMedal':'')}
                        style={{position:'absolute', right:120}} 
                        onClick={() => this.props.sortFunc("silver")}
                    >
                        <Medal color={"silver"}/>
                    </div>
                    <div 
                        className={"medalColumn " + (this.props.sort === "bronze" ? 'activeMedal':'')} 
                        style={{position:'absolute', right:70}} 
                        onClick={() => this.props.sortFunc("bronze")}
                    >
                        <Medal color={"brown"}/>
                    </div>
                    <div 
                        className={"medalColumn " + (this.props.sort === "total" ? 'activeMedal':'')} 
                        style={{color:'black', position:"absolute", right:7, width:"auto"}} 
                        onClick={() => this.props.sortFunc("total")}
                    >
                    <div style={{fontFamily:"Roboto", fontWeight:'500', fontSize:15}}>
                        TOTAL
                    </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

TopBanner.propTypes = {
    sort: propTypes.string.isRequired,
    sortFunc: propTypes.func.isRequired
}

export default TopBanner