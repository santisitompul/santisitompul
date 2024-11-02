import { useState } from 'react'
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu() {
        if(statusTampil ==''){
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">Portofolio</Link>
                </div>
                <button onClick={tampilMenu}>
                    {
                        statusTampil == ''?(<FaBars />) : (<IoClose />)
                    }

                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li><HashLink to={"/#latestProject"}>Latest Project</HashLink></li>
                        <li><HashLink to={"/#about"}>About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar