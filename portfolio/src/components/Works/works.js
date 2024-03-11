import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.PNG';
import Portfolio2 from '../../assets/portfolio-2.PNG';
import Portfolio3 from '../../assets/portfolio-3.PNG';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I developed a series of JavaScript projects including a simple calculator, a countdown timer, and a basic counter application. The calculator allows users to perform arithmetic operations such as addition, subtraction, multiplication, and division through a clean and intuitive interface. The countdown timer enables users to set specific durations and counts down to zero, featuring start, pause, and reset functionalities. Additionally, the counter application allows users to increment or decrement counts with real-time updates and includes a reset option. These projects were implemented using HTML, CSS, and JavaScript to provide practical solutions for everyday tasks.</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
               </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;