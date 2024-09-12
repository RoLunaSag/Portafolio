import React from 'react'
import { Loader } from '../components'

const LoadingScreen = () => {
  return (
    <div className="flex absolute inset-0 justify-center items-center h-screen w-screen bg-gray-800">
      <Loader color={'#FFF'} />
    </div>
  )
};

export default LoadingScreen;
