import React from "react";
import Notifications from './notification';
import ProjectList from '../projects/projectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
function Dashboard(props) {
  const {projects} = props;
  return (
    
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6"><ProjectList projects = {projects}></ProjectList></div>
        
        <div className="col s12 m5 offset-m1"><Notifications/></div>
        
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return{
    projects:state.firestore.ordered.Projects
  }
}
export default compose(connect(mapStateToProps),firestoreConnect([
  { collection : 'Projects'}
]))(Dashboard);
