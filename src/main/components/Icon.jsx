import React from 'react';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa'; // Importa todos los iconos de Font Awesome

const IconComponent = ({ iconName, size = 28 }) => {
    // Selecciona el ícono basado en el nombre proporcionado
    const Icon = FaIcons[iconName];

    // Si el ícono no existe, puedes mostrar un mensaje de error o un ícono por defecto
    if (!Icon) {
        return (<div>
            <p className='font-bold text-xs'>
                {"xD no icon here bitch"}
            </p>
        </div>);
    }
    return (
        <div>
            <Icon size={size} />
        </div>
    );
};

IconComponent.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.number,
};

export default IconComponent;
