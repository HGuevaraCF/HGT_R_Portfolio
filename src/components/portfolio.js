import Project from './project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import noteTaker from '../img/noteTaker.png';
import nurseXpress from '../img/nurseXpress.png';
import passwordGenerator from '../img/passwordGenerator.png';
import quiz from '../img/quiz.png';
import weatherDashboard from '../img/weatherDashboard.png';
import wolfinance from '../img/wolfinance.png';

function Portfolio() {
    return (
      <Container>
        <h1>Portfolio</h1>
        <Row style={{
          justifyContent: 'center'
        }}>
          <Project route="https://glacial-inlet-53631.herokuapp.com/" repo="https://github.com/HGuevaraCF/NoteTaker" imgroute={noteTaker} name="Note Taker"/>
          <Project route="https://aeklf.github.io/NurseXpress/" repo="https://github.com/HGuevaraCF/NurseXpress" imgroute={nurseXpress} name="NurseXpress"/>
          <Project route="https://hguevaracf.github.io/password-generator/" repo="https://github.com/HGuevaraCF/password-generator" imgroute={passwordGenerator} name="Password Generator"/>
          <Project route="https://hguevaracf.github.io/code_quiz/" repo="https://github.com/HGuevaraCF/code_quiz" imgroute={quiz} name="Code Quiz"/>
          <Project route="https://hguevaracf.github.io/weatherDashboard/" repo="https://github.com/HGuevaraCF/weatherDashboard" imgroute={weatherDashboard} name="Weather Dashboard"/>
          <Project route="https://hguevaracf.github.io/proyecto1/" repo="https://github.com/HGuevaraCF/proyecto1" imgroute={wolfinance} name="Wolfinance"/>
        </Row>
      </Container>
    )
}

export default Portfolio;