import React from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa'; // Importa todos los iconos de Font Awesome

const IconComponent = ({ iconName, size = 28, colorIcon }) => {
    // Selecciona el ícono basado en el nombre proporcionado de Font Awesome ===> https://react-icons.github.io/react-icons/icons/fa/
    const Icon = FaIcons[iconName];

    // Si el ícono no existe da este mensaje por default
    if (!Icon) {
        return (<div>
            <p className='font-bold text-xs'>
                {"xD no icon here"}
            </p>
        </div>);
    }
    return (
        <div>
            <Icon size={size} color={colorIcon} />
        </div>
    );
};

IconComponent.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.number,
    colorIcon: PropTypes.string,
};

export default IconComponent;
