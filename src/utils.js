import { addFilm } from './actions'
import { store } from './index'

export const parseFileToArray = (stringFromFile) => { 
  let parsedArray = [];
  let objFull = {};

  stringFromFile.split('\n').map(el => {
    let row = el.split(': ');

    if(row[0] === 'Title' || row[0] === 'Format' || row[0] === 'Stars'){
      objFull[row[0].toLowerCase()] = row[1];
    }
    else if (row[0] === 'Release Year'){
      objFull['year'] =  row[1];
    }

    if(objFull.title && row[1] === undefined){
      parsedArray.push(objFull);
      objFull = {};
    } 

    return null;
  });

  return parsedArray
}

export const addToGlobalState = (parsedArray) => {
  let year, format, stars;
  parsedArray.map(obj => {
    year = obj.year ? obj.year : 'No information provided';
    format = obj.format ? obj.format : 'No information provided';
    stars = obj.stars ? obj.stars : 'No information provided';

    store.dispatch(
      addFilm(obj.title, year, format, stars.split(', '))
    )

    return null;
  })
}