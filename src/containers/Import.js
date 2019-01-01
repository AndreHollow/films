import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addFilm } from '../actions'
import {store} from '../index'
import './Import.css'

const parseFileToArray = (stringFromFile) => { 
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

const addToGlobalState = (parsedArray) => {
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

class Import extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFileChosen: false
    }
  }

  readFile = (object) => {
    let file = object.files[0];
    let reader = new FileReader();
    let parsedArray;

    reader.onload = function() {
      parsedArray = parseFileToArray(reader.result);
      addToGlobalState(parsedArray); 
      
    }
    reader.readAsText(file)
  }

  handleInputChange = () => {
    this.setState({
      isFileChosen: document.getElementById('file').value !== '' ? true : false
    })
  }

  render() {
    return (
      <div className = 'import-container'>
        <label 
          htmlFor="file" 
          style = {{
            borderColor: this.state.isFileChosen ? 'limegreen' : '#d5c6e0'
          }} 
          className = 'import-choosefile'
        >
          <input 
            type="file" 
            id="file" 
            accept=".txt" 
            
            onChange = {this.handleInputChange} 
            />
            Import file
        </label>
        
        <button 
          disabled = {!this.state.isFileChosen} 
          className = 'import-submit'
          onClick={() => this.readFile(document.getElementById('file'))}
        >
          Read!
        </button>
      </div>
    )
  }
}

export default connect()(Import)