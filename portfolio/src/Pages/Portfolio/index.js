//add Nav aboutMe & footer components in side the return

import portfolioData from "../../portfolioData";
import { Card, CardDeck, Row, Col } from "react-bootstrap";
import "./style.scss";

// import ProjectCard from '../components/ProjectCard'

function PortfolioPage() {
  const portfolioDataBatches = () => {
    const size = 3;
    let batchedArray = [];
    for (var i = 0; i < portfolioData.length; i += size) {
      batchedArray.push(portfolioData.slice(i, i + size));
    }
    return batchedArray;
  };
  return (
    // <Container id="portfolio">
      <CardDeck id="portfolio">
        {portfolioDataBatches().map((batch, index) => {
          return (
            <Row>
              {batch.map((project, idx) => {
                console.log("p: ", project, idx);
                return (
                  <Col>
                    <Card key={idx}>
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                      />
                      <Card.Body>
                        <Card.Text>{project.project}</Card.Text>
                        <Card.Title>{project.title}</Card.Title>
                        {/* <Card.Text><a href={project.repo}>{project}</a></Card.Text> */}
                        <Card.Text>{project.text}</Card.Text>
                        <Card.Footer>
                          <small className="text-muted">
                            Learn more about {project.title} @{" "}
                            <a
                              href={`${project.repo}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {"project.repo"}
                            </a>
                          </small>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </CardDeck>
    // </Container>
  );
}

export default PortfolioPage;
