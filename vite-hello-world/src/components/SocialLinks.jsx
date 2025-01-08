import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"


function SocialLinks() {
  return (
    <div className="social-links">
      <a href="www.linkedin.com/in/abriellerperry">
      <img src={LinkedIn} alt="linkedin" />
      </a>
      <a href="https://github.com/abrielleperry">
      <img src={Github} alt="github" />
      </a>
    </div>
  )
}

export default SocialLinks;
