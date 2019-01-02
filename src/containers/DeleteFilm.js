import React from 'react'
import {connect} from 'react-redux'
import {deleteFilm} from '../actions'
import PropTypes from 'prop-types'

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

RemoveFilm.propTypes = {
  id: PropTypes.number.isRequired
}

export default connect()(RemoveFilm)