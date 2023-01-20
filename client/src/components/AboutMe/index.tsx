import { StyledAboutMe } from "./StyledAboutMe";
import { T } from "../T";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "CSS / Sass",
  "Redux / NgRx",
  "Jest",
  "Node.js",
  "Git",
  "Apollo GraphQL",
  "HTML",
  "Express",
  "Sequelize",
  "PostgreSQL",
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
];
export const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  const cvEn = "https://github.com/martintoz/portfolio/files/10468316/MartinTozer_Resume_AR.pdf"
  const cvEs = "https://github.com/martintoz/portfolio/files/10468315/MartinTozer_CV_AR.pdf"
  return (
    <StyledAboutMe id="aboutMe">
      <div className="parallax">
        <h2>
          <T>aboutMe</T>
        </h2>
        <ul className="bio">
          <li>
            🚀 <T>job</T>, <T>graduated</T>{" "}
            <a
              href="https://soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              soyHenry.com
            </a>{" "}
            <T>bio1</T>
          </li>
          <li>
            📖 <T>bio2</T>
          </li>
          <li>
            💻 <T>bio3</T>
          </li>
        </ul>
        <div className="skills">
          <h3>
            <T>skills</T>
          </h3>
          <ul>
            {skills.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
        <a
          href={language === "en" ? cvEn : cvEs
          }
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button>
            <T>downloadResume</T>
          </button>
        </a>
      </div>
    </StyledAboutMe>
  );
};
