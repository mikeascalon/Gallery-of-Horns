import { useState } from 'react'

function HornedBeast(props) {

    // State to keep track of the number of favorites
    const [favorites, setFavorites] = useState(0);

    // Function to handle the click on the heart icon
    const handleFavoriteClick = () => {
        setFavorites(favorites + 1);
    };


    return (
        <div >
            <h2>{props.title}</h2>
            <img src={props.image_url} alt={props.title} width='250px' height='250px'  />
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

        </div>
    );
}

export default HornedBeast;

