/* eslint-disable react/jsx-key */

import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.json'
import HornedBeast from './HornedBeast';
import Filter from './filter'


function Gallery(props) {
    const [selectedHorns, setSelectedHorns] = useState(null)

    const handleHornFilter = (horns) => {
        setSelectedHorns(horns);
    };

    return (
        <>
            <h2>{props.message}</h2>
            <Filter onFilterChange={handleHornFilter} />
            <Container>
                <Row xs={1} md={3}>
                    {data.filter((beast) => selectedHorns === null ? true : beast.horns === selectedHorns)
                        .map((beast, idx) => (
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