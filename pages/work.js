
import styles from '../styles/projects.module.css';
import { useState } from 'react';
import ProjectCard from '../components/layout/projectCard';

function Projects(props) {
  
  const [projectList, setprojectList] = useState(props.projectList ? props.projectList.slice(0,5) : {});
    return (
          <main>
            <h1>
              Work
            </h1>
            <ProjectCard 
              projectList= {projectList}
            />
          </main>
      )
}

Projects.getInitialProps = async (context) =>{
  const res  = await fetch("https://api.github.com/users/mayankmahavar111/repos")
  const jsonRes = await res.json();
  return {
    projectList : jsonRes
  };
}

export default Projects;