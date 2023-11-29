import Image from 'react-bootstrap/Image';


function BeastImage(props) {
    return (
        <div>
            <Image src={props.image_url} alt="some horned beast" rounded fluid></Image>
        </div>
    )
}

export default BeastImage;