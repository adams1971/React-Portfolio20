import { Card } from 'react-bootstrap';

//Sara need props??
function ProjectCard(){
//create folder w/ images and link using process.env
    return(
        <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt='add tect'/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>


        </Card>
    )
}


export default ProjectCard