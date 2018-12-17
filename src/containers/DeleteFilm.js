import React from 'react'
import {connect} from 'react-redux'
import {deleteFilm} from '../actions'

let RemoveFilm = ({id, dispatch}) => {
  return (
      <div>
        <button className = 'delete-film' onClick={e => {
          e.preventDefault();
          dispatch(deleteFilm(id));

          console.log(dispatch(deleteFilm(id)));
        }}>Remove film</button>
      </div>
  )
}

export default connect()(RemoveFilm)