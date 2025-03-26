import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Buttons';

const ProjectBox = ({ image, title, descr, onClick }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className={`flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-500 ease-in-out cursor-pointer w-full md:w-fit`}
            onClick={() => setShowDetails(!showDetails)}
        >
            <div className='flex justify-center m-5 w-full md:w-auto max-w-[320px] aspect-square overflow-hidden'>
                <img
                    className="rounded-2xl object-cover w-11/12 md:w-full h-full max-w-[320px] max-h-[320px]"
                    src={image}
                    alt="img"
                />
            </div>
            <div className='flex flex-col mb-5 ml-2 mr-2'>
                <p className={`font-bold text-black text-lg md:text-2xl ${showDetails && 'ml-0'}`}>
                    {title}
                </p>
                <div
                    className={`flex flex-col md:w-80 transform transition-all duration-700 ease-in-out ${showDetails ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                        }`}
                    style={{ overflow: 'hidden' }}
                >
                    <p className='font-normal text-black text-sm md:text-base mt-5 mb-10'>{descr}</p>
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
