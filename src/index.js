import React from 'react';
import { render } from 'react-dom';
import MedalWidgetContainer from './components/MedalWidgetContainer';

module.exports = {
    init: function(target, sort){
        if(sort === "" || !sort ){
            sort = "gold"
        }

        if (target.charAt(0) === "#" && document.getElementById(target.substr(1))){
            render(
                <MedalWidgetContainer sort={sort} />,
                document.getElementById(target.substr(1))
            )
        } else {
            console.log("Element with id: "+target+" does not exist")
        }
    }
}