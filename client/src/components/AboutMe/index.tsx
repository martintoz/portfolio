import { StyledAboutMe } from "./StyledAboutMe";

const skills = [
  "JavaScript",
  "CSS",
  "Sass",
  "React",
  "Redux",
  "Express",
  "Sequelize",
  "PostgreSQL",
  "HTML",
  "TypeScript",
  "Apollo GraphQL",
  "Node.js",
  "Git",
  "Figma",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe After Effects",
  "Adobe Premiere Pro",
];
export const AboutMe = () => {
  return (
    <StyledAboutMe id="aboutMe">
      <div className="parallax">
        <h2>About me</h2>
        <ul className="bio">
          <li>
            🚀 Frontend Developer,{" "}
            <a
              href="https://soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              soyHenry.com
            </a>{" "}
            graduate with more than 800 training hours.
          </li>
          <li>
            📖 Bilingual in Spanish and English. Graduated from UADE with a
            bachelor's degree in Advertising.
          </li>
          <li>
            💻 9 years of work experience in web design and online
            communication. Freelance translator for 10 years.
          </li>
        </ul>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
        <a
          href="https://github.com/martintoz/portfolio/files/6435093/MartinTozer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button>Download Resume</button>
        </a>
      </div>
    </StyledAboutMe>
  );
};
