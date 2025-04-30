import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './Buttons';

const ProjectBox = ({ images = [], title, descr, onClick, withRepo }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setCurrent(i => (i === images.length - 1 ? 0 : i + 1))

    useEffect(() => {
        if (images.length > 1) {
            const id = setInterval(() => {
                setCurrent(i => (i === images.length - 1 ? 0 : i + 1));
            }, 3000);
            return () => clearInterval(id);
        }
    }, [images]);

    return (
        <div
            className={`flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-500 ease-in-out cursor-pointer w-full md:w-fit`}
            onClick={() => setShowDetails(!showDetails)}
        >
            <div className="relative w-full max-w-[320px] overflow-hidden">
                {images.length > 1 ? <>
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((src, idx) => (
                            <img
                                key={idx}
                                src={require(`../${src}`)}
                                alt={`${title}-${idx}`}
                                className="w-full flex-shrink-0 object-cover h-64 rounded-xl mt-2"
                            />
                        ))}
                    </div>
                    <div
                        className="absolute left-2 top-1/2">
                        <ButtonComponent
                            variant='only-icon'
                            sizeIcon={20}
                            iconName={'FaAngleLeft'}
                            onClick={() => prev()}
                            colorIcon={"#FFF"}
                        />
                    </div>
                    <div
                        className="absolute right-2 top-1/2">
                        <ButtonComponent
                            variant='only-icon'
                            sizeIcon={20}
                            iconName={'FaAngleRight'}
                            onClick={() => next()}
                            colorIcon={"#FFF"}
                        />
                    </div></> :
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        <img
                            src={images[0]}
                            alt={`${title}`}
                            className="w-full flex-shrink-0 object-cover h-64 rounded-xl mt-2"
                        />
                    </div>
                }
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
                    {withRepo && <div className='w-60 md:w-56 h-10'>
                        <ButtonComponent
                            onClick={onClick}
                            variant='with-icon-right'
                            iconName="FaGithubAlt"
                            text='Ver repositorio'
                            colorIcon={"#FFF"}
                        />
                    </div>}
                </div>
            </div>
        </div>
    );
}

ProjectBox.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    descr: PropTypes.string,
    withRepo: PropTypes.bool,
}

ProjectBox.defaultProps = {
    images: [],
    descr: '',
    withRepo: false,
}

export default ProjectBox;
