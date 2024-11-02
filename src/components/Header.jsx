import profilePictures from '../assets/profile-pictures.png'
import '../styles/Header.css'
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePictures} />
            <h3>Santi Herawati Sitompul</h3>
            <p>UI/UX Designer - Video Editor</p>
            <div className='socialMedia'>
              <a href="https://www.instagram.com/santi_sitompul96?igsh=ZnU2a2F4YTZ1Y2pl" target='_blank'><FaInstagram /></a>
              <a href="santi.tompul96@gmail.com"><CgMail /></a>
              <a href="https://www.tiktok.com/@luckyperson01_?_t=8qyjh4UTrIe&_r=1" target='_blank'><FaTiktok /></a>
              <a href="https://www.linkedin.com/in/santi-herawati-sitompul/" target='_blank'><FaLinkedin /></a>
            </div>
        </div>

    </header>
  )
}

export default Header