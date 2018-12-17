import React from 'react'
import Film from './Film'

const FilmsList = ({ films, searchData, isTitle, isSorted, toggleFilm }) => {
  let filmsFinal;
  if(isTitle){
    if(searchData){
      if(!isTitle){
        filmsFinal = films.filter(film => film.stars.map(star => star.toLowerCase().includes(searchData)).some(result => result))
      }
      else{
        filmsFinal = films.filter(film => film.title.toLowerCase().includes(searchData))
      }
    }
    else
      filmsFinal = films;
  }
  else{
    if(searchData){
      if(!isTitle){
        filmsFinal = films.filter(film => film.stars.map(star => star.toLowerCase().includes(searchData)).some(result => result))
      }
      else{
        filmsFinal = films.filter(film => film.title.toLowerCase().includes(searchData))
      }
    }
    else
      filmsFinal = films;
  }

  if(filmsFinal.length === 0)
    filmsFinal = 'There is nothing here'

  if(isSorted && Array.isArray(filmsFinal)){
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
  }
  else if(!isSorted && Array.isArray(filmsFinal))
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
  else 
    return(
      <ul className = 'filmlist-container'>
        <li className = 'nothing-here'>{filmsFinal}</li>
      </ul>
    )
}

export default FilmsList