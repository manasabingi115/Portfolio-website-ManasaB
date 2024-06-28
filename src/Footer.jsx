import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/manasa-bingi-912723227/"
        className="s_media_link"
      >
        <FaLinkedinIn size={18} className="footer_icon" title="LinkedIn" />
      </a>
      <a href="mailto:manasabingi115@gmail.com" className="s_media_link">
        <IoLogoGoogle size={18} className="footer_icon" title="Gmail" />
      </a>
      <a href="https://github.com/manasabingi115" className="s_media_link">
        <TbBrandGithubFilled size={18} className="footer_icon" title="Github" />
      </a>
    </div>
  );
}

export default Footer;
