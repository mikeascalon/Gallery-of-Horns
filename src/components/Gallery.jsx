

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.json'
import HornedBeast from './HornedBeast';


function Gallery(props) {

    return (
        <>
            <h2>{props.message}</h2>
            <Container>
                <Row xs={1} md={3}>
                    {data.map((beast, idx) => (
                        <Col>
                            <HornedBeast
                                key={idx}
                                beastId={beast._id}
                                image_url={beast.image_url}
                                title={beast.title}
                                description={beast.description}
                                keyword={beast.keyword}
                                horns={beast.horns}
                            />
                        </Col>

                    ))}
                </Row>
            </Container>

        </>
    );
}




export default Gallery;