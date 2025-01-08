import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"


function SocialLinks() {
  return (
    <div className="social-links">
      <link href="www.linkedin.com/in/abriellerperry">
      <img src={LinkedIn} alt="linkedin" />
      </link>
      <link href="https://github.com/abrielleperry">
      <img src={Github} alt="github" />
      </link>
    </div>
  )
}

export default SocialLinks;
