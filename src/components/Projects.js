import React from "react";
// import PROJECTS from "../data/projects";
import PROJECTS from "../data/projects";

const Project = props =>{ 
    const {link, title,image,description} = props.project;
    return (
        <div style={{width:300, display:"inline-block", margin:10}}>
            <h3>{title}</h3>
            <img src={image} alt={title} style={{width:250,}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                <Project key={PROJECT.id} project={PROJECT}/>
                ))
            }
        </div>
    </div>
)


export default Projects;