import React from 'react'
import Button from './Buttons'
import { GiSawedOffShotgun } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const BottomBar = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 left-0 w-full h-14 bg-blue-web-900 text-white z-20 flex justify-center items-center">
            <div className='flex flex-row w-2/5 justify-between'>
                <div className='w-10 h-10'>
                    <Button
                        onClick={() => (window.location.href = "https://www.linkedin.com/in/rodrigo-luna-516852150")}
                        variant={'only-icon'}
                        iconName={'FaLinkedinIn'}
                        sizeIcon={26}
                        backgroundColor={"bg-blue-web-800"}
                        colorIcon={"#FFF"}
                    />
                </div>
                <div className='w-10 h-10'>
                    <Button
                        onClick={() => console.log("Click")}
                        variant={'only-icon'}
                        iconName={'FaGithubAlt'}
                        sizeIcon={26}
                        backgroundColor={"bg-blue-web-800"}
                        colorIcon={"#FFF"}
                    />
                </div>
                <div className='w-10 h-10'>
                    <Button
                        onClick={() => console.log("Click WhatsApp")}
                        variant={'only-icon'}
                        iconName={'FaWhatsapp'}
                        sizeIcon={26}
                        backgroundColor={"bg-blue-web-800"}
                        colorIcon={"#FFF"}
                    />
                </div>
                <div className='flex bg-blue-web-800 w-10 h-10 items-center justify-center rounded-full drop-shadow-md hover:opacity-15'>
                    <GiSawedOffShotgun size={26} color='#FFF' />
                </div>
            </div>
        </div>
    )
}

export default BottomBar
