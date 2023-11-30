/* eslint-disable react/prop-types */
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


function HornedBeast(props) {

    // State to keep track of the number of favorites
    const [favorites, setFavorites] = useState(0);

     // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

    // Function to handle the click on the heart icon
    const handleFavoriteClick = () => {
        setFavorites(favorites + 1);
    };

    const handleImgClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div >
            <h2>{props.title}</h2>
            <img src={props.image_url} alt={props.title} width='250px' height='250px' onClick={handleImgClick} />
            <p>{props.description}</p>

            {/* Heart icon with the number of favorites */}
            <div>
                <span
                    role="img"
                    aria-label="heart"
                    style={{ cursor: 'pointer' }}
                    onClick={handleFavoriteClick}
                >
                    ❤️
                </span>{' '}
                {favorites} Favorites
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.image_url} alt={props.title} width='100%' height='auto' />
                    <p>{props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HornedBeast;

