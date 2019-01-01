import React from 'react'
import DeleteFilm from '../../containers/DeleteFilm'
import './Film.css'

const Film = ({onClick, id, title, year, format, stars, toggled}) => (
  <li className = 'film'>
    <div> {title} </div>
    <input 
      className="burger-check1" 
      id="burger-check1" 
      type="checkbox" 
      checked = {toggled} />
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

export default Film