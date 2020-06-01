import React from 'react';
import ProjectSummary from './projectSummary';

const ProjectDetails = (props)=>{
    const id = props.match.params.id;
    console.log(id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Loremnjsfnjsb sfbjksf</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted By Neha Shukla</div>
                    <div>@nd Sep,2020</div>
                </div>
            </div>

        </div>
    )
}
export default ProjectDetails;