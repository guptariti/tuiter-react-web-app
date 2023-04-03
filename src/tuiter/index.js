import React from "react";
import ExploreComponent from "./explore";
import Home from './home';
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter({tab = 'home'}) {
 return (
   <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active={tab}/>
     </div>
     <div className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{"position": "relative"}}>
       {tab === 'explore' ? <ExploreComponent/> : <Home/>}
     </div>
     <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <WhoToFollowList/>
     </div>
   </div>
   </Provider>
 );
}

export default Tuiter