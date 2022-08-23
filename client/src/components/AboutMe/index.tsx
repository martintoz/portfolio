import { StyledAboutMe } from "./StyledAboutMe";
import { T } from "../T";
import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

const skills = [
  "JavaScript",
  "CSS / Sass",
  "React",
  "Redux",
  "TypeScript",
  "Apollo GraphQL",
  "Node.js",
  "Git",
  "HTML",
  "Express",
  "Sequelize",
  "PostgreSQL",
  "Next.js",
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
  "Adobe Premiere Pro",
];
export const AboutMe = () => {
  const { language } = useContext(LanguageContext);
  const cvEn = "https://github.com/martintoz/portfolio/files/9402741/MartinTozer_Resume.pdf"
  const cvEs = "https://github.com/martintoz/portfolio/files/9402738/MartinTozer_CV.pdf"
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
