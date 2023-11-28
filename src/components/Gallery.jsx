
// import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Gallery(props) {

    return (
        <>
            <h2>{props.message}</h2>
            <Container>
                <Row>
                    <Col>
                        <BeastImage image_url={props.allBeastData[0].image_url}/>
                    </Col>
                    <Col>
                        <BeastImage image_url={props.allBeastData[1].image_url}/>
                    </Col>
                    <Col>
                        <BeastImage image_url={props.allBeastData[2].image_url}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BeastImage image_url={props.allBeastData[3].image_url}/>
                    </Col>
                    <Col>
                        <BeastImage image_url={props.allBeastData[4].image_url}/>
                    </Col>
                    <Col>
                        <BeastImage image_url={props.allBeastData[5].image_url}/>
                    </Col>
                </Row>
                


            </Container>
           
        </>
    );
}


function BeastImage(props){
    return (
        <div>
            <Image src={props.image_url} alt="some horned beast" rounded fluid></Image>
        </div>
    )
}


export default Gallery;