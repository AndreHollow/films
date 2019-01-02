import React from 'react'
import Film from './Film'
import PropTypes from 'prop-types'

const FilmsList = ({ films, searchData, isTitle, isSorted, toggleFilm }) => {
  let filmsFinal;
  
  if(searchData){
    if(!isTitle)
      filmsFinal = films.filter(film => film.stars.map(star => star.toLowerCase().includes(searchData)).some(result => result))
    else
      filmsFinal = films.filter(film => film.title.toLowerCase().includes(searchData))
  }
  else
    filmsFinal = films;

  if(filmsFinal.length === 0){
    return (
      <ul className = 'filmlist-container'>
        <li className = 'nothing-here'>There is nothing here</li>
      </ul>
    )
  }

  if(isSorted)
    return (
      <ul className = 'filmlist-container'>
        {
          filmsFinal.sort((a, b) => { 
            return a.title.localeCompare(b.title);
          }).map(film => (
            <Film key={film.id} {...film} id = {film.id} onClick={() => toggleFilm(film.id)}/>
          ))
        }
      </ul>
    ) 
  else if(!isSorted)
    return (
      <ul className = 'filmlist-container'>
        {
          filmsFinal.sort((a, b) =>{
            return a.id - b.id
          }).map(film => (
            <Film key={film.id} {...film} id = {film.id} onClick={() => toggleFilm(film.id)}/>
          ))
        }
      </ul>
    ) 
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      format: PropTypes.string.isRequired,
      stars: PropTypes.arrayOf(PropTypes.string).isRequired,
      toggled: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  searchData: PropTypes.string.isRequired,
  isTitle: PropTypes.bool.isRequired,
  isSorted: PropTypes.bool.isRequired,
  toggleFilm: PropTypes.func.isRequired
}

export default FilmsList