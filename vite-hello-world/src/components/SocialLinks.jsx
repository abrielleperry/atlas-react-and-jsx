import LinkedIn from "../assets/linkedin.svg"
import Github from "../assets/github.svg"


function SocialLinks() {
  return (
    <div className="social-links">
      <Link to="www.linkedin.com/in/abriellerperry">
      <Image src={LinkedIn} alt="linkedin" />
      </Link>
      <Link to="https://github.com/abrielleperry">
      <Image src={Github} alt="github" />
      </Link>
    </div>
  )
}

export default SocialLinks;
