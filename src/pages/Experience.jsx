import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiDart } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2024 - July 2024"
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<SiDart />}
                >
                <h3 className="vertical-timeline-element-title">Mobile App Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Campus Projects</h4>
                <p>
                    Develop Smart Thermometer Mobile Aplication Leveraging IoT System with Flutter Framework and Dart programming language.
                </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Agustus 2023 - Desember 2023"
                    iconStyle={{ background: '#6d6d6d', color: '#fff' }}
                    icon={<SiAdobepremierepro />}
                >
                <h3 className="vertical-timeline-element-title">Short Video Project</h3>
                <h4 className="vertical-timeline-element-subtitle">Campus Project</h4>
                <p>
                    Making Short Video about "Video Pembelajaran Project Base Learning di Prodi Teknologi Rekayasa Multimedia.
                </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2023 - July 2023"
                    iconStyle={{ background: '#e9d35b', color: '#fff' }}
                    icon={<FaLaravel />}
                >
                <h3 className="vertical-timeline-element-title">Web Development</h3>
                <h4 className="vertical-timeline-element-subtitle">Campus Projects</h4>
                <p>
                    Develop website "Aplikasi Web Sistem Informasi Absensi Siswa" with Laravel Framework.
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experience