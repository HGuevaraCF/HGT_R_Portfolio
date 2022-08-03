
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';
import img from '../img/wolfinance.png';


function Project() {
    const [isShown, setIsShown] = useState(false);
    return (
        <Container onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                borderRadius: '1rem',
                margin: '1rem',
                width: '18rem',
                height: '10rem',
                padding: '0px'

            }}>
            <div style={{
                height: '100%',
                width: '110%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                visibility: isShown ? 'visible' : 'hidden',
                opacity: isShown ? '1' : '0',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                transition: 'opacity 1500ms'
            }}>
                <p><a href='#' style={{ textDecoration: 'none', color: 'black' }}>Project name</a> | <a href='#'><FaGithub /></a></p>
            </div>
        </Container>
    )
}

export default Project;