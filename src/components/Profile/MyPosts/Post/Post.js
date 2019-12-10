import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (    
    <div className={classes.item}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
      {props.message}
      <div>
        <span>Like {props.like_counts}</span>
      </div>
    </div>
  )
}
  
  export default Post;