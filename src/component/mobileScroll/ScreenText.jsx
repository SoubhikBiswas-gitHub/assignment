import React from 'react'

const ScreenText = ({data,index,setImgIndex} ) => {
  return (
    <div className='screen-text'>
        <div className="screen-heading"></div>
        <div className="only-mobile mobile-wrapper">
        <div className="mobile">
          <div className="mobile-screen flex absolute-center">
            <img
              src={data.imgURL}
              alt="img"
              className="mobile-img slide-in-right"
            />
          </div>
        </div>
        </div>
        <div className='screen-description'>
            {data.description}
        </div>
    </div>
  )
}

export default ScreenText