import React, {Component} from 'react';
import propTypes from 'prop-types';
import MedalContainer from './MedalContainer';
import CountryBar from './CountryBar';

class MedalWidgetContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            medalData: [], 
            sortedMedalData: [], 
            initSort: this.props.sort,
            sort:''
        };
    }
    getFlagPosAndTotal(dataSet){
        dataSet = dataSet.sort((a, b) => {
            if(a.code > b.code) return -1;
            if(a.code < b.code) return 1;
            return 0;
        });
        let bgPos = 17;
        for(let i = 0; i < dataSet.length; i++){
            dataSet[i].flagPos = bgPos;
            bgPos += 17;

            dataSet[i].totalMedals = dataSet[i].gold + dataSet[i].silver + dataSet[i].bronze; 
        }
        return dataSet
    }

    sortByMedals(sort, data){
        switch(sort){
            case "gold":
                data = data.sort((a,b) =>{
                    if(a.gold < b.gold) return 1;
                    if(a.gold > b.gold) return -1;
                    if(a.gold === b.gold){
                        if(a.silver < b.silver) return 1;
                        if(a.silver > b.silver) return -1;
                        if(a.silver === b.silver){
                            if(a.bronze < b.bronze) return 1;
                            if(a.bronze > b.bronze) return -1;
                        }
                    }
                    return 0;
                })
                this.setState({
                    sortedMedalData: data.slice(0, 10),
                    sort: sort
                })
                break;
            case "silver":
                data = data.sort((a,b) => {
                    if(a.silver < b.silver) return 1;
                    if(a.silver > b.silver) return -1;
                        if(a.silver === b.silver){
                            if(a.gold < b.gold) return 1;
                            if(a.gold > b.gold) return -1;
                            if(a.gold === b.gold){
                                if(a.bronze < b.bronze) return 1;
                                if(a.bronze > b.bronze) return -1;
                            }
                        }
                    return 0;
                })
                this.setState({
                    sortedMedalData: data.slice(0, 10),
                    sort: sort
                })
                break;
            case "bronze":
                data = data.sort((a,b) => {
                    if(a.bronze < b.bronze) return 1;
                    if(a.bronze > b.bronze) return -1;
                        if(a.bronze === b.bronze){
                            if(a.gold < b.gold) return 1;
                            if(a.gold > b.gold) return -1;
                            if(a.gold === b.gold){
                                if(a.silver < b.silver) return 1;
                                if(a.silver > b.silver) return -1;
                            }
                        }
                    return 0;
                })
                this.setState({
                    sortedMedalData: data.slice(0, 10),
                    sort: sort
                })
                break;
            case "total":
                data = data.sort((a,b) => {
                    if(a.totalMedals < b.totalMedals) return 1;
                    if(a.totalMedals > b.totalMedals) return -1;
                        if(a.totalMedals === b.totalMedals){
                            if(a.gold < b.gold) return 1;
                            if(a.gold > b.gold) return -1;
                            if(a.gold === b.gold){
                                if(a.silver < b.silver) return 1;
                                if(a.silver > b.silver) return -1;
                                if(a.silver === b.silver){
                                    if(a.bronze < b.bronze) return 1;
                                    if(a.bronze > b.bronze) return -1;
                                }
                            }
                        }
                    return 0;
                })
                this.setState({
                    sortedMedalData: data.slice(0, 10),
                    sort: sort
                })
                break;
            default:
                console.log("Sort not working")
        }
    }

    changeSort(sort){
        this.setState({
            sort: sort
        })
        this.sortByMedals(sort, this.state.medalData);
    }

    componentDidMount() {
        //Get Medals JSON data
        fetch("https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json")
          .then(res => res.json())
          .then(
            (result) => {
                let sortedByCode = this.getFlagPosAndTotal(result);
                this.setState({
                    medalData: sortedByCode
                })
                this.sortByMedals(this.state.initSort, sortedByCode);
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )  
    }

    render(){
        return(
            <div>
                <MedalContainer 
                    sortFunc={this.changeSort.bind(this)} 
                    data={this.state.sortedMedalData} 
                    sort={this.state.sort}
                />
            </div>
        );
    }
}

MedalWidgetContainer.propTypes = {
    sort: propTypes.string.isRequired,
}

export default MedalWidgetContainer