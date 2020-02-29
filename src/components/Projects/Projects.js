import React, { useReducer, useEffect} from 'react';
import ProjectForm from '../Project/ProjectForm';
import ProjectList from '../Project/ProjectList';

const projectReducer = (currentProjects, action) => {
    switch (action.type) {
        case 'SET':
            return action.projects;
        case 'ADD':
            return [...currentProjects, action.project]
        case 'DELETE':
            return currentProjects.filter(project => project.id !== action.id);
        default:
            throw new Error('You should not be here!')
    }
}

const Projects = (props) => {
    const [userProjects, dispatch] = useReducer(projectReducer, []);

    const addProjectHandler = project => {
        fetch('https://project-tracker-94ce5.firebaseio.com/projects.json',{
            method: 'POST',
            body: JSON.stringify(project),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                return response.json();
            }).then(responseData => {
                console.log(responseData);
                dispatch({type: 'ADD', project: {id: responseData.name, ...project }});
            })
    };

    const removeProjectHandler = projectId => {
        console.log("Remove: " + projectId);
        fetch(`https://project-tracker-94ce5.firebaseio.com/projects/${projectId}.json`,{
            method: 'DELETE'
        })
            .then(response => {
                dispatch({type: 'DELETE', id: projectId});
                return response.json()
            })
    };

    useEffect(() => {
        fetch('https://project-tracker-94ce5.firebaseio.com/projects.json')
            .then(response => response.json())
            .then(responseData => {
                const loadedProjects = []
                for (const key in responseData) {
                    loadedProjects.push({
                        id: key,
                        title: responseData[key].title,
                        body: responseData[key].body
                    })
                }
                dispatch({type: 'SET', projects: loadedProjects});
            })
    },[]);

    return (
        <div>
            {/* Page will show the "Create Project" option that will expand to show the ProjectForm component  */}
            <ProjectForm onAddProject={addProjectHandler}></ProjectForm>
            {/* ProjectList component will show the list of projects. May need to move some of the current logic to that component */}
            <ProjectList projects={userProjects} deleteProject={removeProjectHandler}></ProjectList>
        </div>

    );
}

export default Projects;