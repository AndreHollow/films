import React from 'react'
import DeleteFilm from '../../containers/DeleteFilm'
import PropTypes from 'prop-types'
import './Film.css'

const Film = ({onClick, id, title, year, format, stars, toggled}) => (
  <li className = 'film'>
    <div> {title} </div>
    <input 
      className="burger-check1" 
      id="burger-check1" 
      type="checkbox" 
      checked = {toggled} 
      readOnly 
      />
    <label 
      htmlFor="burger-check1" 
      className="burger1" 
      onClick={onClick}
      >
      Show more
    </label>
    
    <DeleteFilm id = {id} />
    <div 
      id= "show-more" 
      className= "show-more"
    >
      <span><b>Title: </b>{title} </span>
      <span><b>Year: </b>{year} </span>
      <span><b>Format: </b> {format} </span>
      <span><b>Stars: </b>{stars.join(', ')} </span>
    </div>
  </li>
)

Film.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, 
  year: PropTypes.string.isRequired, 
  format: PropTypes.string.isRequired, 
  stars: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggled: PropTypes.bool.isRequired
}

export default Film