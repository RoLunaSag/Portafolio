import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const Loader = ({ color = '#FFF' }) => {
    const animations = [
        'animate-bounce-fast',
        'animate-bounce-normal',
        'animate-bounce-slow',
        'animate-bounce-deliberate',
        'animate-bounce-heavy',
    ];

    return (
        <div className="flex flex-row space-x-2">
            {animations.map((animation, index) => (
                <div key={index} className={animation}>
                    <Icon iconName="FaCircle" color={color} size={12} />
                </div>
            ))}
        </div>
    );
};

Loader.propTypes = {
    color: PropTypes.string,
};

export default Loader;
