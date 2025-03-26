import React from 'react';
import PropTypes from 'prop-types';
import IconComponent from './Icon';

const ButtonComponent = ({
    onClick,
    variant,
    text,
    iconName,
    sizeIcon,
    backgroundColor,
    textColor,
    textSize,
    colorIcon,
}) => {
    const isTransparent = variant === 'transparent';
    const isIconOnly = variant === 'only-icon';
    const iconPosition = variant === 'with-icon-left' ? 'left' : variant === 'with-icon-right' ? 'right' : null;

    return (
        <ButtonBase
            onClick={onClick}
            text={text}
            iconName={iconName}
            sizeIcon={sizeIcon}
            transparent={isTransparent}
            iconOnly={isIconOnly}
            iconPosition={iconPosition}
            backgroundColor={backgroundColor}
            textColor={textColor}
            textSize={textSize}
            colorIcon={colorIcon}
        />
    );
};

// Componente base que maneja las variantes y colores dinámicos
const ButtonBase = ({
    onClick,
    text,
    iconName,
    sizeIcon,
    transparent,
    iconOnly,
    iconPosition,
    backgroundColor,
    textColor,
    textSize,
    colorIcon,
}) => {
    const baseClasses = "flex items-center justify-center rounded-full drop-shadow-md hover:opacity-15";
    const bgColor = transparent ? 'bg-transparent border border-slate-600 w-full h-full' : backgroundColor || 'bg-slate-600';
    const roundedClass = iconOnly ? 'rounded-full w-full h-full' : 'rounded-md w-full h-full';
    const paddingClass = iconOnly ? 'p-2' : 'px-8 py-4';
    const textClasses = `${textSize || 'text-sm'} ${textColor || 'text-white'} font-semibold`;

    return (
        <button
            className={`${baseClasses} ${bgColor} ${roundedClass} ${paddingClass}`}
            onClick={onClick}
        >
            {iconPosition === 'left' && (
                <div className="mx-2 ">
                    <IconComponent iconName={iconName} size={sizeIcon} colorIcon={colorIcon} />
                </div>
            )}
            {!iconOnly && <p className={textClasses}>{text}</p>}
            {iconPosition === 'right' && (
                <div className="mx-2 ">
                    <IconComponent iconName={iconName} size={sizeIcon} colorIcon={colorIcon} />
                </div>
            )}
            {iconOnly && (
                <IconComponent iconName={iconName} size={sizeIcon} colorIcon={colorIcon} />
            )}
        </button>
    );
};

ButtonBase.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    iconName: PropTypes.string,
    sizeIcon: PropTypes.number,
    transparent: PropTypes.bool,
    iconOnly: PropTypes.bool,
    iconPosition: PropTypes.oneOf(['left', 'right', null]),
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.string,
    colorIcon: PropTypes.string,
};

// PropTypes del componente principal
ButtonComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['basic', 'transparent', 'with-icon-left', 'with-icon-right', 'only-icon']).isRequired,
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string,
    sizeIcon: PropTypes.number,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.string,
    colorIcon: PropTypes.string,
};

export default ButtonComponent;
