import React from 'react';
import './skills.css';

import Resume1 from '../../assets/Resume1.PNG';
import Resume2 from '../../assets/Resume2.PNG';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About me</span>
            <span className="skillDesc">I am a dedicated and creative web developer with a passion for building elegant and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver high-quality solutions that meet the needs of my clients. I am committed to continuous learning and staying updated with the latest technologies to ensure that my work remains innovative and impactful.</span>
            <div className="skillBars">
            <div className="resume-images">
                <div className="resume-image">
                    <img src={Resume1} alt="Resume 1" className="Resume1.PNG" />
                </div>
                <div className="resume-image">
                    <img src={Resume2} alt="Resume 2" className="Resume2.PNG" />
                </div> 
                </div>
            </div>
        </section>
    );
}

export default Skills;
