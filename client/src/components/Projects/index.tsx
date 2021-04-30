import React, { useEffect, useState } from "react";
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
      .then((jsonResponse) => setInitialState(jsonResponse!.data.data));
  }, []);

  return (
    <StyledProjects id="projects">
      <ul>
        {initialState.length > 0 &&
          initialState.map((e) => (
            <li key={e.id}>
              <div>
                <h2>{e.name}</h2>
                <div>{e.description}</div>
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
              <a
                href={e.deploy || e.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={e.photo} alt={e.name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledProjects>
  );
};
