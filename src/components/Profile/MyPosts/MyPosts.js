import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postElement = props.posts.map( p => {
    return <Post message={p.message} like_counts={p.like_counts} />
  })

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
      <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          {postElement}
        </div>
      </div>
  )
}
  
  export default MyPosts;