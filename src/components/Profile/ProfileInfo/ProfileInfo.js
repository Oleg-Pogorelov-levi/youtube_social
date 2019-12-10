import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className='content'>
      <div>
          <img src='http://www.pepsico.ru/images/librariesprovider35/home-page-carousel/homepagecarouselbackground1.jpg?sfvrsn=6' />
      </div>
      <div className={classes.description}>
          ava + description
      </div>
    </div>
  )
}
  
  export default ProfileInfo;