import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"


function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/abriellerperry" target="_blank">
      <img src={LinkedIn} alt="linkedin" />
      </a>
      <a href="https://github.com/abrielleperry/atlas-react-and-jsx/tree/main/vite-hello-world" target="_blank">
      <img src={Github} alt="github" />
      </a>
    </div>
  )
}

export default SocialLinks;
