import React from 'react'
import {connect} from 'react-redux'
import {deleteFilm} from '../actions'

const RemoveFilm = ({id, dispatch}) => {
  const handleClick = e => {
    e.preventDefault();
    dispatch(deleteFilm(id));
  }

  return (
      <div>
        <button 
          className = 'delete-film' 
          onClick={handleClick}
          >
          Remove film
        </button>
      </div>
  )
}

export default connect()(RemoveFilm)