import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">George Saldivar</span> <br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating.<br />I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
        </section>
    );
}

export default Intro;