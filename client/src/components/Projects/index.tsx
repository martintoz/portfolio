import axios from "axios";
import Parser from "html-react-parser";
import { useContext, useEffect, useState } from "react";
import { stringToLink, urlRegex } from "../../utils";
import { LanguageContext } from "../LanguageProvider";
import { Loader } from "../Loader";
import { T } from "../T";
import { StyledProjects } from "./StyledProjects";

export const Projects = () => {
  interface ProjectData {
    id: string;
    name: string;
    name_es: string;
    description: string;
    description_es: string;
    date: Date;
    github: string;
    deploy: string;
    photo: string;
  }
  const [initialState, setInitialState] = useState<ProjectData[]>([]);

  useEffect(() => {
    axios
      .get(`https://portfolio-835c7-default-rtdb.firebaseio.com/projects.json?auth=${process.env.FIREBASE_AUTH_SECRET}`)
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .then((jsonResponse) => {
        setInitialState(jsonResponse!.data);
      });
  }, []);

  const { language } = useContext(LanguageContext);

  return (
    <StyledProjects id="projects">
      <h2>
        <T>projects</T>
      </h2>
      <div className="projectsContainer">
        <ul>
          {initialState.length < 1 && <Loader />}
          {initialState.length > 0 &&
            initialState.map((e) => {
              let newDescription: string;
              let newDescription_es: string;
              if (e.description.includes("http")) {
                const links = [...e.description.matchAll(urlRegex)];
                const links_es = [...e.description_es.matchAll(urlRegex)];
                newDescription = links[0].input!;
                newDescription_es = links_es[0].input!;
                
                links.forEach((e) => {
                  newDescription = stringToLink(e, newDescription);
                });
                links_es.forEach((e) => {
                  newDescription_es = stringToLink(e, newDescription_es);
                }
                );
                
              }
              return (
                <li key={e.id}>
                  <div className="projectText">
                    <h3>{language === "en" ? e.name : e.name_es || e.name}</h3>
                    <div className="projectDescription">
                      {language === "en"
                        ? newDescription! && newDescription.length
                          ? Parser(newDescription)
                          : e.description
                        : newDescription_es! && newDescription_es.length
                        ? Parser(newDescription_es):e.description_es || e.description}
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
              );
            })}
        </ul>
      </div>
    </StyledProjects>
  );
};
