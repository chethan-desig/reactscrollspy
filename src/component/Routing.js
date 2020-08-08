import React,{Fragment}from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import profile from './Profile';
import home from './Home'



const Routing = () => {
    return(
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={home}></Route>
                <Route exact path="/profile" component={profile}></Route>
              
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;