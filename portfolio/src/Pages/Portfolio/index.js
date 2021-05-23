//add Nav aboutMe & footer components in side the return

import portfolioData from '../../portfolioData';
// import { Container, CardDeck } from 'react-bootstrap';
// import ProjectCard from '../components/ProjectCard'

function PortfolioPage() {
    return (
        <div>
            {
                portfolioData.map(project => {
                    console.log('p: ', project)
                    return(
                        <div key={project.id}>
                            <p>{project.project}</p>
                        </div>
                    )
                })
            }
        </div>
        
    )

}

export default PortfolioPage

//with jasons help
{/* <div>
            {
                portfolioData.map(project => {
                    console.log('p: ', project)
                    return(
                        <div key={project.id}>
                            <p>{project.project}</p>
                        </div>
                    )
                })
            }
        </div> */}

        // some styling that could be used later
        // <Container id='portfolio'>
        //     <CardDeck style={{ marginTop: '12px', marginLeft: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gridGap: '.5rem'}}>
        //         {portfolioData.map(project => (
        //             <ProjectCard
        //                 key={project.id}

        //             />
        //         ))}

        //     </CardDeck>

        // </Container>