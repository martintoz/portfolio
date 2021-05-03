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
      <h2>About me</h2>
      <ul>
        <li>
          🚀 Frontend Developer, soyHenry.com graduate with more than 800
          training hours.
        </li>
        <li>
          📖 Bilingual in Spanish and English and graduated from UADE with a
          bachelor's degree in Advertising.
        </li>
        <li>
          💻 9 years of work experience in web design and online communication.
          Freelance translator for 10 years.
        </li>
      </ul>
      <h3>Skills</h3>
      <ul className="skills">
        {skills.map((e, i) => (
          <li key={i}>
            {e}
          </li>
        ))}
      </ul>
    </StyledAboutMe>
  );
};
