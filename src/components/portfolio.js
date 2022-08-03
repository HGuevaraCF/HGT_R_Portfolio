import Project from './project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
    return (
      <Container>
        <Row style={{
          justifyContent: 'center'
        }}>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </Row>
      </Container>
    )
}

export default Portfolio;