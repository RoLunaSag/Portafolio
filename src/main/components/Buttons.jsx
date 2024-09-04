import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from './Icon';

const ButtonComponent = ({ onClick, variant, text, sizeIcon, iconName }) => {
    switch (variant) {
        case 'basic':
            return (
                <button
                    className="flex justify-center items-center bg-slate-600 rounded-md drop-shadow-md active:bg-slate-700 active:scale-95 transition-transform animate-bounce"
                    onClick={onClick}
                >
                    <p className={`font-semibold px-8 py-4 text-white text-sm`}>{text}</p>
                </button>
            );
        case 'transparent':
            return (
                <button
                    className="flex justify-center items-center bg-transparent border border-slate-600 rounded-md drop-shadow-md active:bg-slate-200 active:scale-95 transition-transform animate-bounce"
                    onClick={onClick}
                >
                    <p className={`font-semibold px-8 py-4 text-white text-sm`}>{text}</p>
                </button>
            );
        case 'with-icon-left':
            return (
                <button
                    className="flex items-center bg-slate-600 rounded-md drop-shadow-md active:bg-slate-700 active:scale-95 transition-transform animate-bounce"
                    onClick={onClick}
                >
                    <div className='ml-6'>
                    <IconComponent iconName={iconName} size={sizeIcon}/>
                    </div>
                    <p className={`font-semibold px-8 py-4 text-white text-sm`}>{text}</p>
                </button>
            );
        case 'with-icon-right':
            return (
                <button
                    className="flex items-center bg-slate-600 rounded-md drop-shadow-md active:bg-slate-700 active:scale-95 transition-transform animate-bounce"
                    onClick={onClick}
                >
                    <p className={`font-semibold px-8 py-4 text-white text-sm`}>{text}</p>
                    <IconComponent iconName={iconName} size={sizeIcon} />
                </button>
            );
        case 'only-icon':
            return (
                <button
                    className="flex justify-center items-center bg-slate-600 rounded-full drop-shadow-md active:bg-slate-700 active:scale-95 transition-transform animate-bounce"
                    onClick={onClick}
                >
                    <div className='m-1'>
                        <IconComponent iconName={iconName} size={sizeIcon} />
                    </div>
                </button>
            );
        default:
            return null;
    }
};

ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['basic', 'transparent', 'with-icon-left', 'with-icon-right', 'only-icon']).isRequired,
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string,
    sizeIcon: PropTypes.number,
};

export default ButtonComponent;
