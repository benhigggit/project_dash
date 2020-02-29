import React, { useReducer, useEffect} from 'react';
import Project from '../Project/Project';

const ProjectList = props => {
    /* const deleteHandler = event => {
        event.preventDefault();
        props.deletePost({id: post.id});
    } */

    return (
        <div>
        <h1>Here is where the projects go!</h1>
            <ul>
                {props.projects.map(project =>(
                    <Project id={project.id} title={project.title} body={project.body} deleteProject={props.deleteProject.bind(this, props.id)} ></Project>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;