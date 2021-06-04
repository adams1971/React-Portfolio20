import portfolioData from "../../portfolioData";
import { Card, CardDeck, Row, Col } from "react-bootstrap";
import "./style.scss";

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
      <CardDeck id="portfolio" style={{height: 'auto', backgroundPosition: 'center',backgroundRepeat: 'no-reopeat', backgroundSize: 'cover', backgroundImage: `url(${process.env.PUBLIC_URL}/oceanBG3.jpg`}}>
        {portfolioDataBatches().map((batch, index) => {
          return (
            <Row>
              {batch.map((project, idx) => {
                console.log("p: ", project, idx);
                return (
                  <Col>
                  <br />
                  <br />
                    <Card key={idx}>
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                      />
                      <Card.Body>
                        <Card.Text>{project.project}</Card.Text>
                        <Card.Title>{project.title}</Card.Title>
                        
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
                            <br />
                            <a href={`${project.deployed}`}
                                target="_blank"
                                rel="noreferre"
                                >
                                  {"project.deployed"}
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
        <br />
        <br />
      </CardDeck>
    // </Container>
  );
}

export default PortfolioPage;
