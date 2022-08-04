import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function footer(){
    return (
        <div className='footer'>
            <div>
                <a href='https://github.com/HGuevaraCF' target={'_blank'} rel={'noreferrer'}><FaGithub size={30} /></a><a href='https://www.linkedin.com/in/hectorguevara2018' target={'_blank'} rel={'noreferrer'}><FaLinkedin size={30}/></a><a href='https://stackoverflow.com/' target={'_blank'} rel={'noreferrer'}><FaStackOverflow size={30}/></a>
            </div>
        </div>
    )
}
export default footer;