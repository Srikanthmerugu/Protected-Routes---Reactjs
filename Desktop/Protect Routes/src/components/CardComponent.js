import React from 'react';
import ButtonComponent from './ButtonComponent'; // Import the button component

const CardComponent = ({ imgSrc, title, description, buttonText }) => {
    return (
        <div className="card">
            <div className="card-component-img">
                <img
                    src={imgSrc} // Use imgSrc prop for dynamic image URL
                    alt={title} // Use title as alt text for better accessibility
                    className="img-fluid rounded"
                />
            </div>
            <div className="content">
                <h3>{title}</h3> {/* Use title prop for dynamic card title */}
                <p className="para">
                    {description} {/* Use description prop for dynamic text content */}
                </p>
            </div>
            <div className="card-button">
                <ButtonComponent>{buttonText}</ButtonComponent> {/* Use buttonText prop for dynamic button text */}
            </div>

            
        </div>
    );
};

// Provide default values for the props to ensure the component has some default content
CardComponent.defaultProps = {
    imgSrc: 'https://img.freepik.com/free-photo/adorable-boy-fantasy-world_23-2151732324.jpg?t=st=1724490875~exp=1724494475~hmac=f2f5580db9fdf3ba9020aec53eb4abe171abf7edbb0070180618883a13076929&w=740',
    title: 'Default Card Title',
    description: 'This is a default description for the card. Customize it by passing a description prop.',
    buttonText: 'Learn More'
};

export default CardComponent;
