import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Buttons';

const ProjectBox = ({ image, title, descr, onClick }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className={`flex ${showDetails ? 'md:flex-row flex-col' : 'flex-col'} z-20 items-center bg-blue-web-600 rounded-2xl drop-shadow-md`}
            onClick={() => setShowDetails(!showDetails)}
        >
            <div className='m-5'>
                <img className='rounded-2xl' width={320} height={320} src={image} alt="img" />
            </div>
            <div className='mb-5'>
                <p className={`font-bold text-black text-lg md:text-2xl ml-5 ${showDetails && 'ml-0'}`}>
                    {title}
                </p>
                <div
                    className={`flex flex-col w-full items-center md:w-80 transition-all duration-700 ease-in-out ${showDetails ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ overflow: 'hidden' }}
                >
                    <p className='font-normal text-black text-sm md:text-base mt-5 mb-10 ml-5 mr-5'>{descr}</p>
                    <div className='w-60 md:w-56 h-10'>
                        <ButtonComponent
                            onClick={onClick}
                            variant='with-icon-right'
                            iconName="FaGithubAlt"
                            text='Ver repositorio'
                            colorIcon={"#FFF"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

ProjectBox.propTypes = {
    onClick: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descr: PropTypes.string,
}

export default ProjectBox;
