import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  return(
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
  
}

const Message = (props) => {
  return <div className='message'>{props.message}</div>
}

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}> 

          {
            dialogsElements
          } 

      </div>
      <div className='messages'>
        {
          messagesElements
        }
      </div>
    </div>
  )
}

export default Dialogs;