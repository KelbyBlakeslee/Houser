import React from 'react';
import {Route} from 'react-router-dom';
import NestedRoute from './Nestedroute'

export default class SecondRoute extends React.Component {
    render() {
        return (
            <div>
                
                <Route path='/route-two/nested' component={NestedRoute} />
            </div>
        )
    }
}