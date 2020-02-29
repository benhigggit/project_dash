import React from 'react';

const Project = (props) => {
    return (
        <li key={props.id}>
            {/* Layout for each comonent. Will add more fields and improve look later. Also need to figure out how to properly pass the onClick to delete project. */}
            <span>{props.title}</span><span><button type="button" onClick={props.deleteProject.bind(this, props.id)}>X</button></span>
            <div>{props.body}</div>
        </li>

    );
}

export default Project;