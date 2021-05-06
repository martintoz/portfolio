import React, { useEffect, useState } from "react";
import Parser from 'html-react-parser';
import { StyledProjects } from "./StyledProjects";
import axios from "axios";

export const Projects = () => {
  interface ProjectData {
    id: string;
    name: string;
    description: string;
    date: Date;
    github: string;
    deploy: string;
    photo: string;
  }
  const [initialState, setInitialState] = useState<ProjectData[]>([]);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .then((jsonResponse) => {
        setInitialState(jsonResponse!.data.data);
      });
      
  }, []);

  return (
    <StyledProjects id="projects">
      <h2>Projects</h2>
      <ul>
        {initialState.length > 0 &&
          initialState.map((e) => {
            let newDescription:any
            if(e.description.includes("http")){
              const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/g
              const links = [...e.description.matchAll(re)]
              newDescription = links[0].input
              links.forEach(e =>{ 
                let link = e[0]
                let siteName = link.split("//")[1]
                newDescription = newDescription.replace(link, `<a
                  href=${link}
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  ${siteName}
                </a>`)
              })
            }
            // if(e.description.includes("soyHenry.com")){
            //   newDescription = e.description.split("soyHenry.com")
            //   newDescription = newDescription[0] + `<a
            //   href="https://soyhenry.com/"
            //   target="_blank"
            //   rel="noopener noreferrer"
            // >
            //   soyHenry.com
            // </a>` + newDescription[1]
            // }
            return (
            <li key={e.id}>
              <div className="projectText">
                <h3>{e.name}</h3>
                <div className="projectDescription">
                  { newDescription && newDescription.length? Parser(newDescription) : e.description}
                </div>
                <div className="links">
                  {e.github && (
                    <div>
                      <a
                        href={e.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  )}
                  {e.deploy && (
                    <div>
                      <a
                        href={e.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="projectPhoto">
                <a
                  href={e.deploy || e.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e.photo} alt={e.name} />
                </a>
              </div>
            </li>
          )})}
      </ul>
    </StyledProjects>
  );
};
