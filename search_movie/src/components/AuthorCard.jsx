import React from 'react';
import Avatar from '../img/avatar.jpg';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const AuthorCard = () => {
    return (
        <div className="authorCard">
            <div className="imgWrapp">
                <ul className='authorSocial'>
                    <li><a href='https://github.com/MilosRistic1987' target='_blank' rel="noopener noreferrer"><FaGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/milos-ristic-410b95195/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a></li>
                    </ul>
                <img src={Avatar} alt='avatar' />
            </div>
            <div className="authorCardInfo">
                <div >
                    <h1>Milos Ristic</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
        </div>

    )
}

export default AuthorCard
