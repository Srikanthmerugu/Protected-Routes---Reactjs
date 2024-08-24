import React from 'react'; 

const ButtonComponent = ({ children, type }) => {
    return (
        <button type={type} className="animated-button">
            {children}
        </button>
    );
};

export default ButtonComponent;
