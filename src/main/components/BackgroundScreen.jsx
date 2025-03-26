import React from 'react'
import PropTypes from 'prop-types'

const BackgroundScreen = ({bgimage}) => {

  return (
    <div className={`fixed inset-0 ${bgimage} bg-cover bg-center`}>
        <div className={'absolute inset-0 bg-blue-web-900 bg-opacity-50'} />
    </div>
  )
}

BackgroundScreen.propTypes = {
    bgimage: PropTypes.string.isRequired,
}

export default BackgroundScreen
