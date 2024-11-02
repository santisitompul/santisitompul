import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";


function About() {
  return (
    <section id='about'>
        <div className="wrapper">
            <h3>About Me</h3>
            <p>A Multimedia Engineering Technology student who has a strong interest in the field of Purchasing Officer and also a strong Multimedia background makes me a person who is meticulous, creative, and also enjoys facing new challenges.</p>
            <h4>Programing Language & Tools</h4>
            <div className='skills'>
                <FaHtml5 />
                <FaCss3Alt />
                <SiDart />
                <FaLaravel />
                <FaPhp />
            </div>
        </div>
    </section>
  )
}

export default About